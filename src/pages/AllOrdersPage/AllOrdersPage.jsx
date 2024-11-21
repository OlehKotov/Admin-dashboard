import React, { useEffect } from 'react'
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter'
import Orders from '../../components/Orders/Orders'
import { useDispatch } from 'react-redux';
import css from "./AllOrdersPage.module.css";
import { filterOrdersByName, getOrders } from '../../redux/pharmacy/pharmacyOps';
import SharedLayout from '../../components/SharedLayout/SharedLayout';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';
import { setCurrentPage } from '../../redux/pharmacy/pharmacySlice';

const AllOrdersPage = () => {
    const dispatch = useDispatch();
    const pageTitle = "All orders";

    useEffect(() => {
      dispatch(setCurrentPage(1));
      dispatch(filterOrdersByName(''));
      dispatch(getOrders());
  }, [dispatch]);

    const filterOrders = (name) => {
      dispatch(filterOrdersByName(name));
    };

  return (
    <SharedLayout page={pageTitle}>
      <div className={css.container}>
        <DocumentTitle>All orders</DocumentTitle>
        <main className={css.mainContainer}>
        <UserNameFilter filterAction={filterOrders}/>
        <Orders />
        </main>
      </div>
    </SharedLayout>
  )
}

export default AllOrdersPage