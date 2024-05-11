import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  const [customer, setCustomer] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );

  const [loading, setLoading] = useState(true);

  const loginCustomer = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    try {
      const data = await response.json();
      if (response.status === 200) {
        setError(false);
        setErrorMessage("");
        setAuthTokens(data);
        setCustomer(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        window.location.href = "/";
      } else {
        setError(true);
        setErrorMessage(
          data.message || "Invalid username or password. Please try again!"
        );
      }
    } catch (error) {
      setError(true);
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Login error:", error);
    }
  };

  const logoutCustomer = () => {
    setAuthTokens(null);
    setCustomer(null);
    localStorage.removeItem("authTokens");
    window.location.href = "/";
  };

  const updateToken = async () => {
    console.log("Update token called.");
    const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: authTokens?.refresh,
      }),
    });
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setCustomer(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutCustomer();
    }

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  const contextData = {
    customer: customer,
    loginCustomer: loginCustomer,
    logoutCustomer: logoutCustomer,
    error: error,
    errorMessage: errorMessage,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
