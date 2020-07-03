import { combineReducers } from "redux";
import { customers } from "./customers"; //Importamos el reducers.
import { user } from "./user"; //Importamos el reducers.

//Creamos el reducer de form: (Alias para que no sea un nombre muy generico)
import { reducer as reduxForm } from "redux-form";

//Creamos la llamada a los reducers con combineReducers:
//Ponemos la kit de redux-form que es la que esta esperando: form: (es la recomendada)
export default combineReducers({
  customers,
  form: reduxForm,
  user,
});
