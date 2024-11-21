import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectProducts,
  selectTotalPages,
} from "../../redux/selectors";
import css from "./Products.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { setCurrentPage } from "../../redux/pharmacy/pharmacySlice";
import AddNewProduct from "../AddNewProduct/AddNewProduct";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = useSelector(selectProducts);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className={css.allProducts}>
      <button className={css.button} onClick={handleOpenModal}>
        <svg width="16" height="16" className={css.buttonAdd}>
          <use xlinkHref={`${sprite}#add`} />
        </svg>
        Add a new product
      </button>
      <h2 className={css.header}>All products</h2>
      <div className={css.tablecontainer}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Product Info</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Suppliers</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.stock}</td>
                  <td>{product.suppliers}</td>
                  <td>{product.price}</td>
                  <td>
                    <div></div>
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
    <AddNewProduct isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </>
    
  );
};

export default Products;
