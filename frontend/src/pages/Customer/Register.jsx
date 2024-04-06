import React from "react";
import { Link } from "react-router-dom";
import InputBox from "../../components/InputBox";
import { Typography } from "@material-tailwind/react";
import { PrimaryButton } from "../../components/PrimaryButton";

const Register = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8">
          <div className="w-full bg-gray-50 rounded-2xl md:mt-0 sm:max-w-2xl xl:px-10">
            <div className="font-montserrat p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Sign Up
              </h1>
              <form className="font-normal space-y-4 md:space-y-6" action="#">
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative z-0 w-full group">
                    <label
                      for="firstname"
                      className="block mb-2 text-sm text-black "
                    >
                      First Name
                    </label>
                    <InputBox
                      type="name"
                      name="firstname"
                      id="firstname"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="relative z-0 w-full group">
                    <label
                      for="lastname"
                      className="block mb-2 text-sm text-black "
                    >
                      Last Name
                    </label>
                    <InputBox
                      type="name"
                      name="lastname"
                      id="lastname"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
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
                    Use at least 8 characters, one uppercase, one lowercase and
                    one number.
                  </Typography>
                </div>
                <PrimaryButton className="w-full font-medium text-sm">
                  Sign Up
                </PrimaryButton>
                <hr className="my-12 border-dotted border-t-1 bg-gray-500" />
                <div className="flex items-center justify-between">
                  <p className="text-sm font-light text-gray-400 mt-6">
                    Have an account?
                  </p>
                  <Link
                    to="/login"
                    href="#"
                    className="text-sm text-green-50 hover:underline mt-6"
                  >
                    Log in
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

export default Register;
