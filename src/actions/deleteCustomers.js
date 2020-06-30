import { createAction } from "redux-actions";
import { DELETE_CUSTOMER } from "../constantes";
import { apiDelete } from "../api";
import { urlCustom } from "../api/urls";

export const deleteCustomers = createAction(DELETE_CUSTOMER, (id) =>
  apiDelete(urlCustom, id)()
);
