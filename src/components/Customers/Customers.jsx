import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectCustomers,
  selectIsLoading,
  selectTotalPages,
} from "../../redux/selectors";
import css from "./Customers.module.css";
import { setCurrentPage } from "../../redux/store/storeSlice";
import Loader from "../Loader/Loader";

const Customers = () => {
  const customers = useSelector(selectCustomers);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className={css.allOrders}>
      <h2 className={css.header}>All customers</h2>
      <div className={css.tablecontainer}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>User Info</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Register date</th>
            </tr>
          </thead>
          <tbody>
            {customers.length === 0 ? (
              <tr>
                <td colSpan="5" className={css.noData}>
                  No customers available
                </td>
              </tr>
            ) : (
              customers &&
              customers.map((customer) => (
                <tr key={customer._id}>
                  <td className={css.tableName}>
                    <img
                      src={customer.image}
                      alt={customer.name}
                      className="avatar"
                    />
                    {customer.name}
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.register_date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className={css.pagination}>
        {Array.from({ length: totalPages }, (_, i) => (
          <span
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`${css.pageDot} ${
              currentPage === i + 1 ? css.activeDot : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Customers;
