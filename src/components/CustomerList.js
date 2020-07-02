import React from "react";
import PropTypes from "prop-types";
import CustomerListItem from "./CustomerListItem";
import { accesControl } from "../helpers/accesControl";
import { CUSTUMER_LIST } from "../constantes/permissions";

const CustomerList = ({ customers, urlPath }) => {
  return (
    <div>
      <div className="customers-list">
        {customers.map((c) => (
          <CustomerListItem
            key={c.dni}
            dni={c.dni}
            name={c.name}
            editAction={"Editar"}
            delAction={"Eliminar"}
            urlPath={urlPath}
          ></CustomerListItem>
        ))}
      </div>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default accesControl([CUSTUMER_LIST])(CustomerList);
