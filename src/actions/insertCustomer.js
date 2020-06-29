import { createAction } from "redux-actions";
import { INSERT_CUSTOMER } from "../constantes";
import { apiPost } from "../api";
import { urlCustom } from "../api/urls";

export const insertCustomer = createAction(INSERT_CUSTOMER, (customer) =>
  apiPost(urlCustom, customer)()
);
