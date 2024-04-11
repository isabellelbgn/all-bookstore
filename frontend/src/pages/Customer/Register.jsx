import React, { useState } from "react";
import InputBox from "../../components/Main Components/InputBox";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import { Typography } from "@material-tailwind/react";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import { PageTemplate } from "../../components/Main Components/PageTemplate";
import { GrayBox } from "../../components/Main Components/GrayBox";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!firstname.trim()) {
      errors.firstname = "Please enter your first name.";
    }

    if (!lastname.trim()) {
      errors.lastname = "Please enter your last name.";
    }

    if (!email.trim()) {
      errors.email = "Please enter your email address.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!password.trim()) {
      errors.password = "Please enter your password.";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    setErrors(errors);
    // Check if there are any errors
    const isValid = Object.keys(errors).length === 0;

    return isValid;
  };

  const submit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Your fetch code for registration
      console.log("Form submitted successfully.");
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

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
            onSubmit={submit}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative z-0 w-full group">
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm text-black"
                >
                  First Name
                </label>
                <InputBox
                  type="name"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {errors.firstname && (
                  <div className="text-red-500 text-xs">{errors.firstname}</div>
                )}
              </div>
              <div className="relative z-0 w-full group">
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm text-black "
                >
                  Last Name
                </label>
                <InputBox
                  type="name"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {errors.lastname && (
                  <div className="text-red-500 text-xs">{errors.lastname}</div>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-black ">
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
              {errors.email && (
                <div className="text-red-500 text-xs">{errors.email}</div>
              )}
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
              {errors.password && (
                <div className="text-red-500 text-xs">{errors.password}</div>
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

            <PrimaryButton className="w-full font-medium text-sm">
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
