import React, { useState } from "react";
import InputBox from "../../components/Main Components/InputBox";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import { GrayBox } from "../../components/Main Components/GrayBox";
import GreenNav from "../../components/Main Components/GreenNav";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        setError("");
        toast.success("Login Successful!");
      } else {
        const errorMessage = await response.text();
        setError(
          errorMessage || "Invalid email or password. Please try again."
        );
        toast.error(
          errorMessage || "Invalid email or password. Please try again."
        );
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", error);
    }
  };

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
            action="#"
            onSubmit={submit}
          >
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-black">
                Email
              </label>
              <InputBox
                type="email"
                name="email"
                id="email"
                placeholder="name@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

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
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <PrimaryButton className="w-full font-medium text-sm">
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
