// Seleccionamos los ID
const nombreInput = document.querySelector("#nombre");
const apellidoInput = document.querySelector("#apellido");
const emailInput = document.querySelector("#telefono");
const formulario = document.querySelector("#formulario");

// Definimos datos
const datos = {
    nombre: "",
    apellido: "",
    email: ""
}

/*
 *  FUNCION PARA LEER LOS DATOS QUE SE ESCRIBAN EN CADA UNO DE LOS CAMPOS
 */

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

// Agregamos a los input un evento llamado Input, que tendra una función leerTexto
nombreInput.addEventListener('input', leerTexto);
apellidoInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);

/*
 *  FUNCION MOSTRAR MENSAJE ERROR EN HTML 
 */

function mostrarMsjError(mensaje_error) {

    const error = document.createElement('P');
    error.textContent = mensaje_error;
    error.classList.add('error');

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 2000);
}


/*
 * FUNCION MOSTRAR MENSAJE VALIDO EN HTML
 */

function mostrarMsjValido(mensaje_valido) {
    
    const correcto = document.createElement('P');
    correcto.textContent = mensaje_valido;
    correcto.classList.add('valido');

    formulario.appendChild(correcto);

    setInterval(() => {
        correcto.remove();
    }, 2000);

}




formulario.addEventListener('submit', (evento) => {

    evento.preventDefault();

    if (nombreInput.value === '' || apellidoInput.value == '' || emailInput.value === '') {
        
        mostrarMsjError('Todos los campos son obligatorios...');
        return;
    }

    mostrarMsjValido('Mensaje enviado correctamente...');
    console.log(datos);
}) 



