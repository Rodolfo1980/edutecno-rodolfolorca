/*Solicitud de datos al usuario*/
var nombre = prompt("Ingresa tu nombre:");
var apellido = prompt("Ingresa tu apellido:");
var carrera = prompt("Ingresa tu carrera:");
var asign1 = prompt("Ingresa el nombre de tu primera asignatura:");
var a1n1 = prompt("Ingresa tu primera nota de "+asign1);
var a1n2 = prompt("Ingresa tu segunda nota de "+asign1);
var a1n3 = prompt("Ingresa tu tercera nota de "+asign1);
var asign2 = prompt("Ingresa el nombre de tu segunda asignatura:");
var a2n1 = prompt("Ingresa tu primera nota de "+asign2);
var a2n2 = prompt("Ingresa tu segunda nota de "+asign2);
var a2n3 = prompt("Ingresa tu tercera nota de "+asign2);
var asign3 = prompt("Ingresa el nombre de tu tercera asignatura:");
var a3n1 = prompt("Ingresa tu primera nota de "+asign3);
var a3n2 = prompt("Ingresa tu segunda nota de "+asign3);
/*Calculo de promedio*/
a1n1 = parseInt(a1n1);
a1n2 = parseInt(a1n2);
a1n3 = parseInt(a1n3);
promedio1 = ((a1n1+a1n2+a1n3)/3);
promedio1 = promedio1.toFixed(2);
a2n1 = parseInt(a2n1);
a2n2 = parseInt(a2n2);
a2n3 = parseInt(a2n3);
promedio2 = ((a2n1+a2n2+a2n3)/3);
promedio2 = promedio2.toFixed(2);
/*Calculo de nota necesaria para aprobar la asignatura*/
a3aprob = (4.00).toFixed(2);
a3n3 = ((3*a3aprob)-a3n1-a3n2);
a3n3 = a3n3.toFixed(2);
a3n1 = parseInt(a3n1);
a3n2 = parseInt(a3n2);
a3n3 = parseInt(a3n3);
a3n3 = ((a3n1+a3n2+a3n3)/3);
/*Contenedor principal*/
document.write("<div class='container'>");
document.write("<h1>Notas Finales</h1>");
document.write("<p>Nombre: "+nombre+" "+apellido+"</p>");
document.write("<p>Carrera: "+carrera+"</p>");
/*Apertura de tabla con estilo Bootstrap*/
document.write("<table class='table'>");
/*Cabecera de la tabla*/
document.write("<thead class='bg-dark text-white'>");
document.write("<tr>");
document.write("<th scope='col'>Asignatura</th>");
document.write("<th scope='col'>Nota 1</th>");
document.write("<th scope='col'>Nota 2</th>");
document.write("<th scope='col'>Nota 3</th>");
document.write("<th scope='col'>Promedio Final</th>");
document.write("</tr>");
document.write("</thead>");
/*Contenido de la tabla (notas y promedios) - Asignaturas 1, 2 y 3 */
document.write("<tbody>");
document.write("<tr>");
document.write("<td>"+asign1+"</td>");
document.write("<td>"+a1n1+"</td>");
document.write("<td>"+a1n2+"</td>");
document.write("<td>"+a1n3+"</td>");
document.write("<td>"+promedio1+"</td");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+asign2+"</td>");
document.write("<td>"+a2n1+"</td>");
document.write("<td>"+a2n2+"</td>");
document.write("<td>"+a2n3+"</td>");
document.write("<td>"+promedio2+"</td");
document.write("</tr>");
document.write("<tr>");
document.write("<td>"+asign3+"</td>");
document.write("<td>"+a3n1+"</td>");
document.write("<td>"+a3n2+"</td>");
document.write("<td>-</td>");
document.write("<td>-</td>");
document.write("</tr>");
document.write("</tbody>");
/*Cierre de tabla con estilo Bootstrap*/
document.write("</table>");
/*Comentario sobre la nota final*/
document.write("<p>Para aprobar la asignatura "+asign3+" con nota "+a3aprob+", necesitas un "+a3n3+" en la última nota.</div>");
/*Cierre del contenedor*/
document.write("</div>");