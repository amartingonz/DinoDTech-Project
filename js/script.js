

// $('#boton-menu').click(function(){
//     $('nav ul li').css('display','block')
// })

// $('#boton-menu').click(function(){
//     $('nav ul li').hide(function(){
//         $('nav ul li').css('display','block')
//     })
// })
var estado = true;
$('#boton-menu').click(function(){
    if(estado){
        $('#menu ul li').show(function(){
            $('#menu ul li').css('display','block');
            estado = false;
    })
    }else{
        $('#menu ul li').hide(function(){
            $('#menu ul li').css('display', "");
            estado = true;
    })
    }
    
    
})
