import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { withRouter } from "react-router-dom";

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        {/*Le pasamos el DNI desde App.js */}
        <AppFrame
          header={`Cliente ${this.props.dni}`}
          body={<p>Datos del cliente</p>}
        ></AppFrame>
      </div>
    );
  }
}

//Ponemos como requerido el dni:
CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
};

//Mas adelante cambiaremos lo de null:
export default withRouter(connect(null, null)(CustomerContainer));
