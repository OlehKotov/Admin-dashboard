import * as yup from "yup";

export const addNewSuppliersValidationSchema = yup.object().shape({
  name: yup.string().required("Suppliers Info is required"),
  address: yup.string().required("Address is required"),
  suppliers: yup.string().required("Company is required"),
  date: yup.string().required("Date is required"),
  amount: yup.string().required("Amount is required"),
  status: yup.string().required("Status is required"),
});