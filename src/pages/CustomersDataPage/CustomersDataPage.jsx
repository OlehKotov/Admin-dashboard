import React, { useEffect } from "react";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter";
import { useDispatch } from "react-redux";
import css from "./CustomersDataPage.module.css";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Customers from "../../components/Customers/Customers";
import { filterCustomersByName } from "../../redux/store/storeOps";
import { setCurrentPage } from "../../redux/store/storeSlice";

const CustomersDataPage = () => {
  const dispatch = useDispatch();
  const pageTitle = "All customers";

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(filterCustomersByName(""));
  }, [dispatch]);

  const filterOrders = (name) => {
    dispatch(setCurrentPage(1));
    dispatch(filterCustomersByName(name));
  };

  return (
    <SharedLayout page={pageTitle}>
      <div className={css.container}>
        <DocumentTitle>All customers</DocumentTitle>
        <main className={css.mainContainer}>
          <UserNameFilter filterAction={filterOrders} />
          <Customers />
        </main>
      </div>
    </SharedLayout>
  );
};

export default CustomersDataPage;
