import { useQuery } from "react-query";
import { Outlet, Navigate } from "react-router-dom";
import { checkRole } from "../services/user";
import NavbarLog from "../components/Navbar";

export const AuthProtected = () => {
  const token = localStorage.getItem("token");
  console.log(token);
  return token ? (
    <>
      <NavbarLog />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export const AdminProtected = () => {
  const { data: admin } = useQuery("usersData", checkRole);
  return admin ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};
