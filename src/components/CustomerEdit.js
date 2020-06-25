import React from "react";
import PropTypes from "prop-types";
//El Field es para generar diferentes acciones de forma automatica:
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "./../helpers/setPropsAsInitial";

const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2>Edición del cliente</h2>
      <form action="">
        <div>
          <label htmlFor="name">Nombre: </label>
          <Field name="name" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="dni">DNI: </label>
          <Field name="dni" component="input" type="text"></Field>
        </div>
        <div>
          <label htmlFor="age">Edad: </label>
          <Field name="age" component="input" type="number"></Field>
        </div>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
};
//Decorando el componente CustomerEdit con un Higher Order Component que nos provee la librería redux-form
//Como parametro le estamos pasando un objet que tiene como clave: form: 'CustomerEdit' el nombre es arbitrario pero
//tiene que mantener el nombre ya en todo momento una vez puesto:

//En este paso creamos una función con el decorado para hacerlo mas sencillo y pasarselo al Higher Order Component:
const CustomersEditForm = reduxForm({ form: "CustomerEdit" })(CustomerEdit);

//Borramos el connect y utilizamos nuestro Higher Order Component (decoreitor) que establece las propiedades iniciales:
export default setPropsAsInitial(CustomersEditForm);
