import React from "react";
import sprite from "../../assets/icons/sprite.svg";
import css from "./LogoutBtn.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/users/userOps";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button className={css.logout} onClick={handleLogout}>
      <svg width="13.82" height="13.82">
        <use xlinkHref={`${sprite}#logout`} />
      </svg>
    </button>
  );
};

export default LogoutBtn;
