import React, { useState } from "react";
import InputBox from "../../components/InputBox";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { PrimaryButton } from "../../components/PrimaryButton";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { PageTemplate } from "../../components/PageTemplate";
import { GrayBox } from "../../components/GrayBox";
import GreenNav from "../../components/GreenNav";
import axios from "axios";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  // const submit = async (e) => {
  //   e.preventDefault();

  //   if (!email || !password) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   try {
  //     const response = await fetch("http://localhost:8000/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     });

  //     if (response.ok) {
  //       setError("");
  //       toast.success("Login Successful!");
  //     } else {
  //       const errorMessage = await response.text();
  //       setError(
  //         errorMessage || "Invalid email or password. Please try again."
  //       );
  //       toast.error(
  //         errorMessage || "Invalid email or password. Please try again."
  //       );
  //     }
  //   } catch (error) {
  //     setError("An error occurred. Please try again later.");
  //     console.error("Login error:", error);
  //   }
  // };

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const baseUrl = "http://127.0.0.1:8000/api/";

  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", loginFormData.username);
    formData.append("password", loginFormData.password);

    axios
      .post(baseUrl + "customer/login/", formData)
      .then(function (response) {
        if (response.data.success) {
          setError(false);
          setErrorMessage("");
          localStorage.setItem("customer_username", loginFormData.username);
          window.location.href = "/customer/dashboard/";
        } else {
          setError(true);
          setErrorMessage(response.data.message || "Invalid credentials.");
        }
      })
      .catch(function (error) {
        setError(true);
        setErrorMessage("An error occurred. Please try again later.");
        console.error("Login error:", error);
      });
  };

  const buttonEnable =
    loginFormData.username.trim() !== "" &&
    loginFormData.password.trim() !== "";

  return (
    <div>
      <Navigation />
      <PageTemplate>
        <GrayBox>
          <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Log In
          </h1>
          <form
            className="font-normal space-y-4 md:space-y-6"
            onSubmit={submitHandler}
          >
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-black">
                Username
              </label>
              <InputBox
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                value={loginFormData.username}
                onChange={inputHandler}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm text-black"
              >
                Password
              </label>
              <InputBox
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={loginFormData.password}
                onChange={inputHandler}
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-400">
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                to="#"
                className="text-sm font-medium text-primary-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <PrimaryButton
              disabled={!buttonEnable}
              className="w-full font-medium text-sm"
            >
              Log in
            </PrimaryButton>

            <hr className="my-12 border-dotted border-t-1 bg-gray-500" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-gray-400 mt-6">
                Don’t have an account yet?
              </p>

              <Link
                to="/customer/register"
                className="text-sm text-green-50 hover:underline mt-6"
              >
                Sign up
              </Link>
            </div>
          </form>
        </GrayBox>
      </PageTemplate>
      <Footer />
    </div>
  );
};

export default Login;
