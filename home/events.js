// Lista de eventos de ejemplo
const eventsData = {
    "2024-10-28": [
        { time: "07:00", title: "Intermediate Business English S2G6", location: "AULA-N506" },
        { time: "11:00", title: "Lengua Moderna Portugués I S2G2", location: "AULA-N608" }
    ],
    "2024-10-29": [
        { time: "09:00", title: "Matemáticas Avanzadas", location: "AULA-N102" },
        { time: "13:00", title: "Historia del Arte", location: "AULA-N203" }
    ]
};

// Configuración de Flatpickr
flatpickr("#datepicker", {
    inline: true,
    dateFormat: "Y-m-d",
    onChange: function(selectedDates, dateStr) {
        updateEvents(dateStr);
    }
});

// Función para actualizar eventos según la fecha seleccionada
function updateEvents(date) {
    const eventsContainer = document.querySelector(".events");
    eventsContainer.innerHTML = ""; // Limpia eventos previos

    if (eventsData[date]) {
        eventsData[date].forEach(event => {
            const eventItem = document.createElement("div");
            eventItem.classList.add("event-item");
            eventItem.innerHTML = `<strong>${event.time}</strong> - ${event.title} <br> <em>${event.location}</em>`;
            eventsContainer.appendChild(eventItem);
        });
    } else {
        eventsContainer.innerHTML = "<p>No hay eventos para esta fecha.</p>";
    }
}