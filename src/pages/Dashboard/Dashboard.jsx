import React from "react";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import css from "./Dashboard.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const Dashboard = () => {
  return (
    <div className={css.container}>
      <DocumentTitle>Dashboard</DocumentTitle>
      <SharedLayout />
    </div>
  );
};

export default Dashboard;
