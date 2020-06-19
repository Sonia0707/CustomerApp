import { FETCH_CUSTOMERS } from "./../constantes";
//Importamos el create:
import { createAction } from "redux-actions";

//Le pasamos directamente la constante que hemos generado y de momento el payload,
//se lo quitamos ya que esta vacio:
export const fetchCustomers = createAction(FETCH_CUSTOMERS);
