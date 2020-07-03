//PERMISOS NOSOTROS DECIDIMOS QUE PERMISOS TIENE:
import {
  CUSTUMER_EDIT,
  CUSTUMER_LIST,
  CUSTUMER_VIEW,
} from "./../constantes/permissions";

//Generamos un reducers sencillo para la prueba de acceso (datos precargados de un usuario):
export const user = (state, action) => ({
  permissions: [CUSTUMER_LIST, CUSTUMER_VIEW, CUSTUMER_EDIT],
});
