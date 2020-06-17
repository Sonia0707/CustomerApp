import React from "react";
import PropTypes from "prop-types";

//Contenedor que va a tener los hijos:
const CustomersActions = ({ children }) => {
  return (
    <div>
      <div className="custormer-actions">
        <div>{children}</div>
      </div>
    </div>
  );
};

CustomersActions.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomersActions;
