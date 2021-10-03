import { useAuth0 } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginButton = () => {
  
  
  const { loginWithRedirect } = useAuth0();

  return <button className="form-boton" onClick={() => loginWithRedirect()}>Ingresar</button>;
};

export default LoginButton;
