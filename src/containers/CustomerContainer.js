import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame";
import { withRouter } from "react-router-dom";

class CustomerContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame header={`Cliente`} body={<p>Datos del cliente</p>}></AppFrame>
      </div>
    );
  }
}

CustomerContainer.propTypes = {};

export default withRouter(connect(null, null)(CustomerContainer));