$().ready(function(){

    $.validator.addMethod('nombre', function(value, element){
        return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
    },
    'Por favor ingrese solo letras'
    );

    $('#formulario').validate({
        rules:{
            nombre:{
                required: true,
                minlength: 3,
                nombre: true
            },
            edad:{
                required: true,
                number: true,
                min: 18
            },
            email:{
                required: true,
                email: true
            }
        },
        messages: {
            nombre: {
                required: "Campo requerido",
                minlength: "El nombre debe de contener minimo 3 caracteres"
            },
            edad: {
                required: "Por favor ingresa tu edad",
                number: "Por favor ingrese solo numeros",
                min: "Debe de tener mas de 18 años"
            },
            email:{
                required: "Campo requerido",
                email: "El cemail debe de estar en formato abc@gmail.com"
            }

        }
    });

});