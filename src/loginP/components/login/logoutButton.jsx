import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return <button className="form-boton-exit" onClick={() => logout()}>Salir</button>;
};

export default LogoutButton;