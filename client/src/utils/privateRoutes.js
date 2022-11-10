import { useQuery } from "react-query";
import { Outlet, Navigate } from "react-router-dom";
import { checkRole } from "../services/user";

export const AuthProtected = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export const AdminProtected = () => {
  const { status, data, error } = useQuery("usersData", checkRole);
  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message}</span>;
  }
  return data.role === "admin" ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};
