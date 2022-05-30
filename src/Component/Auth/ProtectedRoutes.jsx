import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../utils/helper";

const ProtectedRoutes = () => {
  return useAuth() ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
