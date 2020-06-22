//Separamos la función que recoge los datos del servidor en una carpeta API
//La funcion que contiene una promise:

//Recibe como parametro una URL y retorna una fución que eso es lo que esta esperando el payload creator:
//Dentro de la función llama al fetch con la url que le pasemos como parametro y despues resuelve tomando el json en el promise:
export const apiGet = (url) => () => fetch(url).then((v) => v.json());
