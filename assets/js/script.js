// Variables para almacenar los gastos y el total
let gastos = [];
let total = 0;

// Función para agregar un gasto
function clickBoton() {
    // Obtener los valores del nombre y valor del gasto
    const nombreGasto = document.getElementById('nombreGasto').value;
    const valorGasto = parseFloat(document.getElementById('valorGasto').value);

    // Validar que se hayan ingresado datos correctos
    if (nombreGasto === '' || isNaN(valorGasto) || valorGasto <= 0) {
        alert('Por favor, ingrese un nombre válido y un valor de gasto mayor a 0');
        return;
    }

    // Crear un objeto gasto y agregarlo al array de gastos
    const gasto = {
        nombre: nombreGasto,
        valor: valorGasto
    };

    gastos.push(gasto);

    // Limpiar los campos del formulario
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';

    // Actualizar la lista de gastos y el total
    actualizarListaGastos();
    actualizarTotal();
}

// Función para actualizar la lista de gastos en el DOM
function actualizarListaGastos() {
    const listaDeGastos = document.getElementById('listaDeGastos');
    listaDeGastos.innerHTML = ''; // Limpiar la lista

    // Recorrer el array de gastos y agregar cada uno a la lista
    gastos.forEach((gasto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${gasto.nombre} - US$ ${gasto.valor.toFixed(2)}
            <button onclick="eliminarGasto(${index})">Eliminar</button>
        `;
        listaDeGastos.appendChild(li);
    });
}

// Función para actualizar el total de gastos
function actualizarTotal() {
    total = gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
    document.getElementById('totalGastos').innerText = total.toFixed(2);
}

// Función para eliminar un gasto
function eliminarGasto(index) {
    gastos.splice(index, 1); // Eliminar el gasto del array
    actualizarListaGastos();  // Actualizar la lista de gastos
    actualizarTotal();        // Actualizar el total
}
