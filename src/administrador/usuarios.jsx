import React from "react";
import LogoutButton from "../loginP/components/login/logoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";


const data = [
    { rol: "Administrador", Nombre: "Diego Klinger ", Correo: "klingerdiaz@gmail.com" },
    { rol: "Vendedor", Nombre: "Dallana Klinger ", Correo: "dige16@gmaill.com" },
   
];

class Usuarios extends React.Component {


    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            rol: "",
            producto: "",
            Correo: "",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.rol == registro.rol) {
                arreglo[contador].Nombre = dato.Nombre;
                arreglo[contador].Correo = dato.Correo;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar a este usuario (" + dato.rol+")");
        if (opcion == true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.rol == registro.rol) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.rol = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {

        return (
            <>

                <header>
                    <div class="contenedor">
                        <nav class="menu">
                            <ul>
                                <li><a href="http://localhost:3000/Administrador">Producto</a></li>
                                <li><a href="http://localhost:3000/usuarios">Usuarios</a></li>
                                
                            </ul>
                        </nav>
                    </div>
                </header>
                <h1 align="center">Adminstrador</h1>
                <Container>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>Rol</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.rol}>
                                    <td>{dato.rol}</td>
                                    <td>{dato.Nombre}</td>
                                    <td>{dato.Correo}</td>
                                    <td>
                                        <Button
                                            color="primary"
                                            onClick={() => this.mostrarModalActualizar(dato)}
                                        >
                                            Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <LogoutButton color="warning" />

                </Container>

                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Registro</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                rol:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.form.rol}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Nombre:
                            </label>
                            <input
                                className="form-control"
                                name="producto"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.producto}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Correo:
                            </label>
                            <input
                                className="form-control"
                                name="anime"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.Correo}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.editar(this.state.form)}
                        >
                            Editar
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => this.cerrarModalActualizar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>



                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar usuario</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                rol:
                            </label>

                            <input
                                className="form-control"
                                name="rol"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Nombre:
                            </label>
                            <input
                                className="form-control"
                                name="Nombre"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Correo:
                            </label>
                            <input
                                className="form-control"
                                name="Correo"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            onClick={() => this.insertar()}
                        >
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
export default Usuarios;