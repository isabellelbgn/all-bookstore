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
      <div className="lg:max-w-7xl max-w-xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-1 ">
          <Sidebar className="lg:col-span-1" />
          <div className="lg:col-span-3 mt-5">
            <div className="p-6">
              <div className="text-lg  flex justify-between font-montserrat text-green-50 mb-6">
                Account Information
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-montserrat italic">
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AccountInformation;
