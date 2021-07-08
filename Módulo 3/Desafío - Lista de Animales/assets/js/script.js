let formulario = document.querySelector('form');
let instancias = (event)=> {
    event.preventDefault();
    // VARIABLES //
    let propietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.getElementById('resultado');
    // CLASES ES6 //
    // CLASE PADRE
    class Propietario {
        constructor(nombre,direccion,telefono) {
            this.nombre = nombre;
            this.direccion = direccion;
            this.telefono = telefono;
        }
        datosPropietario(){
            return `El nombre del dueño es: ${this.nombre}. El domicilio es: ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`
        }
    }
    // CLASE HIJO
    class Animal extends Propietario {
        constructor(nombre,direccion,telefono,nombreAnimal,tipoAnimal) {
            super(nombre,direccion,telefono);
            this.nombreAnimal = nombreAnimal;
            this.tipoAnimal = tipoAnimal;
        }
        datosAnimal(){
            return `El tipo de animal es un: ${this.tipoAnimal}, mientras que el nombre de la mascota es: ${this.nombreAnimal} y la enfermedad es: `
        }
    }
    // CLASE NIETOS
    class PerroC extends Animal {
        constructor(nombre,direccion,telefono,nombreAnimal,tipoAnimal,enfermedadP) {
            super(nombre,direccion,telefono,nombreAnimal,tipoAnimal);
            this._enfermedadP = enfermedadP;
        }
        get enfermedadP(){
            return this._enfermedadP;
        }
        set enfermedadP(enfermedadPNueva){
            this._enfermedadP = enfermedadPNueva;
        }
    }
    // CLASE NIETOS    
    class GatoC extends Animal {
        constructor(nombre,direccion,telefono,nombreAnimal,tipoAnimal,enfermedadG) {
            super(nombre,direccion,telefono,nombreAnimal,tipoAnimal);
            this._enfermedadG = enfermedadG;
        }
        get enfermedadG(){
            return this._enfermedadG;
        }
        set enfermedadG(enfermedadGNueva){
            this._enfermedadG = enfermedadGNueva;
        }
    }
    // CLASE NIETOS    
    class ConejoC extends Animal {
        constructor(nombre,direccion,telefono,nombreAnimal,tipoAnimal,enfermedadC) {
            super(nombre,direccion,telefono,nombreAnimal,tipoAnimal);
            this._enfermedadC = enfermedadC;
        }
        get enfermedadC(){
            return this._enfermedadC;
        }
        set enfermedadC(enfermedadCNueva){
            this._enfermedadC = enfermedadCNueva;
        }
    }
    // VALIDACIONES //                   
    if (tipo === 'perro') {
        let p1 = new PerroC(propietario,direccion,telefono,nombreMascota,tipo,enfermedad);
        // AGREGANDO DATOS PROPIETARIO
        resultado.innerHTML = `<li>${p1.datosPropietario()}</li>`
        // AGREGANDO DATOS MASCOTA
        resultado.innerHTML += `<li>${p1.datosAnimal()} ${enfermedad}.</li>`
    } else if (tipo === 'gato') {
        let g1 = new GatoC(propietario,direccion,telefono,nombreMascota,tipo,enfermedad);
        // AGREGANDO DATOS PROPIETARIO
        resultado.innerHTML = `<li>${g1.datosPropietario()}</li>`
        // AGREGANDO DATOS MASCOTA
        resultado.innerHTML += `<li>${g1.datosAnimal()} ${enfermedad}.</li>`
    } else if (tipo === 'conejo') {
        let c1 = new ConejoC(propietario,direccion,telefono,nombreMascota,tipo,enfermedad);
        // AGREGANDO DATOS PROPIETARIO
        resultado.innerHTML = `<li>${c1.datosPropietario()}</li>`
        // AGREGANDO DATOS MASCOTA
        resultado.innerHTML += `<li>${c1.datosAnimal()} ${enfermedad}.</li>`
    }
}
formulario.addEventListener('submit',instancias);