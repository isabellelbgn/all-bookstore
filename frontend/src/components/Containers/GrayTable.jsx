import React from 'react'

const GrayTable = () => {
  return (
    <div className=' container mx-auto'>
        <table className=' table-auto'>
            <tbody>
                <tr className=' bg-gray-100'>
                    <td className='px-4 py-2 text-left font-[montserrat] font-bold'> First Name </td>
                    <td className='px-4 py-2 text-right font-[montserrat] w-2/3'> Claire </td>
                </tr>
                <tr>
                    <td className='px-4 py-2 text-left font-[montserrat] font-bold'> Last Name </td>
                    <td className='px-4 py-2 text-right font-[montserrat] w-2/3'> Masatin </td>
                </tr>
                <tr  className=' bg-gray-100'>
                    <td className='px-4 py-2 text-left font-[montserrat] font-bold'> Phone Number </td>
                    <td className='px-4 py-2 text-right font-[montserrat] w-2/3'> 0962 273 1233 </td>
                </tr>
                <tr>
                    <td className='px-4 py-2 text-left font-[montserrat] font-bold'> Email </td>
                    <td className='px-4 py-2 text-right font-[montserrat] w-2/3'> clairemasatin@gmail.com </td>
                </tr>
                <tr  className=' bg-gray-100'
                >
                    <td className='px-4 py-2 text-left font-[montserrat] font-bold'> Username </td>
                    <td className='px-4 py-2 text-right font-[montserrat] w-2/3'> clairemasatin </td>
                </tr>
                <tr>
                    <td className='px-4 py-2 text-left font-[montserrat] font-bold'> Password </td>
                    <td className='px-4 py-2 text-right font-[montserrat] w-2/3 '> ********n </td>
                </tr>
            </tbody>

        </table>
    </div>
  )
}

export default GrayTable