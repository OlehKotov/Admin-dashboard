import React from "react";
import { useSelector } from "react-redux";
import css from "./IncomeExpenses.module.css";
import { selectDashboard } from "../../redux/selectors";

const IncomeExpenses = () => {
  const dashboard = useSelector(selectDashboard);

  const getRowClassName = (type) => {
    switch (type) {
      case "Expense":
        return css.expense;
      case "Income":
        return css.income;
      case "Error":
        return css.error;
      default:
        return "";
    }
  };

  const getAmountClassName = (amount, type) => {
    if (type === "Error") {
      return css.errorAmount;
    }
    return amount.startsWith("+") ? css.incomeAmount : css.expenseAmount;
  };

  return (
    <div className={css.incomeExpenses}>
      <h2 className={css.header}>Income/Expenses</h2>
      <div className={css.tablecontainer}>
        <table className={css.table}>
          <thead className={css.tableThead}>
            <tr>
              <th colSpan={3}>Today</th>
            </tr>
          </thead>
          <tbody>
            {dashboard.incomeExpenses &&
              dashboard.incomeExpenses.map((income) => (
                <tr key={income._id}>
                  <td>
                    <div className={getRowClassName(income.type)}>
                      {income.type}
                    </div>
                  </td>
                  <td>{income.name}</td>
                  <td>
                    <div
                      className={getAmountClassName(income.amount, income.type)}
                    >
                      {income.amount}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeExpenses;
