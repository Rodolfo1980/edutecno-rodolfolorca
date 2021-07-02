$(document).ready(function () {
    $("h2").dblclick(function () {
        $(this).css({
            color:'red',
        })
    })
    $("#enviarCorreo").click(function (){
        alert("El correo fue enviado correctamente...")
    })
    $(".card-title").click(function () {
        $(this).toggle()
    })
    $('[data-toggle="tooltip"]').tooltip()
    $('.carousel').carousel({
        interval: false
    })
})

