import { combineReducers } from "redux";
import { customers } from "./customers"; //Importamos el reducers.
//Creamos el reducer de form: (Alias para que no sea un nombre muy generico)
import { reducer as reduxForm } from "redux-form";
//PERMISOS NOSOTROS DECIDIMOS QUE PERMISOS TIENE:
import {
  CUSTUMER_EDIT,
  CUSTUMER_LIST,
  CUSTUMER_VIEW,
} from "./../constantes/permissions";

//Generamos un reducers sencillo para la prueba de acceso (datos precargados de un usuario):
const user = (state, action) => ({
  permissions: [CUSTUMER_LIST, CUSTUMER_VIEW, CUSTUMER_EDIT],
});

//Creamos la llamada a los reducers con combineReducers:
//Ponemos la kit de redux-form que es la que esta esperando: form: (es la recomendada)
export default combineReducers({
  customers,
  form: reduxForm,
  user,
});
