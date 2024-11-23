import React from "react";
import css from "./Statistics.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { selectDashboard } from "../../redux/selectors";
import { useSelector } from "react-redux";

const Statistics = () => {
  const dashboard = useSelector(selectDashboard);

  return (
    <div className={css.statisticsContainer}>
      <div className={css.statisticsBlocks}>
        <div className={css.statisticsBlock}>
          <div className={css.statisticsBlockName}>
            <svg width="18" height="18">
              <use xlinkHref={`${sprite}#streamline_money-cash-coins`} />
            </svg>
            All products
          </div>
          <div className={css.statisticsBlockValue}>
            {dashboard.totalProducts}
          </div>
        </div>

        <div className={css.statisticsBlock}>
          <div className={css.statisticsBlockName}>
            <svg width="18" height="18">
              <use xlinkHref={`${sprite}#streamline_money-cash-coins`} />
            </svg>
            All suppliers
          </div>
          <div className={css.statisticsBlockValue}>
            {dashboard.totalSuppliers}
          </div>
        </div>

        <div className={css.statisticsBlock}>
          <div className={css.statisticsBlockName}>
            <svg width="18" height="18">
              <use xlinkHref={`${sprite}#ci_users`} />
            </svg>
            All Customers
          </div>
          <div className={css.statisticsBlockValue}>
            {dashboard.totalCustomers}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
