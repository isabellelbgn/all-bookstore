import React from 'react'
import InputBox from "../components/InputBox";
import Navigation from "../components/Navigation";
import { Footer } from '../components/Footer';
import { Typography } from '@material-tailwind/react';


export const Signup = () => {
  return (
    <div>
    <Navigation/>
        <section class="bg-white">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-gray-50 rounded-2xl md:mt-0 sm:max-w-2xl xl:p-10  ">
                    <div class="font-montserrat p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Sign Up
                        </h1>
                        <form class="font-normal space-y-4 md:space-y-6" action="#">
                            <div class="grid grid-cols-2 gap-6">
                                <div class="relative z-0 w-full group">
                                    <label for="firstname" class="block mb-2 text-sm text-black ">First Name</label>
                                    <InputBox type="name" name="firstname" id="firstname" placeholder="First Name"/>
                                </div>
                                <div class="relative z-0 w-full group">
                                    <label for="lastname" class="block mb-2 text-sm text-black ">Last Name</label>
                                    <InputBox type="name" name="lastname" id="lastname" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm text-black ">Email</label>
                                <InputBox type="email" name="email" id="email" placeholder="name@email.com"/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm text-black">Password</label>
                                <InputBox type="password" name="password" id="password" placeholder="••••••••"/>
                                    <Typography
                                        className="mt-2 flex items-center mb-2 text-gray-400 text-xs gap-1 font-normal">
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
                                        Use at least 8 characters, one uppercase, one lowercase and one number.
                                    </Typography>
                            </div>
                            <button type="submit" class="w-full text-white bg-green-50 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-3 text-center">Sign Up</button>
                            <hr class="my-12 border-dotted border-t-1 bg-gray-500"/>
                            <div class="flex items-center justify-between">
                            <p class="text-sm font-light text-gray-400 mt-6">
                                Have an account? 
                            </p>
                                <a href="#" class="text-sm text-green-50 hover:underline mt-6">Log in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    <Footer/>
    </div>
  )
}
