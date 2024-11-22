import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectProducts,
  selectSuppliers,
  selectTotalPages,
} from "../../redux/selectors";
import css from "./Suppliers.module.css";
import sprite from "../../assets/icons/sprite.svg";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import EditProductData from "../EditProductData/EditProductData";
import { deleteProduct } from "../../redux/store/storeOps";
import { setCurrentPage } from "../../redux/store/storeSlice";
import AddNewSupplier from "../AddNewSupplier/AddNewSupplier";

const Suppliers = () => {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const suppliers = useSelector(selectSuppliers);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleAddOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleAddCloseModal = () => {
    setIsAddModalOpen(false);
  };

  const handleEditOpenModal = (product) => {
    setCurrentProduct(product);
    setIsEditModalOpen(true);
  };

  const handleEditCloseModal = () => {
    setIsEditModalOpen(false);
    setCurrentProduct(null);
  };

  const getRowClassName = (status) => {
    switch (status) {
      case "Active":
        return css.active;
      case "Deactive":
        return css.deactive;
      default:
        return "";
    }
  };

  return (
     <>
      <div className={css.allSuppliers}>
        <button className={css.button} onClick={handleAddOpenModal}>
          Add a new suppliers
        </button>
        <h2 className={css.header}>All suppliers</h2>
        <div className={css.tablecontainer}>
          <table className={css.table}>
            <thead>
              <tr>
                <th>Suppliers Info</th>
                <th>Address</th>
                <th>Company</th>
                <th>Delivery date</th>
                <th>Ammount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {suppliers &&
                suppliers.map((supplier) => (
                  <tr key={supplier._id}>
                    <td>{supplier.name}</td>
                    <td>{supplier.address}</td>
                    <td>{supplier.suppliers}</td>
                    <td>{supplier.date}</td>
                    <td>{supplier.amount}</td>
                    <td><div
                      className={`${getRowClassName(supplier.status)} ${
                        css.additionalClass
                      }`}
                    >
                      {supplier.status}
                    </div></td>
                    <td>
                      <button onClick={() => handleEditOpenModal(supplier)} className={css.buttonAction}>
                        <svg width="14" height="14">
                          <use xlinkHref={`${sprite}#edit-2`} />
                        </svg>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        <div className={css.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`${css.pageDot} ${
                currentPage === i + 1 ? css.activeDot : ""
              }`}
            />
          ))}
        </div>
      </div>
      <AddNewSupplier
        isOpen={isAddModalOpen}
        onRequestClose={handleAddCloseModal}
      />
      <EditProductData
        isOpen={isEditModalOpen}
        onRequestClose={handleEditCloseModal}
        product={currentProduct}
      />
    </>
  )
}

export default Suppliers