function Consultorio(nombre, paciente) {
    this.nombre = nombre;
    this.pacientes = paciente || [];
};
Consultorio.prototype.getNombreCons = function(i) {
    return this.nombre;
};
Consultorio.prototype.getNombre = function(i) {
    return this.pacientes[i].nombre;
};
Consultorio.prototype.getEdad = function(i) {
    return this.pacientes[i].edad;
};
Consultorio.prototype.getRut = function(i) {
    return this.pacientes[i].rut;
};
Consultorio.prototype.getDiagnostico = function(i) {
    return this.pacientes[i].diagnostico;
};
Consultorio.prototype.setPacientes = function(paciente) {
    this.pacientes.push(paciente);
};
function Paciente(nombre, edad, rut, diagnostico) {
    this.nombre = nombre;
    this.edad = edad;
    this.rut = rut;
    this.diagnostico = diagnostico;
}
Paciente.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
}
Paciente.prototype.setEdad = function(edad) {
    this.edad = edad;
}
Paciente.prototype.setRUT = function(rut) {
    this.rut = rut;
}
Paciente.prototype.setDiagnostico = function(diagnostico) {
    this.diagnostico = diagnostico;
};
Paciente.prototype.getNombreP = function() {
    return this.nombre;
}
Paciente.prototype.getEdadP = function() {
    return this.edad;
}
Paciente.prototype.getRutP = function() {
    return this.rut;
}
Paciente.prototype.getDiagnosticoP = function() {
        return this.diagnostico;
}
var pac1 = new Paciente("Juan Piña", 42, "13.155.464-0", "Amigdalítis");
var pac2 = new Paciente("Pedro Carroza", 48, "12.998.242-6", "Gripe");
var pac3 = new Paciente("María Gutierrez", 64, "8.088.377-K", "Sicósis");
var consu1 = new Consultorio("Consultorio", [pac1, pac2]);
consu1.setPacientes(pac3);
pac1.setNombre("Margarita Gomez");
pac2.setEdad(51);
pac3.setRUT("12.247.353-7");
pac1.setDiagnostico("Otitis");
var validar_form = (nombre, edad, rut, diagnostico) => {
    if (nombre == "" || edad == "" || rut == "" || diagnostico == "") {
        return false;
    } else {
        return true;
    }
}
var limpiar_form = () => {
    let inputs_t = document.querySelectorAll('input[type="text"]');
    console.log(inputs_t);
    let inputs_n = document.querySelectorAll('input[type="number"]');
    console.log(inputs_n);
    inputs_t.forEach(function(input) {
        input.value = '';
    });
    inputs_n.forEach(function(input) {
        input.value = '';
    });
};
$(document).ready(function() {
    $('#listar').click(function(e) {
        e.preventDefault();
        consu1.pacientes.forEach(function callback(element, index) {
            console.log(element.getNombreP());
            console.log(element.getEdadP());
            console.log(element.getRutP());
            console.log(element.getDiagnosticoP());
            $('#fila' + index).html(`<td>${element.getNombreP()}</td><td>${element.getEdadP()}</td><td>${element.getRutP()}</td><td>${element.getDiagnosticoP()}</td>`);
            $('#body_tabla').append('<tr id="fila' + (index + 1) + '"></tr>');
        });
    });
    $('#ingresar').click(function(e) {
        e.preventDefault();
        let nombre = $("#nombre").val();
        let edad = $("#edad").val();
        let rut = $("#rut").val();
        let diagnostico = $("#diagnostico").val();
        if (validar_form(nombre, edad, rut, diagnostico)) {
            let nuevo_paciente = new Paciente(nombre, edad, rut, diagnostico);
            consu1.setPacientes(nuevo_paciente);
            alert("Nuevo paciente ingresado con éxito.")
            limpiar_form();
        } else {
            alert("El formulario debe estar completo.")
        }
    });
    $('#buscar').click(function(e) {
        e.preventDefault();
        let nombre_buscar = $("#nombre_buscar").val();
        console.log("El nombre a buscar " + nombre_buscar)
        for (i = 0; i < consu1.pacientes.length; i++) {
            if (nombre_buscar == consu1.getNombre(i)) {
                $('#t2_fila1').html(`<td>${consu1.getNombre(i)}</td><td>${consu1.getEdad(i)}</td><td>${consu1.getRut(i)}</td><td>${consu1.getDiagnostico(i)}</td>`);
                $("#resultado").text("");
                i = consu1.pacientes.length; //Para poder salir del for
            } else {
                $('#t2_fila1').html(`<td></td><td></td><td></td><td></td>`);
                $("#resultado").text("Paciente no encontrado");
            }
        }
    });
    $('#editar').click(function(e) {
        e.preventDefault();
        let nombre_editar = $("#nombre_editar").val();
        for (i = 0; i < consu1.pacientes.length; i++) {
            if (nombre_editar == consu1.getNombre(i)) {
                $("#nombre_a_editar").text(`A continuación los datos del paciente: ${nombre_editar}`);
                $("#form_a_editar").show();
                $("#edad_editar").val(consu1.getEdad(i));
                $("#rut_editar").val(consu1.getRut(i));
                $("#diagnostico_editar").val(consu1.getDiagnostico(i));
                indice_a_editar = i;
                i = consu1.pacientes.length; //Para poder salir del for
            } else {
                $("#nombre_a_editar").text("Paciente no encontrado");
            }
        }
    });
    $('#enviar_editar').click(function(e) {
        e.preventDefault();
        let nombre = $("#nombre_editar").val();
        let edad = $("#edad_editar").val();
        let rut = $("#rut_editar").val();
        let diagnostico = $("#diagnostico_editar").val();
        if (validar_form(nombre, edad, rut, diagnostico)) {
            consu1.pacientes[indice_a_editar].setEdad(edad);
            consu1.pacientes[indice_a_editar].setRUT(rut);
            consu1.pacientes[indice_a_editar].setDiagnostico(diagnostico);
            alert("Datos modificados con éxito");
            limpiar_form();
            $("#form_a_editar").hide();
            $("#nombre_a_editar").text("");
        } else {
            alert("El formulario debe estar completo.")
        }
    });
});