import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
//Conectar accion mediante el connect al componente:
import { connect } from "react-redux";
import AppFrame from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomersActions from "../components/CustomersActions";
//Accion:
import { fetchCustomers } from "../actions/fetchCustomers";
//Importamos el selector:
import { getCustomers } from "../selectors/customers";

class CustomersContainer extends Component {
  //Lanzamos la accion desde el componente:
  componentDidMount() {
    if (this.props.customers.length === 0) {
      this.props.fetchCustomers();
    }
  }

  //Navegación con la funcion handleAddNew a un nuevo cliente, gracias ha withRouter de nuevo.
  handleAddNew = () => {
    this.props.history.push("/customers/new");
  };

  renderBody = (customers) => (
    // En esa función llamamos al CustomersList donde le pasamos la lista de clientes
    //como parametro y como segundo parametro le pasamos el urlPath.
    // Tambien le pasamos CustomerActions para crear los botones, y creamos el boton para generar un cliente nuevo
    //Crearemos una función handleAddNew que va a ser la encargada de estar escuchando el boton y de esa maner poder agregar un nuevo cliente
    <div>
      <CustomerList customers={customers} urlPath={"customers/"}></CustomerList>
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
        {/*Cambia el customer para cogerlo desde props */}
        <AppFrame
          header={"Listado de clientes"}
          body={this.renderBody(this.props.customers)}
        ></AppFrame>
      </div>
    );
  }
}

//customers ahora es requerida:
CustomersContainer.propTypes = {
  fetchCustomers: PropTypes.func.isRequired,
  customers: PropTypes.array.isRequired,
};

//Valores por defecto, de la lista de clientes:
CustomersContainer.defaultProps = {
  customers: [],
};

//Para vincular nuestro CustomersContainers con los datos que tiene el state crearemos nuestra función (mapStateToProps):
//Aplicamos el selector del estado:
const mapStateToProps = (state) => ({
  customers: getCustomers(state),
});

//Aqui teniamos una función llamada mapDispatchToProps() pero lo hemos simplificado
//gracias a redux-action:
//Le paso la accion al connect sobre el CustomersContainer para cotrolar el estado:
//Le pasamos los datos de los clientes al CustomersContainers con el mapStateToProps
export default withRouter(
  connect(mapStateToProps, { fetchCustomers })(CustomersContainer)
);
