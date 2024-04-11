import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "../../components/Main Components/InputBox";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import { GrayBox } from "../../components/Main Components/GrayBox";
import { toast } from "react-toastify";
import axios from "axios";

const Login = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const baseUrl = "http://127.0.0.1:8000/api/";

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", loginFormData.username);
    formData.append("password", loginFormData.password);

    try {
      const response = await axios.post(baseUrl + "customer/login/", formData);

      if (response.data.success) {
        setError(false);
        setErrorMessage("");
        localStorage.setItem("customer_username", loginFormData.username);
        window.location.href = "/customer/dashboard/";
      } else {
        setError(true);
        setErrorMessage(response.data.message || "Invalid credentials.");
      }
    } catch (error) {
      setError(true);
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Login error:", error);
    }
  };

  const isFormReady = () =>
    loginFormData.username.trim() !== "" &&
    loginFormData.password.trim() !== "";

  return (
    <div>
      <Navigation />
      <PageTemplate>
        <GrayBox>
          <main>
            <section className="container mx-auto py-8">
              <h1 className="text-3xl font-semibold text-center mb-8">
                Log In
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="block mb-2 text-sm">
                    Username
                  </label>
                  <InputBox
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter username"
                    value={loginFormData.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block mb-2 text-sm">
                    Password
                  </label>
                  <InputBox
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={loginFormData.password}
                    onChange={handleInputChange}
                  />
                </div>

                {error && (
                  <div className="text-red-500 text-sm mb-4">
                    {errorMessage}
                  </div>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                    <label htmlFor="remember" className="ml-2 text-sm">
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <PrimaryButton disabled={!isFormReady()} className="w-full">
                  Log in
                </PrimaryButton>
              </form>

              <hr className="my-12 border-dotted border-t-1 bg-gray-500" />

              <div className="flex items-center justify-between">
                <p className="text-sm font-light mt-6">
                  Don’t have an account yet?
                </p>

                <Link
                  to="/customer/register"
                  className="text-sm text-green-500 hover:underline mt-6"
                >
                  Sign up
                </Link>
              </div>
            </section>
          </main>
        </GrayBox>
      </PageTemplate>

      <Footer />
    </div>
  );
};

export default Login;
