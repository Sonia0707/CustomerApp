import React from "react";
import PropTypes from "prop-types";
//El Field es para generar diferentes acciones de forma automatica:
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "./../helpers/setPropsAsInitial";

//Funcion con unico parametro, en base a ese resultado retornamos un único resultado: VAMOS A CREAR VALIDACIONES A NIVEL DE FIELD:
const isRequired = (value) => !value && "Este campo es requerido";

//Genero componente para el input:
// -(meta.error)= Mensaje que se manda cuando el valor es vacio en isRequired.
// -(meta.touched)= Primero tiene que a ver sido tocado por el usuario al menos una vez, para mostrar el mensaje:
const MyField = ({ input, meta }) => (
  <div>
    <input {...input} type="text" />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);
//Ponemos las validaciones y el componente requerido:
const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2>Edición del cliente</h2>
      <form action="">
        <div>
          <label htmlFor="name">Nombre: </label>
          <Field
            name="name"
            component={MyField}
            type="text"
            validate={isRequired}
          ></Field>
        </div>
        <div>
          <label htmlFor="dni">DNI: </label>
          <Field
            name="dni"
            component={MyField}
            type="text"
            validate={isRequired}
          ></Field>
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
