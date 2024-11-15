import React from 'react'
import css from "./SharedLayout.module.css";
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const SharedLayout = () => {
  return (
    <div className={css.sharedLayoutContainer}>
        <Header />
        <Sidebar />
    </div>
  )
}

export default SharedLayout