const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    const input = document.querySelector('#input');
    const btn = document.querySelector('#btn');

    // Lista de códigos válidos
      const validCodes = ['706090','906090','106090','206090','306090',]; 

    // Verificamos si el código ingresado está en la lista de códigos válidos
    if (!validCodes.includes(input.value)) {
        e.preventDefault();  // Prevenimos el envío del formulario
        input.style.borderColor = 'red';  // Resaltamos el campo de entrada en rojo
    }
});
