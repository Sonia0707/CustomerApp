import React, { Component } from "react";
import PropTypes from "prop-types";
import AppFrame from "./../components/AppFrame";
import CustomerEdit from "../components/CustomerEdit";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class NewCustomerContainer extends Component {
  handleSubmit = () => {};

  handleSubmitSuccess = (values) => {};

  handleOnBack = () => {
    this.props.history.goBack();
  };

  renderBody = () => {
    const newCustomer = {
      id: "",
      dni: "",
      name: "",
      age: 0,
    };

    return (
      <CustomerEdit
        {...newCustomer}
        onSubmit={this.handleSubmit}
        onSubmitSuccess={this.handleSubmitSuccess}
        onBack={this.handleOnBack}
      ></CustomerEdit>
    );
  };

  render() {
    return (
      <div>
        <AppFrame header={`Nuevo cliente`} body={this.renderBody()}></AppFrame>
      </div>
    );
  }
}

NewCustomerContainer.propTypes = {};

export default withRouter(connect(null, null)(NewCustomerContainer));
