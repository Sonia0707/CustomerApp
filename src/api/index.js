//Separamos la función que recoge los datos del servidor en una carpeta API
//La funcion que contiene una promise:

//Recibe como parametro una URL y retorna una fución que eso es lo que esta esperando el payload creator:
//Dentro de la función llama al fetch con la url que le pasemos como parametro y despues resuelve tomando el json en el promise:
export const apiGet = (url) => () => fetch(url).then((v) => v.json());

export const apiPut = (url, id, obj) => () =>
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: new Headers({ "Content-type": "application/json" }),
  })
    .then((v) => v.json())
    .then((r) => {
      if (r.error) {
        const err = new Error();
        err.error = r.error;
        err.payload = r.validation;
        return Promise.reject(err);
      }
      return r;
    });

export const apiPost = (url, obj) => () =>
  fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: new Headers({ "Content-type": "application/json" }),
  })
    .then((v) => v.json())
    .then((r) => {
      if (r.error) {
        const err = new Error();
        err.error = r.error;
        err.payload = r.validation;
        return Promise.reject(err);
      }
      return r;
    });
