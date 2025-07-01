import { useContext } from "react";
import { IsLoginContext } from "../context/IsLoginContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export default function PrivateRoute() {
  const navigation = useNavigate();
  const isLogin = useContext(IsLoginContext);
  return (
    <>
      <p>private</p>
      {isLogin ? <Outlet /> : <Navigate to='/auth' />}
    </>
  );
}
