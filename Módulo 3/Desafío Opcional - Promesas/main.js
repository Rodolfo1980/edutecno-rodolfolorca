//Solicitud a la api a través de una función asíncrona y buenas prácticas
const request = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const results = await fetch(url);
        const response = await results.json();
        //por cada elemento que encuentre con id y que sea menor o igual a 20 mostrará el título por la consola.
        response.forEach(element => {
            if(element.id <= 20){
                console.log(element.title);
            }
        });
    } catch (error) {
        //si no encuentra ninguno tirará error
        console.log(error);
    }
};
//Luego de 3 segundos se mostrará el mensaje a través de una promesa (la cual se resolverá con el console.log)
const mensaje = async () => new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Información enviada");
    }, 3000)
})
//Se llamará a la promesa anterior a través de una función asíncrona que contendrá la promesa anterior.
const mensajeRecibido = async (mensaje) => {
    const tiempoAlbum = await mensaje();
    console.log(tiempoAlbum);
}
//Se llama a ambas funciones para imprimir en la consola.
request();
mensajeRecibido(mensaje);
