$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
    })

    $('button').click(function(){
        $.notify({
            message: 'Dados enviados' 
        },{
            type: 'success'
        });
    })

    $('#telefone').mask('(00)00000-0000');
})