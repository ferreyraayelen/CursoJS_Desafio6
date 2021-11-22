/* //Array Servicios
const servicios = ["Página web", "One Page", "Tienda Online"];
//Mostrar todos los servicios
console.log(servicios);
//mostrar servicio posición 0
console.log(servicios[0]);
//for para mostrar la lista .length cuenta la cantidad de elementos
for (let i = 0; i < servicios.length; i++) {
    console.log(servicios[i]);
}
//Metodo toString (Convierte un array en string, separa los elementos con ,)
let serviciosFinal = servicios.toString();
console.log("Método toString:");
console.log(serviciosFinal);

//Metodo push (se usa para agregar elementos al array
servicios.push("Sitio profesional");
console.log(servicios);

//Metodo join (Convierte un array en string, separa los elementos con el elemento que querramos)
let serviciosConJoing = servicios.join("_._");
console.log(serviciosConJoing);

//Método contat (sirve para unir dos array)
const servicios1 = ["Redacción de contenido online", "Mantenimiento de sitios web"];
const serviciosCompletos = servicios.concat(servicios1);
console.log(serviciosCompletos); */

//Array con objetos
//Lista de objetos literales
//OBJETOS LITERALES

const serviciosWeb = [
    { id: 1, nombreServicio: "Landing Page", descripcion: "Las landing pages son páginas web promocionales que se crean para dar a conocer un producto o servicio en concreto a través de una única página web, sin páginas interiores. Es una manera excelente de fortalecer tu marca", precio: 10000 },

    { id: 2, nombreServicio: "Sitio web", descripcion: "El sitio web es el conjunto de varias páginas web que se agrupan para cumplir determinados objetivos, sin embargo, estos tienen un propósito común: ser la carta de presentación de un negocio en el mundo del internet.", precio: 20000 },

    { id: 3, nombreServicio: "Tienda online", descripcion: "Son aquellos sitios que permiten realizar un comercio electrónico mediante el sitio web, también llamados como carritos de compras o ventas. Estos sitios web permiten realizar transacciones entre comprador y vendedor.", precio: 30000 }];

console.log(serviciosWeb);

//Metodo for para recorrer un array de objetos "Para cada servicio de la lista de servicios que me haga una salida de consola"
//acá se muestra todo el array, con las características completas de c/objeto

for (const servicio of serviciosWeb) {
    console.log("Id: " + servicio.id + " Nombre del servicio: " + servicio.nombreServicio + " Descripción: " + servicio.descripcion + " Precio: " + servicio.precio);
}

//Class objeto Servicio

//OBJETOS
//Crear objetos mediante clases
//Class servicio
class objetoServicio {
    constructor(objetoLiteral) {
        this.id = objetoLiteral.id;
        this.nombreServicio = objetoLiteral.nombreServicio;
        this.descripcion = objetoLiteral.descripcion;
        this.precio = objetoLiteral.precio;
        this.vendido = false;
        this.stock = true;
    }
}

//convertir a los objetos literales en objetos servicios
//Primero crear un nuevo array

const listaDeObjetosServicio = [];
for (const servicio of serviciosWeb) {
    listaDeObjetosServicio.push(new objetoServicio(servicio));
}
console.log(listaDeObjetosServicio);

//Metodo find (devuelve el valor del promer elemento del array que satisface la funcion de comprobación enviada por parámetros)
//buscar servicio cuyo precio sea mayor a 10000
const servicioEncontrado = listaDeObjetosServicio.find(servicio => servicio.precio > 10000);
console.log(servicioEncontrado);

//Metodo find por ID / Buscar un producto por ID
let idBuscado = parseInt(prompt("Ingrese el ID que desea"));
const idEncontrado = listaDeObjetosServicio.find(servicio => servicio.id == idBuscado);


//Metodo filter (crea un nuevo array con todos los elementos que cumplan la funcion de comprobación enviada por parámetros)
//buscar servicios cuyo precio sea mayor a 10000
const serviciosMayoresA10Mil = listaDeObjetosServicio.filter(servicio => servicio.precio > 10000);
console.log("Los servicios con un precio mayor a 10000 son: "),
    console.log(serviciosMayoresA10Mil);