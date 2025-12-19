function showContent(section) {
    const tableBody = document.getElementById("table-body");
    const sectionTitle = document.getElementById("section-title");

    tableBody.innerHTML = ""; // Limpiamos el contenido anterior

    if (section === "pagos") {
        sectionTitle.textContent = "Pagos";
        const data = [
            { concepto: "Solicitud Depósito de Garantia Matricula Pregrado", numero: "180000006735", fecha: "09.12.2022", valor: "1.500.000 COP", estado: "Pagado" },
            { concepto: "Solicitud Depósito de Garantia, Matricula Pregrado", numero: "180000013348", fecha: "04.07.2023", valor: "2.000.000 COP", estado: "Pagado" },
            { concepto: "Solicitud Depósito de Garantia, Matricula Pregrado", numero: "180000014725", fecha: "18.12.2023", valor: "3.341.428 COP", estado: "Pendiente" },
            { concepto: "Solicitud Depósito de Garantia", numero: "180000016782", fecha: "26.07.2024", valor: "3.851.200 COP", estado: "Pendiente" },
            { concepto: "Matricula Pregrado Certificados Académicos Pre, Otros", numero: "202300028715", fecha: "20.05.2023", valor: "11.00000 COP", estado: "Pagado" },
            { concepto: "Ingresos Inscripción, Inscripción", numero: "220000348007", fecha: "26.11.2022", valor: "130.00000 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000025746", fecha: "23.12.2022", valor: "1.111.442 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000025745", fecha: "22.12.2022", valor: "25.150 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000025746", fecha: "23.12.2022", valor: "5.076 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000025746", fecha: "23.12.2022", valor: "30.128 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000025746", fecha: "23.12.2022", valor: "15.158 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000025746", fecha: "22.12.2022", valor: "20.166 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000025746", fecha: "22.12.2022", valor: "1.101.359 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000025746", fecha: "23.12.2022", valor: "1.091.358 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000025745", fecha: "22.12.2022", valor: "1.106.389 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000025746", fecha: "23.12.2002", valor: "1.096.351 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000028998", fecha: "05.07.2023", valor: "1.131.418 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000028996", fecha: "05.07.2003", valor: "8.486 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000028996", fecha: "05.07.2003", valor: "1.098.105 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000028996", fecha: "05.07.2003", valor: "26.908 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000028996", fecha: "05.07.2003", valor: "33.568 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000028998", fecha: "05.07.2023", valor: "25.268 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000028958", fecha: "05.07.2023", valor: "41.801 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000028998", fecha: "05.07.2023", valor: "1.106.341 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000028996", fecha: "05.07.2003", valor: "1.114.638 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000029998", fecha: "05.07.2003", valor: "1.122.998 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000030050", fecha: "21.12.2023", valor: "44.971 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000030050", fecha: "21.12.2023", valor: "1.482.284 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000630950", fecha: "21.12.2023", valor: "22.654 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000630950", fecha: "21.12.2023", valor: "1.504.601 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000030950", fecha: "21.12.2023", valor: "11.369 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000030050", fecha: "21.12.2023", valor: "1.493.401 COP", estado: "Pagado" },
            { concepto: "Intereses Corrientes (E), Matricula Pregrado", numero: "330000030050", fecha: "21.12.2023", valor: "33.854 COP", estado: "Pagado" },
            { concepto: "Fondo Patrimonial Donaciones", numero: "330000030950", fecha: "21.12.2023", valor: "1.515.886 COP", estado: "Pagado" }
        ];
        
        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.concepto}</td>
                <td>${item.numero}</td>
                <td>${item.fecha}</td>
                <td>${item.valor}</td>
                <td>${item.estado}</td>
            `;
            tableBody.appendChild(row);
        });

    } else if (section === "estudiantes") {
        sectionTitle.textContent = "Estudiantes";
        const data = [
            { nombre: "Juan Pérez", matricula: "12345", carrera: "Ingeniería", estado: "Activo" },
            { nombre: "Ana Gómez", matricula: "67890", carrera: "Medicina", estado: "Activo" },
            { nombre: "Carlos López", matricula: "11223", carrera: "Arquitectura", estado: "Inactivo" },
            // ... (otros estudiantes)
        ];

        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.nombre}</td>
                <td>${item.matricula}</td>
                <td>${item.carrera}</td>
                <td>${item.estado}</td>
            `;
            tableBody.appendChild(row);
        });

    } else if (section === "notas") {
        sectionTitle.textContent = "Notas";
        const data = [
            { estudiante: "Juan Pérez", asignatura: "Matemáticas", nota: "4.5", fecha: "15.11.2023" },
            { estudiante: "Ana Gómez", asignatura: "Historia", nota: "3.8", fecha: "18.11.2023" },
            { estudiante: "Carlos López", asignatura: "Física", nota: "4.0", fecha: "20.11.2023" },
            // ... (otras notas)
        ];

        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.estudiante}</td>
                <td>${item.asignatura}</td>
                <td>${item.nota}</td>
                <td>${item.fecha}</td>
            `;
            tableBody.appendChild(row);
        });

    } else if (section === "tareas") {
        sectionTitle.textContent = "Tareas";
        const data = [
            { tarea: "Examen Final", fechaEntrega: "20.12.2023", estudiante: "Juan Pérez", estado: "Pendiente" },
            { tarea: "Trabajo de Investigación", fechaEntrega: "25.11.2023", estudiante: "Ana Gómez", estado: "Entregado" },
            { tarea: "Presentación Proyecto", fechaEntrega: "05.12.2023", estudiante: "Carlos López", estado: "Pendiente" },
            // ... (otras tareas)
        ];

        data.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.tarea}</td>
                <td>${item.fechaEntrega}</td>
                <td>${item.estudiante}</td>
                <td>${item.estado}</td>
            `;
            tableBody.appendChild(row);
        });

    } else {
        sectionTitle.textContent = "Sección no disponible";
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="4" class="no-data">No hay datos disponibles para esta sección</td>`;
        tableBody.appendChild(row);
    }
}