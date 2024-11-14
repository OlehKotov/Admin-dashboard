import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "../components/RestrictedRoute/RestrictedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          path="/profile"
          element={
            <PrivateRoute>
              
            </PrivateRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
