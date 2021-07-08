// Función para que se vean los videos
const mostrar_video = () => {
    let private_f = (url, id) => {
        console.log("Estoy en la funcion privada");
        id.setAttribute("src", url);
    }
    return {
        public_f: (url, id) => {
            console.log("Estoy en la funcion publica");
            private_f(url, id);
        }
    }
};
// Crea las clases Multimedia y Reproductor
class Multimedia {
    constructor(url) {
        let _url = url;
        this.getUrl = () => _url;
    }
    get url() {
        return this.getUrl();
    }
    setInicio() {
        console.log("Estoy en el setInicio de Multimedia");
        return `Este método es para realizar un cambio en la URL del video`;
    }
}
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }
    playMultimedia() {
        console.log("Estoy en el play Multimedia");
        mostrar_video().public_f(this.url, this.id);
    }
    setInicio(tiempo) {
        console.log("Estoy en el setInicio del Reproductor");
        let temp_url = `${this.url}?start=${tiempo}`;
        this.id.setAttribute("src", temp_url);
        return "Estoy en el set Inicio";
    }
}
// Lee id de los iframe
let iframe_musica = document.getElementById("musica");
let iframe_peliculas = document.getElementById("peliculas");
let iframe_series = document.getElementById("series");
// Define los url para cada categoría
let url_musica = "https://www.youtube.com/embed/E_GT8CPcIkg";
let url_peliculas = "https://www.youtube.com/embed/MQqJ6x7_zsQ";
let url_series = "https://www.youtube.com/embed/jJ1SKlVzhss";
// Instancia para cada opción
var opcion_musica = new Reproductor(url_musica, iframe_musica);
var opcion_peliculas = new Reproductor(url_peliculas, iframe_peliculas);
var opcion_series = new Reproductor(url_series, iframe_series);
// Método play multimedia para cada opción
opcion_musica.playMultimedia();
opcion_peliculas.playMultimedia();
opcion_series.playMultimedia();
