import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import InputBox from "../../components/Main Components/InputBox";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import { GrayBox } from "../../components/Main Components/GrayBox";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const { loginCustomer, error, errorMessage } = useContext(AuthContext);

  const handleInputChange = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  const isFormReady = () =>
    loginFormData.username.trim() !== "" &&
    loginFormData.password.trim() !== "";

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginCustomer(event);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

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
