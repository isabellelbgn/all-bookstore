import InputBox from "../components/InputBox";
import Navigation from "../components/Navigation";
import React from 'react'
import { Footer } from "../components/Footer";
import { PrimaryButton } from "../components/PrimaryButton";

export const Login = () => {
  return (
    <div>
    <Navigation/>
        <section class="bg-white">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-gray-50 rounded-2xl md:mt-0 sm:max-w-2xl xl:p-10  ">
                    <div class="font-montserrat p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Log In
                        </h1>
                        <form class=" font-normal space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm text-black ">Email</label>
                                <InputBox type="email" name="email" id="email" placeholder="name@email.com"/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm text-black">Password</label>
                                <InputBox type="password" name="password" id="password" placeholder="••••••••"/>
                                
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                    </div>
                                    <div class="ml-3 text-sm">
                                        <label for="remember" class="text-gray-400">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                            </div>
                            <PrimaryButton className="w-full font-medium text-sm">Log in</PrimaryButton>          
                            <hr class="my-12 border-dotted border-t-1 bg-gray-500"/>
                            <div class="flex items-center justify-between">
                            <p class="text-sm font-light text-gray-400 mt-6">
                                Don’t have an account yet? 
                            </p>
                                <a href="#" class="text-sm text-green-50 hover:underline mt-6">Sign up</a>
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
