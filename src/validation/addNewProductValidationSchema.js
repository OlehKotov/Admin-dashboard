import * as yup from "yup";

export const addNewProductValidationSchema = yup.object().shape({
  name: yup.string().required("Product info is required"),
  category: yup.string().required("Category is required"),
  suppliers: yup.string().required("Suppliers is required"),
  stock: yup.string().required("Stock is required"),
  price: yup.string().required("Price is required"),
});
