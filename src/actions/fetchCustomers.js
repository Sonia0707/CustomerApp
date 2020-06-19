import { FETCH_CUSTOMERS } from "./../constantes";
//Importamos el create:
import { createAction } from "redux-actions";

//Creamos aqui la lista por defecto de clientes: (payload), segundo parametro que necesita la accion:
const customers = [
  {
    dni: "71462879q",
    name: "Sonia Vidal",
    age: 28,
  },
  {
    dni: "78953647w",
    name: "Jose Gonzalez",
    age: 37,
  },
  {
    dni: "09876543e",
    name: "Luis Martinez",
    age: 25,
  },
];

//Le pasamos directamente la constante que hemos generado y de momento el payload,
//se lo quitamos ya que esta vacio:
export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customers);
