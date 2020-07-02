import React, { Component } from "react";
import { connect } from "react-redux";

//Higher Order Component:
//Una función que retorna un nuevo componente con las propiedades iniciales:
//Le llega los permisos requeridos como parametro, y la vista WrappepComponent
export const accesControl = (permissionsRequired) => (WrappepComponent) => {
  //Dentro hay una constante que va a ser el resultado del control decorado:(Estiende de Component)
  const SecuredControl = class extends Component {
    render() {
      const { permissions } = this.props.user;
      //Constante que comprueba si no tiene permisos el usuario según los permisos que le estan llegando:
      //(verifica => permissionsRequired y x cada uno de los items del array se va a verificar
      //que dentro de permissions el indice exista, es decir mayor que 0)
      const isAllow = permissionsRequired.every(
        (p) => permissions.indexOf(p) >= 0
      );
      //Condición:
      if (!isAllow) {
        return (
          <div>
            <i>No tiene permisos de acceso</i>
          </div>
        );
      }
      //Si los permisos son correcto podremos ver la vista con sus propiedades:
      return <WrappepComponent {...this.props} />;
    }
  };
  //El usuario lo vamos a obtener de redux, con lo cual necesitaremos el connect para conectar con el store (los datos de la aplicación)
  //"Pagina de login, se registra una vez que se registra coge los datos del user => en el REDUCE"
  return connect((state) => ({ user: state.user }))(SecuredControl);
};
