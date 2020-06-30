//Es una utilidad que me permite manejar los reducers:
import { handleActions } from "redux-actions"; //esto nos lo ofrece solo redux-actions
import {
  FETCH_CUSTOMERS,
  INSERT_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
} from "../constantes";

//Generar constante que se iguala al resultado de  handleActions
//Que esta esperando un objeto, y este objeto va estar compuesto de las distintas constantes como claves, de este diccionario
// y luego va estar asociada a una funcion. Podemos tener un listado de Acciones, por el momento lo dejamos así.
//Segundo párametro valor inicial del state y creamos una copia con el state opereitor. (Necesita más refactor)
export const customers = handleActions(
  {
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
      const customerPayload = action.payload;
      const { id } = customerPayload; // i = 2 name= 'nuevo nombre'
      // [{id: 1, name: '', ...},
      // {id: 2, name: 'viejo nombre', ...},
      // {id: 3, name: '', ...}]
      const customers = state;
      const initialValue = [];
      // 1º Vacio [], luego cada valor:
      const newCustomers = customers.reduce((acc, customer) => {
        if (customer.id === id) {
          return [...acc, customerPayload];
        } else {
          return [...acc, customer];
        }
      }, initialValue);
      return newCustomers;
    },
    //Agregamos el reducers de eliminar para cuando se elimine y volvamos a la lista, ya no este.
    [DELETE_CUSTOMER]: (state, action) =>
      state.filter((c) => c.id !== action.payload),
  },
  []
);
