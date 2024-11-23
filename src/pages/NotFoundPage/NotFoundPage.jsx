import React from "react";
import css from "./NotFoundPage.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";
import SharedLayout from "../../components/SharedLayout/SharedLayout";

const NotFoundPage = () => {
  return (
    <SharedLayout>
      <div className={css.container}>
        <DocumentTitle>Page not found</DocumentTitle>
        <div className={css.container}>
          <h1 className={css.header}>Page not found</h1>
        </div>
      </div>
    </SharedLayout>
  );
};

export default NotFoundPage;
