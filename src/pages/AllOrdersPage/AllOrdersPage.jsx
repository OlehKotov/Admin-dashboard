import React, { useEffect } from "react";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter";
import Orders from "../../components/Orders/Orders";
import { useDispatch, useSelector } from "react-redux";
import css from "./AllOrdersPage.module.css";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { filterOrdersByName } from "../../redux/store/storeOps";
import { setCurrentPage } from "../../redux/store/storeSlice";

const AllOrdersPage = () => {
  
  const dispatch = useDispatch();
  const pageTitle = "All orders";

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(filterOrdersByName(""));
  }, [dispatch]);

  const filterOrders = (name) => {
    dispatch(setCurrentPage(1));
    dispatch(filterOrdersByName(name));
  };

  return (
    <SharedLayout page={pageTitle}>
      <div className={css.container}>
        <DocumentTitle>All orders</DocumentTitle>
        <main className={css.mainContainer}>
          <UserNameFilter filterAction={filterOrders} />
          <Orders />
        </main>
      </div>
    </SharedLayout>
  );
};

export default AllOrdersPage;
