import React, { useState } from "react";
import css from "./AddNewProduct.module.css";
import BaseModal from "../BaseModal/BaseModal";
import sprite from "../../assets/icons/sprite.svg";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { editUser } from "../../redux/users/userOps";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUserValidationschema } from "../../validation/editUserValidationShema";
import { uploadImageToCloudinary } from "../../utils/saveFileToCloudinary";
import { addNewProductValidationSchema } from "../../validation/addNewProductValidationSchema";

const AddNewProduct = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(addNewProductValidationSchema),
    defaultValues: {
      name: name || "",
      email: email || "",
      phone: phone || "",
      avatar: avatar || "",
    },
  });



  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={css.addNewProductContainer}>

        <button className={css.closeButton} onClick={onRequestClose}>
          <svg width="24" height="24">
            <use xlinkHref={`${sprite}#x`} />
          </svg>
        </button>

        <h2 className={css.header}>Add a new product</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className={css.formContainer}>

          <div className={css.formGroup}>
              <input
                className={`${css.input} ${name ? css.filled : css.empty}`}
                type="text"
                {...register("name")}
                placeholder={"Product_Info"}
              />
              {errors.name && (
                <p className={css.error}>{errors.name.message}</p>
              )}
          </div>
            

            <div className={css.formGroup}>
              <input
                className={`${css.input} ${name ? css.filled : css.empty}`}
                type="text"
                {...register("suppliers")}
                placeholder={"Suppliers"}
              />
              {errors.name && (
                <p className={css.error}>{errors.name.message}</p>
              )}
            </div>

            <div className={css.formGroup}>
              <input
                className={`${css.input} ${name ? css.filled : css.empty}`}
                type="number"
                {...register("stock")}
                placeholder={"Stock"}
              />
              {errors.name && (
                <p className={css.error}>{errors.name.message}</p>
              )}
            </div>

            <div className={css.formGroup}>
              <input
                className={`${css.input} ${name ? css.filled : css.empty}`}
                type="number"
                {...register("price")}
                placeholder={"Price"}
              />
              {errors.name && (
                <p className={css.error}>{errors.name.message}</p>
              )}
            </div>

           



          </div>

          <div className={css.buttonGroup}>
          <button
            // onClick={handleConfirm}
            className={css.confirmButton}
            // disabled={isLoading}
          >
            Add
          </button>
          <button
            // onClick={handleCancel}
            className={css.cancelButton}
            // disabled={isLoading}
          >
            Cancel
          </button>
        </div>
        </form>
      </div>
    </BaseModal>
  );
};

export default AddNewProduct;