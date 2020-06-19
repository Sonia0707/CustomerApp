//Es una utilidad que me permite manejar los reducers:
import { handleActions } from "redux-actions"; //esto nos lo ofrece solo redux-actions
import { FETCH_CUSTOMERS } from "../constantes";

//Generar constante que se iguala al resultado de  handleActions
//Que esta esperando un objeto, y este objeto va estar compuesto de las distintas constantes como claves, de este diccionario
// y luego va estar asociada a una funcion. Podemos tener un listado de Acciones, por el momento lo dejamos así.
//Segundo párametro valor por defecto que va a ser el valor inicial de nuestro state.
export const customers = handleActions(
  {
    [FETCH_CUSTOMERS]: (state) => state,
  },
  {}
);
