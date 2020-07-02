import React, { Component } from "react";
//Quitamos el link y metemos el Route:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import CustomersContainer from "./containers/CustomersContainer";
import CustomerContainer from "./containers/CustomerContainer";
import NewCustomerContainer from "./containers/NewCustomerContainer";

function App() {
  /* Cambiamos el componente a function de nuevo ya que no necesitamos ni render ni funciones llamamos directamente a los componentes:
  renderHome = () => <HomeContainer />;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <CustomersContainer />;
  renderCustomerNewContainer = () => <h1>Nuevo Cliente</h1>;
  */

  return (
    //Ponemos los Route dentro del Router que solo puede tener un componente hijo, así que lo metemos todo en un div:
    //Utilizamos la palabra exact para que cuando vayamos a la ruta de cada uno los demás desaparezcan
    //El problema de exact es que en las dos rutas ultimas identifica lo siguiente de /customers/... como si fuera el mismo patrón
    //Por lo tanto necesitamos utilizar Switch y tendremos que colocar la ruta mas especifica primero /new ya que la que tiene el wilkar:
    //  /:dni => no valida por algo en especial si no por cualquier String. Borramos la palabra exact porque ya es redundante y no la necesitamos
    //Podríamos hacer lo mismo con todos envolverlos en Switch y ordenarlos de manera especifica (1ºnew, 2ºdni, 3ºlista, 4ºHome),
    //borrando la palabra exact. Pero vamos a dejar las 2 formas para que se vea que se puede hacer de 2 maneras distintas:
    <Router>
      <div className="App">
        {/*Le pasamos la función al Route y funciona gracias a withRouter*/}
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/customers" component={CustomersContainer} />

        <Switch>
          <Route path="/customers/new" component={NewCustomerContainer} />
          {/*Cambiamos la forma de llamar al componente con el render 
          y le pasamos la propiedad: dni que la cogemos del servidor:
         props.match.params.dni*/}

          <Route
            path="/customers/:dni"
            render={(props) => (
              <CustomerContainer dni={props.match.params.dni} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
