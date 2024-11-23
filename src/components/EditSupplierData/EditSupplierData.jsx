import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import css from "./EditSupplierData.module.css";
import sprite from "../../assets/icons/sprite.svg";
import BaseModal from "../BaseModal/BaseModal";
import { updateSupplier } from "../../redux/store/storeOps";
import { editSupplierValidationSchema } from "../../validation/editSupplierValidationSchema";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const EditSupplierData = ({ isOpen, onRequestClose, supplier }) => {
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editSupplierValidationSchema),
    defaultValues: {
      name: "",
      address: "",
      suppliers: "",
      date: null,
      amount: "",
      status: "",
    },
  });

  useEffect(() => {
    if (isOpen && supplier) {
      reset({
        name: supplier.name || "",
        address: supplier.address || "",
        suppliers: supplier.suppliers || "",
        date: supplier.date || "",
        amount: supplier.amount || "",
        status: supplier.status || "",
      });
    }
  }, [isOpen, supplier, reset]);

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      date: data.date ? format(new Date(data.date), "MMMM d, yyyy") : null,
    };
    try {
      await dispatch(
        updateSupplier({ supplierId: supplier._id, updatedData: formattedData })
      );
      reset();
      onRequestClose();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className={css.addNewSuppliersContainer}>
        <button className={css.closeButton} onClick={onRequestClose}>
          <svg width="24" height="24">
            <use xlinkHref={`${sprite}#x`} />
          </svg>
        </button>
        <h2 className={css.header}>Edit data</h2>

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
                  placeholder="Suppliers Info"
                  {...field}
                />
              )}
            />
            {errors.name && <p className={css.error}>{errors.name.message}</p>}
          </div>

          <div className={css.formGroup}>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <input
                  className={css.input}
                  id="address"
                  type="text"
                  placeholder="Address"
                  {...field}
                />
              )}
            />
            {errors.address && (
              <p className={css.error}>{errors.address.message}</p>
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
                  placeholder="Company"
                  {...field}
                />
              )}
            />
            {errors.suppliers && (
              <p className={css.error}>{errors.suppliers.message}</p>
            )}
          </div>

          <div
            className={css.dateInputContainer}
            onClick={() => document.getElementById("date-input").focus()}
          >
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <DatePicker
                  id="date-input"
                  className={css.dateInput}
                  placeholderText="Delivery date"
                  selected={field.value}
                  onChange={field.onChange}
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                />
              )}
            />
            <svg className={css.dateIcon} width="16px" height="16px">
              <use xlinkHref={`${sprite}#calendar`} />
            </svg>

            {errors.date && (
              <div className={css.error}>{errors.date.message}</div>
            )}
          </div>

          <div className={css.formGroup}>
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <input
                  className={css.input}
                  id="amount"
                  type="text"
                  placeholder="Amount"
                  {...field}
                />
              )}
            />
            {errors.amount && (
              <p className={css.error}>{errors.amount.message}</p>
            )}
          </div>

          <div className={css.formGroup}>
            <Controller
              name="status"
              id="status"
              control={control}
              render={({ field }) => (
                <div className={css.selectContainer}>
                  <select
                    {...field}
                    name="status"
                    className={css.select}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                  >
                    <option value="" disabled hidden>
                      Status
                    </option>
                    <option value="Active">Active</option>
                    <option value="Deactive">Deactive</option>
                  </select>
                  <svg className={css.icon} width="16px" height="16px">
                    <use xlinkHref={`${sprite}#${isFocused ? "up" : "down"}`} />
                  </svg>
                </div>
              )}
            />
            {errors.status && (
              <p className={css.error}>{errors.status.message}</p>
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
  );
};

export default EditSupplierData;
