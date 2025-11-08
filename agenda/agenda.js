let lista = document.getElementById("lista");

// --- Nueva estructura: Delegación de Eventos ---
// Asignar un único listener al <ul> padre
lista.addEventListener('click', manejarEventosLista);

document.addEventListener('DOMContentLoaded', cargarTareas);

function manejarEventosLista(event) {
    const target = event.target;
    
    // Si el clic fue en el <span> (texto de la tarea)
    if (target.tagName === 'SPAN') {
        marcarComoCompletada(target);
    } 
    // Si el clic fue en el icono de un botón (o el botón mismo)
    else if (target.closest('.edit-btn')) {
        const boton = target.closest('.edit-btn');
        habilitarEdicion(boton);
    } 
    else if (target.closest('.delete-btn')) {
        const boton = target.closest('.delete-btn');
        eliminarTarea(boton);
    }
}

// --- Persistencia de Datos (Cargar) ---
function cargarTareas() {
    const tareasGuardadas = localStorage.getItem('listaTareasHTML');
    if (tareasGuardadas) {
        // Al usar Delegación de Eventos, solo restauramos el HTML.
        // El único listener en 'lista' se encarga automáticamente de los eventos de los elementos cargados.
        lista.innerHTML = tareasGuardadas;
    }
}

// --- Persistencia de Datos (Guardar) ---
function guardarTareas() {
    localStorage.setItem('listaTareasHTML', lista.innerHTML);
}

function agregarTarea() {
    let tareaTexto = document.getElementById("tarea").value.trim();
    if (tareaTexto === "") return;

    let li = document.createElement("li");
    
    // Estructura de la tarea con el span y los botones (Se mantienen los nombres de las clases para CSS)
    li.innerHTML = `
        <span class="flex-grow text-left p-1 cursor-pointer">${tareaTexto}</span>
        <div class="flex space-x-2">
            <button class="edit-btn p-2 rounded-md transition duration-200"><i class="fa-solid fa-pencil"></i></button>
            <button class="delete-btn p-2 rounded-md transition duration-200"><i class="fa-solid fa-trash"></i></button>
        </div>
    `;

    // Aplicar clases de Tailwind a <li> para su estilo
    li.className = 'bg-white my-2 p-3 rounded-lg shadow-md flex justify-between items-center';

    lista.appendChild(li);
    document.getElementById("tarea").value = "";
    
    guardarTareas(); 
}

// --- Marcar como Completada ---
function marcarComoCompletada(span) {
    // Accede al <li> padre del <span> y alterna la clase 'completada'
    span.parentElement.classList.toggle('completada');
    
    guardarTareas();
}

function eliminarTarea(boton) {
    let li = boton.closest('li'); // Usa closest para mayor robustez
    lista.removeChild(li);
    
    guardarTareas();
}

function habilitarEdicion(boton) {
    let li = boton.closest('li'); // Usa closest para mayor robustez
    let span = li.querySelector('span'); 
    
    let nuevoTexto = prompt("Editar tarea:", span.textContent);
    
    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        span.textContent = nuevoTexto.trim();
        
        guardarTareas();
    } 
}