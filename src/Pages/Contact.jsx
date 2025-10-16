import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// ✅ Schema with phone as string (10 digits)
const schema = yup.object({
  name: yup.string().required("Enter your name"),
  number: yup
    .string()
    .required("Enter your phone number")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: yup
    .string()
    .required("Enter your message")
    .min(5, "Minimum 5 characters")
    .max(50, "Maximum 50 characters"),
});

const Contact = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    emailjs
      .sendForm("service_hx6alxx", "template_mnvcy52", form.current, {
        publicKey: "KmfDbmHZ73TOJiPYY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    reset();
  };

  return (
    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="pr-6">
            <h2 className="text-3xl font-bold dark:text-white mb-4">
              Contact Info
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-8">
              Feel free to reach out to me anytime. I'd love to connect and
              continue the conversation!
            </p>
            <ul className="space-y-6">
              {/* Address */}
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                  📍
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Our Address
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">Dharan-8</p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Purwanchal Back Gate
                  </p>
                </div>
              </li>

              {/* Phone/Email */}
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                  📞
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mobile: +977 9807409596
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Email: acidicsameer008@gmail.com
                  </p>
                </div>
              </li>

              {/* Working Hours */}
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-white">
                  ⏰
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    Working Hours
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Mon - Fri: 08:00 - 17:00
                  </p>
                  <p className="text-gray-600 dark:text-slate-400">
                    Sat - Sun: 08:00 - 12:00
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white dark:bg-slate-700 p-8 shadow rounded-lg">
            <h2 className="text-2xl font-bold dark:text-white mb-6">
              Send Me a Message
            </h2>
            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <input
                  {...register("name")}
                  placeholder="Your Name"
                  className="w-full border rounded px-4 py-2 dark:bg-slate-800 dark:text-white"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register("number")}
                  placeholder="Phone Number"
                  className="w-full border rounded px-4 py-2 dark:bg-slate-800 dark:text-white"
                />
                {errors.number && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.number.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register("message")}
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border rounded px-4 py-2 dark:bg-slate-800 dark:text-white"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
