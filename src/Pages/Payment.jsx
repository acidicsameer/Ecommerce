import React from 'react';

const Payment = () => {
  const paymentMethods = [
    {
      id: 'esewa',
      name: 'eSewa',
      img: '/src/assets/images/esewa.png',
      phone: '9804408108',
      description: 'Scan this QR code to pay via eSewa.',
    },
    {
      id: 'khalti',
      name: 'Khalti',
      img: '/src/assets/images/Khalti.png',
      phone: '986070736*',
      description: 'Scan this QR code to pay via Khalti.',
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      img: '/src/assets/images/bank.png',
      phone: '9807409596',
      description: 'Scan this QR code to pay via Bank Transfer.',
    },
  ];

  return (
    <div className="w-full flex flex-wrap font-semibold px-7 justify-center items-center  ">
      {/* Payment Methods */}
      <div className="  bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center">Pay Now</h2>
        <div className="flex flex-col gap-2">
          {paymentMethods.map(({ id, name, img, phone }) => (
            <div
              key={id}
              className="flex items-center border rounded-lg p-2 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
            <div className='flex flex-col '>
              <img
                src={img}
                className="w-25 h-25 object-contain "
               
              />
              <p className="text-lg font-semibold">{name}</p>
              <p className="mt-2 text-sm text-gray-700">
                Phone: <span className="font-mono">{phone}</span>
              </p>
              </div>
              <div className="mt-4 ml-6 text-sm text-gray-600 space-y-1 text-left max-w-xs">
                <p>1. Upload your screenshot of the payment as proof.</p>
                <p>2. Write your full name and phone number in the remarks section.</p>
              
                <p>3. Keep the transaction ID for your records.</p>
                <p>4. Contact support if you face any issues with the payment.</p>
              </div>
            
            </div>
          ))}
        </div>
      </div>

      <section className="w-full md:w-1/2  flex items-center justify-center rounded-lg ">
        <form    className="bg-white w-full max-w-md flex flex-col gap-6 rounded-3xl p-8 pt-6 shadow-lg">
          <div className="text-center">
           
            <h2 className="text-2xl font-bold">Payment Info</h2>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="fullName" className="text-[#030102] text-base font-normal font-['Roboto']">
              Full Name
            </label>
            <input
              id="fullName"
              placeholder="Enter Your Full Name"
              type="text"
              className="bg-white py-2 px-3 rounded-[10px] shadow-[0px_4px_18px_rgba(158,168,189,0.31)] border border-[#e2e6ee]"
            />
          </div>

          <div className="flex relative flex-col gap-2">
            <label htmlFor="number" className="text-[#030102] text-base font-normal font-['Roboto']">
              Phone number
            </label>
            <input
              id="number"
              placeholder="Enter Your Phone Number"
              type="text"
              className="bg-[#E2E6EE] py-2 px-3 rounded-[10px] shadow-[0px_4px_18px_rgba(158,168,189,0.31)] border border-[#e2e6ee]"
            />
            
          </div>

          

          <div className="flex flex-col gap-2">
            <label htmlFor="Address" className="text-[#030102] text-base font-normal font-['Roboto']">
           Address
            </label>
            <input
              id="address"
              placeholder="Enter Your Address"
              type="text"
              className="bg-[#E2E6EE] py-2 px-3 rounded-[10px] shadow-[0px_4px_18px_rgba(158,168,189,0.31)] border border-[#e2e6ee]"
            />
            <label htmlFor="file" className="text-[#030102] text-base font-normal font-['Roboto']">
      
            </label>
            <input
              id="file"
             
              type="file"
              className="bg-[#E2E6EE] py-2 px-3 rounded-[10px] shadow-[0px_4px_18px_rgba(158,168,189,0.31)] border border-[#e2e6ee]"
            />
          </div>

          <button
            type="submit"
            className="py-3 w-full bg-[#288fb4] rounded-[10px] text-white text-sm font-normal hover:bg-[#1e6d85] transition-colors"
          >
            Confirm Payment
          </button>
        
        </form>
      </section>
    </div>
  );
};

export default Payment;
