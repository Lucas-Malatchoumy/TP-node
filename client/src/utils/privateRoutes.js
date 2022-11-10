import { useQuery } from "react-query";
import { Outlet, Navigate } from "react-router-dom";
import { checkRole } from "../services/user";

const token = localStorage.getItem("token");
export const AuthProtected = () => {
  console.log(localStorage);
  return token ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export const AdminProtected = () => {
  const { status, data } = useQuery("usersData", checkRole);
  if (status === "loading") {
    return <span>Loading...</span>;
  }
  return data ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};
