import React from "react";
import css from "./LoginPage.module.css";
import logo from "./../../assets/images/Mask_group.png";
import LoginForm from "./../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <img src={logo} alt="Logo" className={css.headerImg} />
        <p className={css.headerText}>E-Pharmacy</p>
      </div>

      <div className={css.textBlockWrap}>
        <div className={css.textBlock}>
          <h1 className={css.textBlockHeader}>
            Your medication, delivered Say goodbye to all{" "}
            <span>your healthcare</span> worries with us
          </h1>
          <div className={css.textBlockImg}></div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
