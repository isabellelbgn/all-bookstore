import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  let { customer } = useContext(AuthContext);
  return !customer ? <Navigate to="/customer/login" /> : children;
};

export default PrivateRoute;
