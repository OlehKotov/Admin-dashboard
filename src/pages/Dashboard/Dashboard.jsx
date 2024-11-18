import React, { useEffect } from "react";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import css from "./Dashboard.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import Statistics from "../../components/Statistics/Statistics";
import RecentCustomers from "../../components/RecentCustomers/RecentCustomers";
import { useDispatch } from "react-redux";
import { getDashboard } from "../../redux/pharmacy/pharmacyOps";
import IncomeExpenses from "../../components/IncomeExpenses/IncomeExpenses";

const Dashboard = () => {
  const dispatch = useDispatch();
  const pageTitle = "Dashboard";

  useEffect(() => {
    dispatch(getDashboard());
  }, [dispatch]);

  return (
    <SharedLayout page={pageTitle}>
      <div className={css.container}>
        <DocumentTitle>Dashboard</DocumentTitle>
        <Statistics />
        <main className={css.mainContainer}>
          <RecentCustomers />
          <IncomeExpenses />
        </main>
      </div>
    </SharedLayout>
  );
};

export default Dashboard;
