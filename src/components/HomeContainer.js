import React, { Component } from "react";
import PropTypes from "prop-types";
//Quitamos el Link que ya no lo estabamos usando y metemos el withRouter
import { withRouter } from "react-router-dom";
import AppFrame from "./../components/AppFrame";
import CustomerActions from "./../components/CustomersActions";

class HomeContainer extends Component {
  handleOnClick = () => {
    console.log("handleOnClick");

    //Para continuar y hacer la conexión atraves del boton utilizaremos el elemento history que nos provee react-router-dom
    //Solo podemos acceder a este elemento mientras nuestro componente este dentro de el Router y como a HomerContainer lo estan llamando en el App
    //mediante un Router no tenemos problema.
    //history se maneja al estilo stag, quiere decir que si queremos navegar a otra URL ara un push y se agregará un elemento a esta y despues si
    //hacemos un back o el usuario hace un back el elemento desaparece y volvemos a la pagina de home
    this.props.history.push("/customers");
  };
  render() {
    return (
      <div>
        <AppFrame
          header="Home"
          body={
            <div>
              Esta es la pantalla inicial
              <CustomerActions>
                <button onClick={this.handleOnClick}>
                  Listado de clientes
                </button>
              </CustomerActions>
            </div>
          }
        ></AppFrame>
      </div>
    );
  }
}

HomeContainer.propTypes = {};

//Función withRouter recibe como parametro nuestro componente y retorna otro componente decorado, es decir que le agrega funcionalidad
//Agregandole las propiedades de => history, location, math
//Por lo tanto una forma de que funcione siempre independientemente de como llamemos al componente es utilizando esta función:
export default withRouter(HomeContainer);
