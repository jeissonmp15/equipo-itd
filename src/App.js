import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./loginP/login";
import Administrador from "./administrador/administrador";
import Vendedor from "./vendedor/vendedor";
import Usuarios from "./administrador/usuarios";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/administrador" component={Administrador} />
        <Route exact path="/vendedor" component={Vendedor} />
        <Route exact path="/usuarios" component={Usuarios} />
        <Route exact path="/vendedor" component={Vendedor} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
