import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "../components/RestrictedRoute/RestrictedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "../pages/Dashboard/Dashboard";
import AllOrdersPage from "../pages/AllOrdersPage/AllOrdersPage";
import CustomersDataPage from "../pages/CustomersDataPage/CustomersDataPage";
import AllProductsPage from "../pages/AllProductsPage/AllProductsPage";


function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <AllOrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <AllProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <CustomersDataPage />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer autoClose={500} />
    </div>
  );
}

export default App;
