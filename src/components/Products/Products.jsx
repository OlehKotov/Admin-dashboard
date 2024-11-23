import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectIsLoading,
  selectProducts,
  selectTotalPages,
} from "../../redux/selectors";
import css from "./Products.module.css";
import sprite from "../../assets/icons/sprite.svg";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import EditProductData from "../EditProductData/EditProductData";
import { deleteProduct } from "../../redux/store/storeOps";
import { setCurrentPage } from "../../redux/store/storeSlice";
import Loader from "../Loader/Loader";

const Products = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const products = useSelector(selectProducts);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const loading = useSelector(selectIsLoading);
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

  const onDeleteProduct = async (productId) => {
    try {
      await dispatch(deleteProduct(productId));
    } catch (error) {
      alert("Error: " + error);
    }
  };

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <>
      <div className={css.allProducts}>
        <button className={css.button} onClick={handleAddOpenModal}>
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
              {products.length === 0 ? (
                <tr>
                  <td colSpan="6" className={css.noData}>
                    No products available
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.stock}</td>
                    <td>{product.suppliers}</td>
                    <td>{product.price}</td>
                    <td className={css.buttonAction}>
                      <button onClick={() => handleEditOpenModal(product)}>
                        <svg width="32" height="32">
                          <use xlinkHref={`${sprite}#edit`} />
                        </svg>
                      </button>
                      <button onClick={() => onDeleteProduct(product._id)}>
                        <svg width="32" height="32">
                          <use xlinkHref={`${sprite}#del`} />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))
              )}
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
      <AddNewProduct
        isOpen={isAddModalOpen}
        onRequestClose={handleAddCloseModal}
      />
      <EditProductData
        isOpen={isEditModalOpen}
        onRequestClose={handleEditCloseModal}
        product={currentProduct}
      />
    </>
  );
};

export default Products;
