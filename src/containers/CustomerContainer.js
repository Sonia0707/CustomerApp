import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import CustomerData from "../components/CustomerData";

import { withRouter, Route } from "react-router-dom";
import { getCustomersByDni } from "../selectors/customers";
import { fetchCustomers } from "./../actions/fetchCustomers";
import { updateCustomers } from "./../actions/updateCustomers";
import { deleteCustomers } from "./../actions/deleteCustomers";

import { SubmissionError } from "redux-form";

class CustomerContainer extends Component {
  //Carga inicial de los datos: Validación para que no me aparezcan vacios los campos:
  componentDidMount() {
    if (!this.props.customer) {
      this.props.fetchCustomers();
    }
  }

  //Creamos la función para pasarsela a CustomerEdit y poder modificar los datos:
  handleSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
    const { id } = values;
    return this.props
      .updateCustomers(id, values)
      .then((v) => v)
      .catch((err) => {
        if (err.error) {
          throw new SubmissionError(err.payload);
        }
      });
  };
  handleOnBack = () => {
    this.props.history.goBack();
  };

  handleOnSubmitSuccess = () => {
    this.props.history.goBack();
  };

  //Función para eliminar a los clientes: Le pasamos el id del cliente a eliminar:
  handleOnDelete = (id) => {
    console.log("la funcion de borrado");
    this.props.deleteCustomers(id).then((v) => {
      this.props.history.goBack();
    });
  };

  //Construimos isEdit y isDelete para borrar o editar:
  renderCustomerControl = (isEdit, isDelete) => {
    if (this.props.customer) {
      //Depende cual cliquemos: (CustomerControl)= Alias...
      const CustomerControl = isEdit ? CustomerEdit : CustomerData;

      //Cogemos todas las propiedades de los clientes haciendo un destrugturing (Spread Attributes) el como poner age={edad}, dni={dni}, name={name}
      //Retormanamos un componente determinado que nos devuelve data o edit para no andar repitiendo las propiedades de nuevo (DRY)
      return (
        //Añadimos la función y depende si es data o edit:
        //Añadimos las funciones de delete:
        <CustomerControl
          {...this.props.customer}
          onSubmit={this.handleSubmit}
          onSubmitSuccess={this.handleOnSubmitSuccess}
          onBack={this.handleOnBack}
          isDeleteAllow={!!isDelete}
          onDelete={this.handleOnDelete}
        />
      );
    }
    return null;
  };

  //Ejemplo de Route cambiamos el pinchar en Edition
  //Utilizamos propiedad children que se puede usar de maneras diferentes, su especialidad es mas en las animaciones:
  renderBody = () => (
    <Route
      path="/customers/:dni/edit"
      children={({ match: isEdit }) => (
        <Route
          path="/customers/:dni/del"
          children={({ match: isDelete }) =>
            this.renderCustomerControl(isEdit, isDelete)
          }
        />
      )}
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
  updateCustomers: PropTypes.func.isRequired,
  deleteCustomers: PropTypes.func.isRequired,
};
//Creamos la funcion para pasarle todas las props de los cliente no solo el dni:(props) => todas las propiedades(pronto cambiaremos la forma X un selector)
const mapStateToProps = (state, props) => ({
  customer: getCustomersByDni(state, props),
});

//Mas adelante cambiaremos lo de null:
//Acción de delete para terminar:
export default withRouter(
  connect(mapStateToProps, {
    fetchCustomers,
    updateCustomers,
    deleteCustomers,
  })(CustomerContainer)
);
