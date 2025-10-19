

import * as yup from "yup";
const contactSchema = yup.object({
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
export default contactSchema