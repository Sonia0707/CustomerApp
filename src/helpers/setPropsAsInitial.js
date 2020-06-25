//Cada vez que tenemos una clase tenemos que importar react y el component:
import React, { Component } from "react";

//Una función que retorna un nuevo componente con las propiedades iniciales y la exportamos para que la coja CustomerEdit.
export const setPropsAsInitial = (WrappedComponent) =>
  class extends Component {
    render() {
      //Cogemos las propiedades que nos pasarón del componente llamador CustomerData por destructuring(pasa manos de todas las propiedades que vengan)
      //Y initialValues ya le pasamos la propiedad en especifico, que sera customers
      return <WrappedComponent {...this.props} initialValues={this.props} />;
    }
  };
