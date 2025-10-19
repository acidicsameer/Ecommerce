import React from "react";
import { toast } from "react-toastify";
import notificationsound from "/sound/addedSound.wav";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";

import PaymentSchema from "../schema/contactSchema";
const Payment = () => {
  const paymentMethods = [
    {
      id: "esewa",
      name: "eSewa",
      img: "/src/assets/images/esewa.png",
      phone: "9804408108",
      description: "Scan this QR code to pay via eSewa.",
    },
    {
      id: "khalti",
      name: "Khalti",
      img: "/src/assets/images/Khalti.png",
      phone: "986070736*",
      description: "Scan this QR code to pay via Khalti.",
    },
    {
      id: "bank",
      name: "Bank Transfer",
      img: "/src/assets/images/bank.png",
      phone: "9807409596",
      description: "Scan this QR code to pay via Bank Transfer.",
    },
  ];
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(PaymentSchema),
  });

  // Play sound on payment success
  const playPaymentSound = () => {
    const audio = new Audio(notificationsound);
    audio.play();
  };
  const Paymentnotify = () => {
    toast.success("Payment Done!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    playPaymentSound();
  };

  return (
    <div className="w-full flex flex-wrap font-semibold px-7 justify-center items-center">
      {/* Payment Methods */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-8">
        <h2 className="text-xl font-bold text-center mb-4">Pay Now</h2>
        <div className="flex flex-col gap-4">
          {paymentMethods.map(({ id, name, img, phone }) => (
            <div
              key={id}
              className="flex items-center border rounded-lg p-3 shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="flex flex-col items-center mr-6">
                <img
                  src={img}
                  alt={`${name} logo`}
                  className="w-20 h-20 object-contain"
                />
                <p className="text-lg font-semibold mt-2">{name}</p>
                <p className="mt-1 text-sm text-gray-700">
                  Phone: <span className="font-mono">{phone}</span>
                </p>
              </div>
              <div className="text-sm text-gray-600 space-y-1 max-w-xs">
                <p>1. Upload your screenshot of the payment as proof.</p>
                <p>
                  2. Write your full name and phone number in the remarks
                  section.
                </p>
                <p>3. Keep the transaction ID for your records.</p>
                <p>
                  4. Contact support if you face any issues with the payment.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Form */}
      <section className="w-full md:w-1/2 flex items-center justify-center rounded-lg">
        <form
          onSubmit={handleSubmit()}
          className="bg-white w-full max-w-md flex flex-col gap-6 rounded-3xl p-8 pt-6 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-center">Payment Info</h2>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullname"
              className="text-[#030102] text-base font-normal font-['Roboto']"
            >
              Full Name
            </label>
            <input
              htmlFor="fullname"
              id="fullname"
              {...register("fullname")}
              className="bg-white py-2 px-3 rounded-[10px] shadow border border-[#e2e6ee]"
              placeholder="Your full name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="number"
              className="text-[#030102] text-base font-normal font-['Roboto']"
            >
              Phone Number
            </label>
            <input
              id="number"
              {...register("number")}
              className="bg-[#E2E6EE] py-2 px-3 rounded-[10px] shadow border border-[#e2e6ee]"
              placeholder="10 digit phone number"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="address"
              className="text-[#030102] text-base font-normal font-['Roboto']"
            >
              Address
            </label>
            <input
              id="address"
              {...register("address")}
              className="bg-[#E2E6EE] py-2 px-3 rounded-[10px] shadow border border-[#e2e6ee]"
              placeholder="Your address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="file"
              className="text-[#030102] text-base font-normal font-['Roboto']"
            >
              Upload Payment Screenshot
            </label>
            <input
              id="file"
              type="file"
              className="bg-[#E2E6EE] py-2 px-3 rounded-[10px] shadow border border-[#e2e6ee]"
            />
          </div>

          <button
            onClick={() => {
              Paymentnotify();
              reset();
            }}
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
