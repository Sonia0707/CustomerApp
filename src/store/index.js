import { createStore } from "redux";

//Generamos una constante de reducers para pasar demomento una constante
//con el parametro de state y retorna un state
const reducers = (state) => state;
//Recoge los recucers y como segundo parametro espera un estado, así que le pasamos un estado enti por el momento:
export const store = createStore(reducers, {});
