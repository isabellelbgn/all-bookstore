import React, { useState } from "react";
import InputBox from "../../components/Main Components/InputBox";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import { Typography } from "@material-tailwind/react";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import { GrayBox } from "../../components/Main Components/GrayBox";
import axios from "axios";

const Register = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const baseUrl = "http://127.0.0.1:8000/api/";

  const [registerFormData, setRegisterFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("first_name", registerFormData.first_name);
    formData.append("last_name", registerFormData.last_name);
    formData.append("email", registerFormData.email);
    formData.append("username", registerFormData.username);
    formData.append("password", registerFormData.password);

    try {
      const response = await axios.post(
        baseUrl + "customer/register/",
        formData
      );

      if (response.data.success) {
        setRegisterFormData({
          first_name: "",
          last_name: "",
          username: "",
          email: "",
          password: "",
        });
        setError(false);
        setSuccessMessage(response.data.message);
        setErrorMessage("");
        navigate("/customer/login");
      } else {
        setError(true);
        setErrorMessage(response.data.message || "Invalid credentials.");
      }
    } catch (error) {
      setError(true);
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Register error:", error);
    }
  };

  const isFormReady = () =>
    registerFormData.first_name.trim() !== "" &&
    registerFormData.last_name.trim() !== "" &&
    registerFormData.username.trim() !== "" &&
    registerFormData.password.trim() !== "" &&
    registerFormData.email.trim() !== "";

  return (
    <div>
      <Navigation />
      <PageTemplate>
        <GrayBox>
          <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
            Sign Up
          </h1>
          <form
            className="font-normal space-y-4 md:space-y-6"
            action="#"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative z-0 w-full group">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm text-black"
                >
                  First Name
                </label>
                <InputBox
                  type="name"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  value={registerFormData.first_name}
                  onChange={handleInputChange}
                />
                {error.first_name && (
                  <div className="text-red-500 text-xs">{errorMessage}</div>
                )}
              </div>
              <div className="relative z-0 w-full group">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm text-black "
                >
                  Last Name
                </label>
                <InputBox
                  type="name"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  value={registerFormData.last_name}
                  onChange={handleInputChange}
                />
                {error.last_name && (
                  <div className="text-red-500 text-xs">{errorMessage}</div>
                )}
              </div>
              <div className="relative z-0 w-full group">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm text-black "
                >
                  Username
                </label>
                <InputBox
                  type="name"
                  name="username"
                  id="username"
                  placeholder="Username"
                  value={registerFormData.username}
                  onChange={handleInputChange}
                />
                {error.username && (
                  <div className="text-red-500 text-xs">{errorMessage}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-black "
                >
                  Email
                </label>
                <InputBox
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@email.com"
                  value={registerFormData.email}
                  onChange={handleInputChange}
                />
                {error.email && (
                  <div className="text-red-500 text-xs">{errorMessage}</div>
                )}
              </div>
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
                value={registerFormData.password}
                onChange={handleInputChange}
              />
              {error.password && (
                <div className="text-red-500 text-xs">{errorMessage}</div>
              )}
              <Typography className="mt-2 flex items-center mb-2 text-gray-400 text-xs gap-1 font-normal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="-mt-px h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Use at least 8 characters, one uppercase, one lowercase and one
                number.
              </Typography>
            </div>

            {error && (
              <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
            )}

            {successMessage && (
              <div className="text-green-500 text-sm mb-4">
                {successMessage}
              </div>
            )}

            <PrimaryButton
              disabled={!isFormReady()}
              className="w-full font-medium text-sm"
            >
              Sign Up
            </PrimaryButton>
            <hr className="my-12 border-dotted border-t-1 bg-gray-500" />
            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-gray-400 mt-6">
                Have an account?
              </p>
              <Link
                to="/customer/login"
                className="text-sm text-green-50 hover:underline mt-6"
              >
                Log in
              </Link>
            </div>
          </form>
        </GrayBox>
      </PageTemplate>
      <Footer />
    </div>
  );
};
export default Register;
