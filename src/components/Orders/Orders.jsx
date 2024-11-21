import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectOrders,
  selectTotalPages,
} from "../../redux/selectors";
import css from "./Orders.module.css";
import { setCurrentPage } from "../../redux/pharmacy/pharmacySlice";

const Orders = () => {
  const orders = useSelector(selectOrders);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getRowClassName = (status) => {
    switch (status) {
      case "Completed":
        return css.completed;
      case "Confirmed":
        return css.confirmed;
      case "Pending":
        return css.pending;
      case "Cancelled":
        return css.cancelled;
      case "Processing":
        return css.processing;
      default:
        return "";
    }
  };

  return (
    <div className={css.allOrders}>
      <h2 className={css.header}>All orders</h2>
      <div className={css.tablecontainer}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>User Info</th>
              <th>Address</th>
              <th>Products</th>
              <th>Order date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order._id}>
                  <td className={css.tableName}>
                    <img
                      src={order.photo}
                      alt={order.name}
                      className="avatar"
                    />
                    {order.name}
                  </td>
                  <td>{order.address}</td>
                  <td>{order.products}</td>
                  <td>{order.order_date}</td>
                  <td>{order.price}</td>
                  <td>
                    <div
                      className={`${getRowClassName(order.status)} ${
                        css.additionalClass
                      }`}
                    >
                      {order.status}
                    </div>
                  </td>
                </tr>
              ))}
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

export default Orders;
