import React from "react";
import PropTypes from "prop-types";
//El Field es para generar diferentes acciones de forma automatica:
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from "./../helpers/setPropsAsInitial";
import CustomersActions from "./CustomersActions";
import { Prompt } from "react-router-dom";

//Funcion con unico parametro, en base a ese resultado retornamos un único resultado: VAMOS A CREAR VALIDACIONES A NIVEL DE FIELD:
//const isRequired = (value) => !value && "Este campo es requerido";

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

//Siguiente paso eliminamos isRequired ya que lo vamos hacer una Validación global:
//Asi que creamos la función de validate que contiene varios valores, espera como retorno los posibles errores,
//pero la diferencia es que los errores van estar representados como objetos, cuyas claves van a ser cada uno de los campos que hayan tenido error:
const validate = (values) => {
  const error = {};

  if (!values.name) {
    error.name = "El campo nombre es requerido";
  }
  if (!values.dni) {
    error.dni = "El dni es un campo requerido";
  }
  return error;
};

//Funciones que controlan "parse()" y "format()":
//1º La primera controla que sea un numero lo que escribimos y nada mas, para que se guarde eso.
const toNumber = (value) => value && Number(value);
//2º La segunda que sea en mayusculas el campo, da igual que escribamos lo convertira en mayusculas.
const toUpper = (value) => value && value.toUpperCase();
//3º Es compatible con la segunda, es decir cuando vamos a guardar automaticamente todo se graba en minuscula,
//pero una vez se graba y se guarda el resultado es en mayusculas.
const toLower = (value) => value && value.toLowerCase();
//4º Ultima función normalize() => Esta función recoge los valores que hay y examina si no estan vacios = el valor tiene que ser mayor al valor que
//ya esta ingresado si no se quedara con el mismo valor:
const onlyGrow = (value, previousValue, values) =>
  value && previousValue && (value > previousValue ? value : previousValue);

//Añadimos 2 funciones para el boton de aceptar que se las pasara el CustomerContainer.js:
const CustomerEdit = ({
  name,
  dni,
  age,
  handleSubmit,
  submitting,
  onBack,
  pristine,
  submitSucceeded,
}) => {
  return (
    //Le pasamos al form la acción por defecto reservada en redux-form handleSubmit
    <div>
      <h2>Edición del cliente</h2>
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={MyField}
          type="text"
          label="Nombre:"
          parse={toUpper}
          format={toLower}
        ></Field>

        <Field name="dni" component={MyField} type="text" label="DNI:"></Field>
        <Field
          name="age"
          component={MyField}
          type="number"
          validate={isNumber}
          label="Edad:"
          parse={toNumber}
          normalize={onlyGrow}
        ></Field>
        {/*LLamamos al CustomersActions resevado para los botones
        Le pasamos el submit de los datos del JSON con la función submitting
        tambien reservada en redux-form para esto */}
        <CustomersActions>
          {/**Desabilitamos el botón si no se ha realizado ningun cambio */}
          <button type="submit" disabled={pristine || submitting}>
            Aceptar
          </button>
          <button type="button" disabled={submitting} onClick={onBack}>
            Cancelar
          </button>
        </CustomersActions>
        {/**VALIDACION DEL BOTON CANCELAR: Utilización del componente Prompt que es parte de react-router-dom,
         *  dentro de el la utilización del booleano (pristine) que es parte de redux-form.
         * message= Mensaje de alerta que se mandará al darle a cancelar:  */}
        <Prompt
          when={!pristine && !submitSucceeded}
          message="Se perderán los datos si continua"
        ></Prompt>
      </form>
    </div>
  );
};

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};
//Decorando el componente CustomerEdit con un Higher Order Component que nos provee la librería redux-form
//Como parametro le estamos pasando un objet que tiene como clave: form: 'CustomerEdit' el nombre es arbitrario pero
//tiene que mantener el nombre ya en todo momento una vez puesto:

//En este paso creamos una función con el decorado para hacerlo mas sencillo y pasarselo al Higher Order Component:
// Utilizamos la funcion validate para crear las validaciones a nivel global:
const CustomersEditForm = reduxForm({
  form: "CustomerEdit",
  validate,
})(CustomerEdit);

//Borramos el connect y utilizamos nuestro Higher Order Component (decoreitor) que establece las propiedades iniciales:
export default setPropsAsInitial(CustomersEditForm);
