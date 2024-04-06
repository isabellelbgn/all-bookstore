import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../../components/InputBox";
import { PrimaryButton } from "../../components/PrimaryButton";

const Login = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <div className="w-full bg-gray-50 rounded-2xl md:mt-0 sm:max-w-2xl xl:p-10  ">
            <div className="font-montserrat p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Log In
              </h1>
              <form className="font-normal space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" className="block mb-2 text-sm text-black ">
                    Email
                  </label>
                  <InputBox
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@email.com"
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm text-black"
                  >
                    Password
                  </label>
                  <InputBox
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                  />
                </div>
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
                      <label for="remember" className="text-gray-400">
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
                    to="/register"
                    className="text-sm text-green-50 hover:underline mt-6"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
