import React from "react";
import LogoutButton from "../loginP/components/login/logoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";



const data = [
    { id: 1, producto: "Pizza", Precio: "5000" },
    { id: 2, producto: "Hamburgesa", Precio: "12000" },
    { id: 3, producto: "Perro", Precio: "10000" },
    { id: 4, producto: "Salchi", Precio: "20000" },
    { id: 5, producto: "Tamla", Precio: "4000" },

];

class Administrador extends React.Component {


    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            producto: "",
            Precio: "",
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
            if (dato.id == registro.id) {
                arreglo[contador].producto = dato.producto;
                arreglo[contador].Precio = dato.Precio;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + dato.id);
        if (opcion == true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id == registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
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
                                <li><a href="http://localhost:3000/Administrador">Productos</a></li>
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
                                <th>ID</th>
                                <th>producto</th>
                                <th>Precio</th>
                                <th>Acción</th>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.producto}</td>
                                    <td>{dato.Precio}</td>
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
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.form.id}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                producto:
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
                                Precio:
                            </label>
                            <input
                                className="form-control"
                                name="anime"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.Precio}
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
                        <div><h3>Insertar producto</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.data.length + 1}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                producto:
                            </label>
                            <input
                                className="form-control"
                                name="producto"
                                type="text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Precio:
                            </label>
                            <input
                                className="form-control"
                                name="Precio"
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
export default Administrador;