import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../../contexts/AuthProvider/AuthProvider";
import useBuyer from "../../hooks/useBuyer";
import Loading from "../../Shared/Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const [isBuyer, setIsBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();
  if (loading || setIsBuyerLoading) {
    return <Loading></Loading>;
  }
  if (user && isBuyer) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
