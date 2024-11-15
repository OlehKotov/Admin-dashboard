import React from "react";
import { NavLink } from "react-router-dom";
import sprite from "../../assets/icons/sprite.svg";
import css from "./SidebarMenu.module.css";

const SidebarMenu = () => (
    <div className={css.navContainer}>
    <NavLink to="/dashboard" className={({ isActive }) => isActive ? `${css.menuItem} ${css.active}` : css.menuItem}>
      <svg width="13.82" height="13.82" >
          <use xlinkHref={`${sprite}#ic_round-dashboard`} />
        </svg>
      </NavLink>
      <NavLink to="/orders" className={({ isActive }) => isActive ? `${css.menuItem} ${css.active}` : css.menuItem}>
      <svg width="13.82" height="13.82">
          <use xlinkHref={`${sprite}#ic_round-shopping-cart`} />
        </svg>
      </NavLink>
      <NavLink to="/products" className={({ isActive }) => isActive ? `${css.menuItem} ${css.active}` : css.menuItem}>
      <svg width="13.82" height="13.82">
          <use xlinkHref={`${sprite}#mingcute_flask-fill`}/>
        </svg>
      </NavLink>
      <NavLink to="/customers" className={({ isActive }) => isActive ? `${css.menuItem} ${css.active}` : css.menuItem}>
      <svg width="13.82" height="13.82">
          <use xlinkHref={`${sprite}#mdi_local-pharmacy`} />
        </svg>
      </NavLink>
      <NavLink to="/suppliers" className={({ isActive }) => isActive ? `${css.menuItem} ${css.active}` : css.menuItem}>
      <svg width="13.82" height="13.82">
          <use xlinkHref={`${sprite}#mdi_users`} />
        </svg>
      </NavLink>
    </div>
  );


export default SidebarMenu;
