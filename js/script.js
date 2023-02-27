
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