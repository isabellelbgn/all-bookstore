import React from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { PageTemplate } from "../../components/Main Components/PageTemplate";

const AccountInformation = () => {
  return (
    <>
      <Navigation />
      <PageTemplate>
        <div className="grid grid-cols-3 gap-1">
          <div>
            {" "}
            <Sidebar />{" "}
          </div>
          <div className=" col-span-2 ml-8">
            <div className="text-lg font-montserrat text-green-50 mb-6">
              {" "}
              Account Information
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg font-montserrat italic mr-56">
                My Information
              </div>
              <div className="flex">
                <PrimaryButton className="w-28 ml-4">Edit</PrimaryButton>
                <PrimaryButton className="w-48 ml-4">
                  Change Password
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </PageTemplate>
      <Footer />
    </>
  );
};

export default AccountInformation;
