import React from "react";
import Container from "./Container";
import logo from "./images/PrideandPrejudice.jpeg"; // relative path to image
import { SecondaryButton } from "./SecondaryButton";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export const Header = () => {
  return (
    <div>
      <Container className="flex flex-wrap items-center">
        <div className="flex-1 ml-16 lg:w-1/2">
          <div className="font-montserrat max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Book of the Year
            </h1>
            <p className="py-5 text-2xl leading-normal text-white ">
              Pride and Prejudice
            </p>
            <p className="text-sm leading-normal text-white ">by Jane Austen</p>
            <p className="py-5 text-xs leading-normal text-white ">
              Pride and Prejudice follows the turbulent relationship
              between Elizabeth Bennet, the daughter of a country gentleman,
              and Fitzwilliam Darcy, a rich aristocratic landowner. They must
              overcome the titular sins of pride and prejudice in order to fall
              in love and marry.
            </p>
            <SecondaryButton className="flex">
              View More{" "}
              <HiOutlineArrowLongRight className="ml-1 flex" size={25} />{" "}
            </SecondaryButton>
          </div>
        </div>
        <div className="flex-1 mr-16 lg:w-1/2">
          <div className="flex justify-center">
            <div className="relative flex h-[400px] w-[400px] items-center justify-center bg-white rounded-full before:absolute before:h-[340px] before:w-[340px] before:rounded-full ">
              <img
                src={logo}
                width="200"
                height="400"
                className={"object-cover z-10  "}
                loading="eager"
                placeholder="blur"
                alt={"logo"}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
