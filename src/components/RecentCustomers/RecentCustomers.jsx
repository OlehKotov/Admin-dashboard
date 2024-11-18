import React from "react";
import css from "./RecentCustomers.module.css";
import { useSelector } from "react-redux";
import { selectDashboard } from "../../redux/selectors";

const RecentCustomers = () => {
  const dashboard = useSelector(selectDashboard);

  return (
    <div className={css.recentCustomers}>
      <h2 className={css.header}>Recent Customers</h2>
      <div className={css.tablecontainer}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Spent</th>
            </tr>
          </thead>
          <tbody>
            {dashboard.latestCustomers &&
              dashboard.latestCustomers.map((customer) => (
                <tr key={customer._id}>
                  <td className={css.tableName}>
                    <img
                      src={`https://ui-avatars.com/api/?name=${customer.name}&background=random`}
                      alt={customer.name}
                      className="avatar"
                    />
                    {customer.name}
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.spent}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCustomers;
