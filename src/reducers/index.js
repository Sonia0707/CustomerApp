import { combineReducers } from "redux";
import { customers } from "./customers"; //Importamos el reducers.

//Creamos la llamada a los reducers con combineReducers:
export default combineReducers({
  customers,
});
