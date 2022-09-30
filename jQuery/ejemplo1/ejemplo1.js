$(document).ready(function(){

    $("#ej1").click(function(){
        $("#div1").hide(1000);
    })

    $("#ej2").click(function(){
        $("#div1").show(1000);
    })

    $("#ej3").click(function(){
        $("#div1").fadeOut(1000);
    })

    $("#ej4").click(function(){
        $("#div1").fadeIn(1000);
    })

})
