const btn1 = document.querySelector('.step button');
const step1 = document.querySelector('.step');

btn1.addEventListener('click', () => {
    const step2 = document.querySelector('.step2');
    step1.style.display = 'none';
    step2.style.display = 'block';
});

const btn2 = document.querySelector('.step2 button');
btn2.addEventListener('click', () => {
    const programa = document.querySelector('#programa');
    const anio = document.querySelector('#anio');
    const periodo = document.querySelector('#periodo');

    // Validación de los datos
    if (programa.value === '' || anio.value === '' || periodo.value === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    const step2 = document.querySelector('.step2');
    const step3 = document.querySelector('.step3');
    step2.style.display = 'none';
    step3.style.display = 'block';
});

// Paso 3
const btn3 = document.querySelector('.step3 button');
btn3.addEventListener('click', () => {
    // Validación de los radios de certificación
    const certificacion = document.querySelector('input[name="certificacion"]:checked');
    if (!certificacion) {
        alert('Por favor, seleccione un tipo de certificación.');
        return;
    }

    const step3 = document.querySelector('.step3');
    const step4 = document.querySelector('.step4'); // Suponiendo que tienes un paso 4
    step3.style.display = 'none';
    step4.style.display = 'block';
});
// Paso 4: Validación y continuar
const btn4 = document.querySelector('.step4 button');
btn4.addEventListener('click', () => {
    const certificationSelect = document.querySelector('#certificationSelect');
    const certification = certificationSelect.value;

    // Validación de la selección
    if (certification === '') {
        alert('Por favor, seleccione un tipo de certificación.');
        return;
    }

    // Mostrar el mensaje de confirmación
    const step4 = document.querySelector('.step4');
    const confirmationMessage = document.querySelector('#confirmationMessage');
    step4.style.display = 'none';
    confirmationMessage.style.display = 'block';
});