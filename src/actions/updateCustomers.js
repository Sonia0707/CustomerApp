import { createAction } from "redux-actions";
import { UPDATE_CUSTOMER } from "../constantes";
import { apiPut } from "../api";
import { urlCustom } from "../api/urls";

export const updateCustomers = createAction(UPDATE_CUSTOMER, (id, customer) =>
  apiPut(urlCustom, id, customer)()
);
