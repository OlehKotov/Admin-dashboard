import React, { useEffect } from 'react'
import UserNameFilter from '../../components/UserNameFilter/UserNameFilter'
import AllOrders from '../../components/AllOrders/AllOrders'
import { useDispatch } from 'react-redux';
import css from "./AllOrdersPage.module.css";
import { getAllOrders } from '../../redux/pharmacy/pharmacyOps';
import SharedLayout from '../../components/SharedLayout/SharedLayout';
import DocumentTitle from '../../components/DocumentTitle/DocumentTitle';

const AllOrdersPage = () => {
    const dispatch = useDispatch();
    const pageTitle = "All orders";
  
    useEffect(() => {
      dispatch(getAllOrders());
    }, [dispatch]);

  return (
    <SharedLayout page={pageTitle}>
      <div className={css.container}>
        <DocumentTitle>All orders</DocumentTitle>
        <main className={css.mainContainer}>
        <UserNameFilter />
        <AllOrders />
        </main>
      </div>
    </SharedLayout>
  )
}

export default AllOrdersPage