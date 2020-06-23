import { createSelector } from "reselect";

//Exportamos el selector que tiene el array del estado del reducers de customers.js:
export const getCustomers = (state) => state.customers;

export const getCustomersByDni = createSelector(
  (state, props) => state.customers.find((c) => c.dni === props.dni),
  (customer) => customer
);
