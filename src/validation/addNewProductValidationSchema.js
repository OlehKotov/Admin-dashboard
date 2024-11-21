import * as yup from "yup";

export const addNewProductValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Product info must be at least 3 characters long")
    .required("Product info is required"),
  category: yup.string().required("Category is required"),
  suppliers: yup
    .string()
    .min(3, "Suppliers must be at least 3 characters long")
    .required("Suppliers is required"),
  stock: yup.string().required("Stock is required"),
  price: yup.string().required("Price is required"),
});
