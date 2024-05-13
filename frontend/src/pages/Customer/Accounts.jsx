import React from "react";
import Navigation from "../../components/Main Components/Navigation";
import Footer from "../../components/Main Components/Footer";
import Sidebar from "../../components/Sidebar";
import GrayTable from "../../components/Containers/GrayTable";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { PageTemplate } from "../../components/Main Components/PageTemplate";

const Accounts = () => {
  return (
    <>
      <Navigation />
      <PageTemplate >
      <div className="grid grid-cols-2 gap-1">
      <div> <Sidebar /> </div>
        <div>
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-montserrat italic">Account Information</div>
            <div className="flex">
              <PrimaryButton className="w-28 ml-4">Edit</PrimaryButton>
              <PrimaryButton className="w-48 ml-4">Change Password</PrimaryButton>
            </div>
          </div>
          <GrayTable className="mb-8 "/>
          <div className="flex justify-between mt-4">
            <div className="text-lg font-montserrat italic static">Default Shipping Address </div>
            <div className="flex flex-row">
              <PrimaryButton className= " w-48 ml-40"> Add New Address</PrimaryButton>
            </div>
          </div>
          <div className=' container mt-9 mb-40'>
            <table className=' table-auto w-full'>
                <tbody>
                    <tr className=' bg-gray-100'>
                        <td className='px-4 py-6 text-left font-[montserrat] font-bold'> Street </td>
                        <td className='px-4 py-6 text-right font-[montserrat] w-2/3'> #8 sunrise street monteritz </td>
                    </tr>
                    <tr>
                        <td className='px-4 py-6 text-left font-[montserrat] font-bold'> Barangay </td>
                        <td className='px-4 py-6 text-right font-[montserrat] w-2/3'> </td>
                    </tr>
                    <tr  className=' bg-gray-100'>
                        <td className='px-4 py-6 text-left font-[montserrat] font-bold'>City </td>
                        <td className='px-4 py-6 text-right font-[montserrat] w-2/3'> </td>
                    </tr>
                    <tr>
                        <td className='px-4 py-6 text-left font-[montserrat] font-bold'> Region </td>
                        <td className='px-4 py-6 text-right font-[montserrat] w-2/3'> Davao del Sur </td>
                    </tr>
                    <tr  className=' bg-gray-100'
                    >
                        <td className='px-4 py-6 text-left font-[montserrat] font-bold'> Zip Code </td>
                        <td className='px-4 py-6 text-right font-[montserrat] w-2/3'> </td>
                    </tr>
                </tbody>

            </table>
          </div>
        </div>
      </div>
      </PageTemplate>
        <Footer />
  
    </>
  )
}

export default Accounts