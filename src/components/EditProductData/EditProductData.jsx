import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import css from "./EditProductData.module.css";
import sprite from "../../assets/icons/sprite.svg";
import BaseModal from "../BaseModal/BaseModal";
import { editProductValidationSchema } from "../../validation/editProductValidationSchema";
import { updateProduct } from "../../redux/store/storeOps";
import Select from "react-select";

const options = [
  { value: "Medicine", label: "Medicine" },
  { value: "Heart", label: "Heart" },
  { value: "Head", label: "Head" },
  { value: "Hand", label: "Hand" },
  { value: "Leg", label: "Leg" },
  { value: "Dental_care", label: "Dental Care" },
  { value: "Skin_care", label: "Skin Care" },
];

const EditProductData = ({ isOpen, onRequestClose, product }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editProductValidationSchema),
    defaultValues: {
      name: "",
      suppliers: "",
      stock: "",
      price: "",
      category: "",
    },
  });

  const getValue = () => {
    return currentCategory
      ? options.find((category) => category.value === currentCategory)
      : "";
  };

  useEffect(() => {
    if (isOpen && product) {
      reset({
        name: product.name || "",
        suppliers: product.suppliers || "",
        stock: product.stock || "",
        price: product.price || "",
        category: product.category || "",
      });
    }
  }, [isOpen, product, reset]);

  const onSubmit = async (data) => {
    try {
      await dispatch(
        updateProduct({ productId: product._id, updatedData: data })
      );
      reset();
      onRequestClose();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={css.addNewProductContainer}>
        <button className={css.closeButton} onClick={onRequestClose}>
          <svg width="24" height="24">
            <use xlinkHref={`${sprite}#x`} />
          </svg>
        </button>
        <h2 className={css.header}>Edit product</h2>

        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <div className={css.formGroup}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  className={css.input}
                  id="name"
                  type="text"
                  placeholder="Product Info"
                  {...field}
                />
              )}
            />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </div>

          <div className={css.formGroup}>
            <Controller
              name="category"
              control={control}
              render={({ field }) => (
                <div className={css.selectContainer}>
                  <Select
                    {...field}
                    name="category"
                    options={options}
                    placeholder={"Category"}
                    classNamePrefix="react-select"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={getValue()}
                    onChange={(selectedOption) => {
                      setCurrentCategory(
                        selectedOption ? selectedOption.value : ""
                      );
                      field.onChange(
                        selectedOption ? selectedOption.value : ""
                      );
                    }}
                  />
                  <svg className={css.icon} width="16px" height="16px">
                    <use xlinkHref={`${sprite}#${isFocused ? "up" : "down"}`} />
                  </svg>
                </div>
              )}
            />
            {errors.category && (
              <p className={css.error}>{errors.category.message}</p>
            )}
          </div>

          <div className={css.formGroup}>
            <Controller
              name="suppliers"
              control={control}
              render={({ field }) => (
                <input
                  className={css.input}
                  id="suppliers"
                  type="text"
                  placeholder="Suppliers"
                  {...field}
                />
              )}
            />
            {errors.suppliers && (
              <p className={css.error}>{errors.suppliers.message}</p>
            )}
          </div>

          <div className={css.formGroup}>
            <Controller
              name="stock"
              control={control}
              render={({ field }) => (
                <input
                  className={css.input}
                  id="stock"
                  type="text"
                  placeholder="Stock"
                  {...field}
                />
              )}
            />
            {errors.stock && (
              <p className={css.error}>{errors.stock.message}</p>
            )}
          </div>

          <div className={css.formGroup}>
            <Controller
              name="price"
              control={control}
              render={({ field }) => (
                <input
                  className={css.input}
                  id="price"
                  type="text"
                  placeholder="Price"
                  {...field}
                />
              )}
            />
            {errors.price && (
              <p className={css.error}>{errors.price.message}</p>
            )}
          </div>

          <div className={css.buttons}>
            <button type="submit" className={css.addButtons}>
              Save
            </button>
            <button
              type="button"
              onClick={onRequestClose}
              className={css.cancelButtons}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
};

export default EditProductData;
