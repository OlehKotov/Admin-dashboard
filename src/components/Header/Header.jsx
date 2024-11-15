import React from "react";
import css from "./Header.module.css";
import Logo from "../Logo/Logo";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import { selectUserEmail } from "../../redux/selectors";
import { useSelector } from "react-redux";
import Sidebar from "../Sidebar/Sidebar";
import sprite from "../../assets/icons/sprite.svg";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

const Header = () => {
  const email = useSelector(selectUserEmail);
  return (
    <header className={css.header}>
      <Logo />
      <div className={css.headerTitleContainer}>
        <Title />
        <div className={css.headerSubTitle}>
          <SubTitle>Dashboard</SubTitle>
          <div className={css.headerSubTitleSeparator}>
            <svg width="2" height="12">
              <use xlinkHref={`${sprite}#Vector`} />
            </svg>
          </div>
          <SubTitle>{email}</SubTitle>
        </div>
      </div>
      <div className={css.logoutBtn}>
        <LogoutBtn />
      </div>
    </header>
  );
};

export default Header;
