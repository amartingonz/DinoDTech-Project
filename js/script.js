

// $('#boton-menu').click(function(){
//     $('nav ul li').css('display','block')
// })

// $('#boton-menu').click(function(){
//     $('nav ul li').hide(function(){
//         $('nav ul li').css('display','block')
//     })
// })
// var estado = true;
// $('#boton-menu').click(function(){
//     if(estado){
//         $('#menu ul li').show(function(){
//             $('#menu ul li').css('display','block');
//             estado = false;
//     })
//     }else{
//         $('#menu ul li').hide(function(){
//             $('#menu ul li').css('display', "");
//             estado = true;
//     })
//     }
    
    
// })

var checkbox = document.getElementById('check');
var h1 = document.getElementById('titulo');
checkbox.addEventListener("change", validaCheckbox, false);
// Funcion para que si el checkbox esta activado del menu se quite el H1
function validaCheckbox()
{
  var checked = checkbox.checked;
  if(checked){
    h1.style.display = "none";
  }else{
    h1.style.display = "";
  }
}