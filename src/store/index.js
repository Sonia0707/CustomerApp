import { createStore, compose } from "redux";
//Vamos a invocar los reducers:
import reducers from "./../reducers";

//Creamos la herramienta de REDUX_DEVTOOLS para poder visualizar mejor el state de nuestra aplicación:

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Generamos una constante de reducers para pasar demomento una constante
//con el parametro de state y retorna un state
//const reducers = (state) => state; ¡¡¡Eliminamos constante solo la teniamos de prueba hasta pasarle el reducers!!!

//Recoge los recucers, como segundo parametro espera un estado y el tercero en nuestra herramienta para redux en chrome:
export const store = createStore(reducers, {}, composeEnhancers());
