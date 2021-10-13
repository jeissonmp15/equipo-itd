
import LoginButton from "./components/login/LoginButton";
import Profile from "./components/login/Profile"
import { useAuth0 } from "@auth0/auth0-react"
import LogoutButton from "./components/login/logoutButton";
import Entrar from "./components/login/entrarButton";

function Login() {
    const { isAuthenticated} = useAuth0();
    

    return (


        <body className="body">
            <div className="form-box">
                <h1 className="form-title">Bienvenido</h1>
                <h2>
                    {isAuthenticated ? <><Profile /> <LogoutButton /> <Entrar /> </> : <LoginButton />}
                </h2>

            </div>
        </body>
    );
}

export default Login;


//history.push("/Administrador") 
//