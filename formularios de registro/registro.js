function validarFormulario() {
    var nameInput = document.getElementById("name");
    var descriptionInput = document.getElementById("description");
    var priceInput = document.getElementById("price");
    var stockInput = document.getElementById("stock");
  
    var nameError = document.getElementById("name-error");
    var descriptionError = document.getElementById("description-error");
    var priceError = document.getElementById("price-error");
    var stockError = document.getElementById("stock-error");
  
    var isValid = true;
  
    if (!nameInput.value.trim()) {
      nameError.textContent = "El nombre es requerido.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }
  
    if (!descriptionInput.value.trim()) {
      descriptionError.textContent = "La descripción es requerida.";
      isValid = false;
    } else {
      descriptionError.textContent = "";
    }
  
    if (priceInput.value.trim() === "" || isNaN(priceInput.value)) {
      priceError.textContent = "El precio debe ser un número.";
      isValid = false;
    } else if (parseFloat(priceInput.value) < 0) {
      priceError.textContent = "El precio debe ser mayor o igual a 0.";
      isValid = false;
    } else {
      priceError.textContent = "";
    }
  
    if (stockInput.value.trim() === "" || isNaN(stockInput.value)) {
      stockError.textContent = "El stock debe ser un número.";
      isValid = false;
    } else if (parseInt(stockInput.value) < 0) {
      stockError.textContent = "El stock debe ser mayor o igual a 0.";
      isValid = false;
    } else {
      stockError.textContent = "";
    }
  
    if (isValid) {
      alert("El formulario es válido.");
      document.getElementById("product-form").reset();
    }
  }
  