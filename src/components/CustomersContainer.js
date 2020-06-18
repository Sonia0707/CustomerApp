import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import AppFrame from "./../components/AppFrame";
import CustomerList from "./../components/CustomerList";
import CustomersActions from "./CustomersActions";

//Clientes de prueba, luego cambiaremos y haremos la petición al servidor, por lo tanto no necesitaremos esta constante:
const customers = [
  {
    dni: "71462879q",
    name: "Sonia Vidal",
    age: 28,
  },
  {
    dni: "78953647w",
    name: "Jose Perez",
    age: 37,
  },
  {
    dni: "09876543e",
    name: "Luis Martinez",
    age: 25,
  },
];

class CustomersContainer extends Component {
  renderBody = (customers) => (
    // En esa función llamamos al CustomersList donde le pasamos la lista de clientes
    //como parametro y como segundo parametro le pasamos el urlPath.
    // Tambien le pasamos CustomerActions para crear los botones, y creamos el boton para generar un cliente nuevo
    //Crearemos una función handleAddNew que va a ser la encargada de estar escuchando el boton y de esa maner poder agregar un nuevo cliente
    <div>
      <CustomerList customers={customers} urlPath={"customer/"}></CustomerList>
      <CustomersActions>
        <button onClick={this.handleAddNew}>Nuevo Cliente</button>
      </CustomersActions>
    </div>
  );
  render() {
    //AppFrame para la visualización, ponemos un titulo header,
    // y en el body le pasamos una funcion con una lista de clientes
    //de momento para ver el resultado.
    return (
      <div>
        <AppFrame
          header={"Listado de clientes"}
          body={this.renderBody(customers)}
        ></AppFrame>
      </div>
    );
  }
}

CustomersContainer.propTypes = {};

//Función withRouter recibe como parametro nuestro componente y retorna otro componente decorado, es decir que le agrega funcionalidad
//Agregandole las propiedades de => history, location, math
//Por lo tanto una forma de que funcione siempre independientemente de como llamemos al componente es utilizando esta función:
export default withRouter(CustomersContainer);
