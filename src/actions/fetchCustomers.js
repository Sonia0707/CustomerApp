import { FETCH_CUSTOMERS } from "./../constantes";
//Importamos el create:
import { createAction } from "redux-actions";
//Importación de la api y la url correspondiente:
import { apiGet } from "../api";
import { urlCustom } from "../api/urls";

//Le pasamos directamente la constante que hemos generado y la api que contiene la promise con la url:
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustom));
