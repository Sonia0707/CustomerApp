import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";

import { withRouter, Route } from "react-router-dom";
import { getCustomersByDni } from "../selectors/customers";
import { fetchCustomers } from "./../actions/fetchCustomers";

class CustomerContainer extends Component {
  //Carga inicial de los datos: Validación para que no me aparezcan vacios los campos:
  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  //Creamos la función para pasarsela a CustomerEdit y poder modificar los datos:
  handleSubmit = (values) => {
    console.log(JSON.stringify(values));
  };
  handleOnBack = () => {
    this.props.history.goBack();
  };

  //Ejemplo de Route cambiamos el pinchar en Edition
  //Utilizamos propiedad children que se puede usar de maneras diferentes, su especialidad es mas en las animaciones:
  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match }) => {
        //Depende cual cliquemos: (CustomerControl)= Alias...
        const CustomerControl = match ? CustomerEdit : CustomerData;

        //Cogemos todas las propiedades de los clientes haciendo un destrugturing (Spread Attributes) el como poner age={edad}, dni={dni}, name={name}
        //Retormanamos un componente determinado que nos devuelve data o edit para no andar repitiendo las propiedades de nuevo (DRY)
        return (
          //Añadimos la función y depende si es data o edit:
          <CustomerControl
            {...this.props.customer}
            onSubmit={this.handleSubmit}
            onBack={this.handleOnBack}
          />
        );
      }}
    />
  );
  //<p>Datos del cliente "{this.props.customer.name}"</p>
  render() {
    return (
      <div>
        {/*Le pasamos el DNI desde App.js */}
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={this.renderBody()}
        ></AppFrame>
      </div>
    );
  }
}

//Ponemos como requerido el dni:
CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object,
  fetchCustomers: PropTypes.func.isRequired,
};
//Creamos la funcion para pasarle todas las props de los cliente no solo el dni:(props) => todas las propiedades(pronto cambiaremos la forma X un selector)
const mapStateToProps = (state, props) => ({
  customer: getCustomersByDni(state, props),
});

//Mas adelante cambiaremos lo de null:
export default withRouter(
  connect(mapStateToProps, {
    fetchCustomers,
  })(CustomerContainer)
);
