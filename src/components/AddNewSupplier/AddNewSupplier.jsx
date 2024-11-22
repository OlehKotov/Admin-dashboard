import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import css from "./AddNewSupplier.module.css";
import sprite from "../../assets/icons/sprite.svg";
import BaseModal from "../BaseModal/BaseModal";
import { addNewProduct } from "../../redux/store/storeOps";
import { addNewSuppliersValidationSchema } from "../../validation/addNewSuppliersValidationSchema";

const AddNewSupplier = ({ isOpen, onRequestClose }) => {

  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addNewSuppliersValidationSchema),
    defaultValues: {
      name: "",
      suppliers: "",
      stock: "",
      price: "",
      category: "",
    },
  });

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  const onSubmit = async (data) => {
    try {
      await dispatch(addNewProduct(data));
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
        <h2 className={css.header}>Add a new product</h2>

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
                  <select
                    {...field}
                    name="category"
                    className={css.select}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  >
                    <option value="" disabled hidden>
                      Category
                    </option>
                    <option value="Medicine">Medicine</option>
                    <option value="Heart">Heart</option>
                    <option value="Head">Head</option>
                    <option value="Hand">Hand</option>
                    <option value="Leg">Leg</option>
                    <option value="Dental Care">Dental Care</option>
                    <option value="Skin Care">Skin Care</option>
                  </select>
                  <svg className={css.icon} width="18px" height="18px">
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
              Add
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
  )
}

export default AddNewSupplier