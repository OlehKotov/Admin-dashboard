import React, { useEffect } from 'react'
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter'
import { useDispatch } from 'react-redux';
import css from "./AllProductsPage.module.css";
import { filterProductsByName, getProducts } from '../../redux/pharmacy/pharmacyOps';
import SharedLayout from '../../components/SharedLayout/SharedLayout';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import { setCurrentPage } from '../../redux/pharmacy/pharmacySlice';
import Products from '../../components/Products/Products';

const AllProductsPage = () => {
    const dispatch = useDispatch();
    const pageTitle = "All products";
  
    useEffect(() => {
        dispatch(setCurrentPage(1));
        dispatch(filterProductsByName(''));
        dispatch(getProducts());
    }, [dispatch]);

    const filterOrders = (name) => {
      dispatch(filterProductsByName(name));
    };

  return (
    <SharedLayout page={pageTitle}>
      <div className={css.container}>
        <DocumentTitle>All products</DocumentTitle>
        <main className={css.mainContainer}>
        <UserNameFilter filterAction={filterOrders}/>
        <Products />
        </main>
      </div>
    </SharedLayout>
  )
}

export default AllProductsPage