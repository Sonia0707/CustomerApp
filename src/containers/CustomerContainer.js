import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { withRouter } from "react-router-dom";
import { getCustomersByDni } from "../selectors/customers";

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        {/*Le pasamos el DNI desde App.js */}
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={<p>Datos del cliente "{this.props.customer.name}"</p>}
        ></AppFrame>
      </div>
    );
  }
}

//Ponemos como requerido el dni:
CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired,
};
//Creamos la funcion para pasarle todas las props de los cliente no solo el dni:(props) => todas las propiedades(pronto cambiaremos la forma X un selector)
const mapStateToProps = (state, props) => ({
  customer: getCustomersByDni(state, props),
});

//Mas adelante cambiaremos lo de null:
export default withRouter(connect(mapStateToProps, null)(CustomerContainer));
