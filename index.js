let tareas = document.getElementById("tarea");
let btn = document.getElementById("agregar");
let listaTareas = document.getElementById("lista");
let cantidad = document.getElementById("cantidad");

let total = 0;

btn.onclick = function() {
	if (tareas.value == ""){
		return;
	}
	
	let elemento = tareas.value;
	let li = document.createElement("li");
	li.textContent = elemento;
	listaTareas.appendChild(li);
	total++;
	cantidad.innerHTML = total;

	// BOTON DE ELIMINAR TAREA  //
	let btnEliminar = document.createElement("span");
	btnEliminar.textContent = "\u00d7";
	li.appendChild(btnEliminar);

	btnEliminar.onclick = function() {
		li.remove();
		total--;
		cantidad.innerHTML = total;
	}
	// RESETEAR INPUT //
	tareas.value = "";
}