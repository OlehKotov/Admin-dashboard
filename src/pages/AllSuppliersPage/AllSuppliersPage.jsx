import React, { useEffect } from "react";
import UserNameFilter from "../../components/UserNameFilter/UserNameFilter";
import { useDispatch } from "react-redux";
import css from "./AllSuppliersPage.module.css";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import { filterSuppliersByName } from "../../redux/store/storeOps";
import { setCurrentPage } from "../../redux/store/storeSlice";
import Suppliers from "../../components/Suppliers/Suppliers";

const AllSuppliersPage = () => {
  const dispatch = useDispatch();
  const pageTitle = "All suppliers";

  useEffect(() => {
    dispatch(setCurrentPage(1));
    dispatch(filterSuppliersByName(""));
  }, [dispatch]);

  const filterSuppliers= (name) => {
    dispatch(setCurrentPage(1));
    dispatch(filterSuppliersByName(name));
  };
  return (
    <SharedLayout page={pageTitle}>
      <div className={css.container}>
        <DocumentTitle>All suppliers</DocumentTitle>
        <main className={css.mainContainer}>
          <UserNameFilter filterAction={filterSuppliers} />
          <Suppliers />
        </main>
      </div>
    </SharedLayout>
  );
};

export default AllSuppliersPage;
