import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../utils/helper";
const PublicRoutes = () => {
  return !useAuth() ? <Outlet /> : <Navigate to="/" />;
};

export default PublicRoutes;
