import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";
import Loading from "../../Shared/Loading/Loading";

const SellerRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoading) {
    return <Loading></Loading>;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
