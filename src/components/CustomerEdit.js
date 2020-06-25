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

//Incluimos ahora para la mejora y para utilizarlo en el campo numerico el type porque si no no funcionaría,
//quiero que cuando no encuentre el tipo asuma que es texto.
const MyField = ({ input, meta, type, label, name }) => (
  <div>
    <label htmlFor={name}>{label} </label>
    <input {...input} type={!type ? "text" : type} />
    {meta.touched && meta.error && <span>{meta.error}</span>}
  </div>
);
//Vammos a crear una función para asegurarnos de que lo que llega es un numero a nuestro campo:
const isNumber = (value) => isNaN(Number(value)) && "Debe ser un numero";
//Ponemos las validaciones (isRequired y isNumber) y el componente requerido (MyField):
const CustomerEdit = ({ name, dni, age }) => {
  return (
    <div>
      <h2>Edición del cliente</h2>
      <form action="">
        <Field
          name="name"
          component={MyField}
          type="text"
          validate={isRequired}
          label="Nombre:"
        ></Field>

        <Field
          name="dni"
          component={MyField}
          type="text"
          validate={(isRequired, isNumber)}
          label="DNI:"
        ></Field>

        <Field
          name="age"
          component={MyField}
          type="number"
          validate={isNumber}
          label="Edad:"
        ></Field>
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
