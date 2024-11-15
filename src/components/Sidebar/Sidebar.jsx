import React, { useEffect, useRef, useState } from "react";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import css from "./Sidebar.module.css";
import sprite from "../../assets/icons/sprite.svg";
import LogoutBtn from "../LogoutBtn/LogoutBtn";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest(`.${css.burgerButton}`)
    ) {
      closeMenu();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1440);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);


  return (
    <div className={css.container}>
      {isDesktop ? (
        <SidebarMenu />
      ) : (
        <button className={css.burgerButton} onClick={toggleMenu}>
          <svg width="32" height="32">
            <use xlinkHref={`${sprite}#menu-burger`} />
          </svg>
        </button>
      )}
      {!isDesktop && (
        <>
          <div
            className={`${css.overlay} ${isMenuOpen ? css.overlayVisible : ""}`}
            onClick={closeMenu}
          />
          <div
            className={`${css.menu} ${isMenuOpen ? css.menuOpen : ""}`}
            ref={menuRef}
          >
            <button className={css.closeButton} onClick={toggleMenu}>
              <svg width="32" height="32">
                <use xlinkHref={`${sprite}#x`} />
              </svg>
            </button>
            <div className={css.menuContainer}>
              <div className={css.menuContent}>
                <SidebarMenu />
              </div>
              <LogoutBtn />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
