// Datos de eventos para diciembre de 2025
const eventos = [
    { fecha: "lunes, 1 de diciembre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "lunes, 1 de diciembre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "lunes, 1 de diciembre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "martes, 2 de diciembre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 3 de diciembre de 2025", hora: "08:00", duracion: "01:59hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 3 de diciembre de 2025", hora: "10:00", duracion: "01:59hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "miércoles, 3 de diciembre de 2025", hora: "14:00", duracion: "01:59hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "jueves, 4 de diciembre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 5 de diciembre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 5 de diciembre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "viernes, 5 de diciembre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "lunes, 8 de diciembre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "lunes, 8 de diciembre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "lunes, 8 de diciembre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "martes, 9 de diciembre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 10 de diciembre de 2025", hora: "08:00", duracion: "01:59hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 10 de diciembre de 2025", hora: "10:00", duracion: "01:59hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "miércoles, 10 de diciembre de 2025", hora: "14:00", duracion: "01:59hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "jueves, 11 de diciembre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 12 de diciembre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 12 de diciembre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "viernes, 12 de diciembre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "lunes, 15 de diciembre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "lunes, 15 de diciembre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "lunes, 15 de diciembre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "martes, 16 de diciembre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 17 de diciembre de 2025", hora: "08:00", duracion: "01:59hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "miércoles, 17 de diciembre de 2025", hora: "10:00", duracion: "01:59hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "miércoles, 17 de diciembre de 2025", hora: "14:00", duracion: "01:59hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" },
    { fecha: "jueves, 18 de diciembre de 2025", hora: "12:00", duracion: "01:29hr", materia: "DUMI SEMIOTICA Y SEMIOLO ORGANI S2G5", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 19 de diciembre de 2025", hora: "08:00", duracion: "01:29hr", materia: "DUMI UPPER INTERMED BUS ENGL S2G3", ubicacion: "BogotáAULA-N506" },
    { fecha: "viernes, 19 de diciembre de 2025", hora: "10:00", duracion: "01:29hr", materia: "DUMI LENGUA MODERNA FRANCES II S2G2", ubicacion: "BogotáAULA-L802" },
    { fecha: "viernes, 19 de diciembre de 2025", hora: "14:00", duracion: "01:29hr", materia: "DUMI LENGUA MODER PORTUGUES II S2G3", ubicacion: "BogotáAULA-N507" }
];

// Generar calendario para diciembre de 2025 (comienza en lunes)
function generarCalendario() {
    const calendario = document.getElementById('calendario');
    
    // Diciembre de 2025 comienza un lunes (1 = lunes)
    const primerDia = 1;

    // Añadir los días vacíos antes del primer día del mes
    for (let i = 0; i < primerDia; i++) {
        const diaVacio = document.createElement('div');
        calendario.appendChild(diaVacio);
    }

    // Añadir los días del mes de diciembre (del 1 al 31)
    for (let i = 1; i <= 31; i++) {
        const dia = document.createElement('div');
        dia.textContent = i;
        calendario.appendChild(dia);
    }
}

// Generar el horario detallado
function generarHorarioDetallado() {
    const detalleHorario = document.getElementById('detalle-horario');
    
    // Agrupar eventos por fecha
    const eventosPorFecha = eventos.reduce((acumulador, evento) => {
        if (!acumulador[evento.fecha]) {
            acumulador[evento.fecha] = [];
        }
        acumulador[evento.fecha].push(evento);
        return acumulador;
    }, {});
    
    // Crear elementos HTML para cada día con sus eventos
    for (const fecha in eventosPorFecha) {
        const diaDiv = document.createElement('div');
        diaDiv.classList.add('dia');
        
        const fechaTitulo = document.createElement('h5');
        fechaTitulo.innerText = fecha;
        diaDiv.appendChild(fechaTitulo);
        
        eventosPorFecha[fecha].forEach(evento => {
            const eventoDiv = document.createElement('div');
            eventoDiv.classList.add('evento');
            eventoDiv.innerHTML = ` 
                <span><strong>Hora:</strong> ${evento.hora}</span>
                <span><strong>Duración:</strong> ${evento.duracion}</span>
                <span><strong>Materia:</strong> ${evento.materia}</span>
                <span><strong>Ubicación:</strong> ${evento.ubicacion}</span>
            `;
            diaDiv.appendChild(eventoDiv);
        });
        
        detalleHorario.appendChild(diaDiv);
    }
}

// Inicializar calendario y horario detallado
document.addEventListener('DOMContentLoaded', () => {
    generarCalendario();
    generarHorarioDetallado();
});