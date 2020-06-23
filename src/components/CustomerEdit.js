import React from "react";
import PropTypes from "prop-types";
//El Field es para generar diferentes acciones:
import { reduxForm, Field } from "redux-form";

const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2>Edición del cliente</h2>
      <h3>
        Nombre: {name} / DNI: {dni} / Edad: {age}
      </h3>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
};
//Decorando el componente CustomerEdit con un hihgt order component que nos provee la librería redux-form
//Como parametro le estamos pasando un objet que tiene como clave: form: 'CustomerEdit' el nombre es arbitrario pero
//tiene que mantener el nombre ya en todo momento una vez puesto:
export default reduxForm({ form: "CustomerEdit" })(CustomerEdit);
