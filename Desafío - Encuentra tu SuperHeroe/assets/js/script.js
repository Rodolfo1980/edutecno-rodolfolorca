function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento;
}
jQuery('#num__super').keyup(function () {
  this.value = this.value.replace(/[^0-9\.]/g, '');
});
$(document).ready(function () {
  $("#boton__enviar").click(function () {
    var num = $("#num__super").val();
    if (num > 731)
      alert('El número debe ser entre 1 y 731.  Ingrese un número válido');
    else {
      var res = '';
      $.ajax({
        url: 'https://www.superheroapi.com/api.php/10226299794298182/' + num + '/',
        success: function (respuesta) {
          console.log(respuesta);
          $('#card__name').text(respuesta.name);
          $('#card__imagen').replaceWith('<img id="card__imagen" class="card-img-top" src="' + respuesta.image['url'] + '" heigth="100px" alt="Card image cap">');
          $('#card__conexion').text('Conexión: ' + respuesta.connections['group-affiliation']);
          $('#card__alianzas').text('Alianzas: ' + respuesta.connections['relatives']);
          $('#card__ocupacion').text('Ocupación: ' + respuesta.work['occupation']);
          $('#card__aparicion').text('Aparición: ' + respuesta.biography['first-appearance']);
          $('#card__altura').text('Altura: ' + respuesta.appearance['height']);
          $('#card__peso').text('Peso: ' + respuesta.appearance['weight']);
          var dataPoints2 = [];
          var i = 0;
          $.each(respuesta.powerstats, (index, value) => {
            console.log('poderes ' + index + '-' + value);
            dataPoints2.push({
              y: value,
              label: index
            });
            i++;
          });
          console.log(dataPoints2);
          var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title: {
              text: "Estadísticas de Poder para "+(respuesta.name)
            },
            data: [{
              type: "pie",
              startAngle: 240,
              yValueFormatString: "##0.00\"%\"",
              indexLabel: "{label} {y}",
              dataPoints: dataPoints2
            }]
          });
          chart.render();
            moverseA("card__imagen"); 
        },
        error: function () {
          console.log("No se ha podido obtener la información");
        }
      });
    }
  });
});
