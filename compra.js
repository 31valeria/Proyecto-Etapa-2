function validarFormulario() {
  // Obtener los valores de los campos de entrada
  var nombre = document.getElementById("nombre").value;
  var direccion = document.getElementById("direccion").value;
  var telefono = document.getElementById("telefono").value;
  var email = document.getElementById("email").value;
  var producto = document.getElementById("producto").value;
  var cantidad = document.getElementById("cantidad").value;

  // Validar que los campos requeridos estén llenos
  if (nombre == "" || direccion == "" || telefono == "" || email == "" || producto == "" || cantidad == "") {
    alert("Todos los campos son importantes.");
    return false;
  }

  // Validar el formato del correo electrónico
  var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regexEmail.test(email)) {
    alert("Por favor, introduce un correo electrónico válido con @.");
    return false;
  }

  // Validar la cantidad
  if (cantidad < 1 || cantidad > 10) {
    alert("Por favor, introduce una cantidad entre 1 y 10.");
    return false;
  }

  // Si todos los campos requeridos están llenos y el correo electrónico y la cantidad son válidos, el formulario es válido
  return true;
}
