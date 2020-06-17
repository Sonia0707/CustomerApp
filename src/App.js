import React, { Component } from "react";
//Quitamos el link y metemos el Route:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./components/HomeContainer";

class App extends Component {
  renderHome = () => <h1>Home</h1>;
  renderCustomerContainer = () => <h1>Customer Container</h1>;
  renderCustomerListContainer = () => <h1>Customers List Container</h1>;
  renderCustomerNewContainer = () => <h1>Customer New Container</h1>;

  render() {
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
          <Route exact path="/" component={HomeContainer} />
          <Route
            exact
            path="/customers"
            component={this.renderCustomerListContainer}
          />

          <Switch>
            <Route
              path="/customers/new"
              component={this.renderCustomerNewContainer}
            />
            <Route
              path="/customers/:dni"
              component={this.renderCustomerContainer}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
