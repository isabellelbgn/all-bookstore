import React from "react";
import Container from "./Container";
import logo from "./images/PrideandPrejudice.jpeg"; // relative path to image
import { SecondaryButton } from "./SecondaryButton";

export const Header = () => {
  return (
    <div>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="font-montserrat max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight ">
              Book of the Year
            </h1>
            <p className="py-5 text-md leading-normal text-white lg:text-xl xl:text-2xl ">
              Pride and Prejudice
            </p>
            <SecondaryButton>View More</SecondaryButton>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <img
              src={logo}
              width="200"
              height="400"
              className={"object-cover"}
              loading="eager"
              placeholder="blur"
              alt={"logo"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
