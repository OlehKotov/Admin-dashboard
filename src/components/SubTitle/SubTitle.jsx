import React from 'react'
import css from "./SubTitle.module.css";

const SubTitle = ({children}) => {
  return (
    <div className={css.subTitle}>{children}</div>
  )
}

export default SubTitle