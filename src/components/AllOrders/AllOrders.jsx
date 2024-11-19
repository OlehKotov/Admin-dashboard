import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllOrders } from '../../redux/selectors';
import css from "./AllOrders.module.css";

const AllOrders = () => {
    const orders = useSelector(selectAllOrders);  

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
                  <td>{order.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllOrders