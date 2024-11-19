import React, { useState } from "react";
import css from "./UserNameFilter.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useDispatch } from "react-redux";
import { filterOrdersByName } from "../../redux/pharmacy/pharmacyOps";

const UserNameFilter = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handleFilterClick = () => {
    dispatch(filterOrdersByName(userName));
  };

  return (
    <div className={css.filterContainer}>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={handleInputChange}
        className={css.input}
      />
      <button onClick={handleFilterClick} className={css.filterButton}>
        <svg width="14" height="14">
          <use xlinkHref={`${sprite}#filter`} />
        </svg>
        Filter
      </button>
    </div>
  );
};

export default UserNameFilter;
