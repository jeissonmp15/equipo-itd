import React from "react";
import { useHistory } from "react-router";
//import Profile from "./components/login/Profile"
//import { useAuth0 } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

const Entrar = () => {
    const { user } = useAuth0();
    const history = useHistory();

    const typeuser = () => {
        if (user.email === "klingerdiaz@gmail.com") { return history.push("/administrador") }
        if (user.email === "dige16@gmail.com") { return history.push("/vendedor") }
        if (user.email === "diego.klinger.com") { return history.push("/cliente") }
    }

    return (
        <button
            className="form-boton-enter"
            onClick={() => typeuser()}>
            entrar
        </button >
    );
};

export default Entrar;

// {isAuthenticated ? <><Profile /> <LogoutButton /> <Entrar /> </> : <LoginButton />}




