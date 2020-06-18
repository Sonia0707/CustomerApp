export const fetchCustomers = () => {
  //Como aún no tenemos la herramienta de redux activada, vamos a poner un punto de interrucción para
  //comprobar si la action se esta ejecutando el componentDidMount...
  debugger;
  return {
    type: "FETCH_CUSTOMERS",
    payload: null,
  };
};
