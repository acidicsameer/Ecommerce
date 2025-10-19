import * as yup from "yup";
const PaymentSchema = yup.object({
  fullname: yup.string().required("Enter your name"),
  number: yup
    .string()
    .required("Enter your phone number")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  address: yup.string().required("Enter your address"),
});
export default PaymentSchema;
