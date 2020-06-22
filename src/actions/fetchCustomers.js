import { FETCH_CUSTOMERS } from "./../constantes";
//Importamos el create:
import { createAction } from "redux-actions";

//Url levantada por el servidor
const url = "http://localhost:3001/customers";

//La funcion que contiene una promise:
const apiFetchCustomers = () => fetch(url).then((v) => v.json());

//Le pasamos directamente la constante que hemos generado y la función que contiene la promise:
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiFetchCustomers);
