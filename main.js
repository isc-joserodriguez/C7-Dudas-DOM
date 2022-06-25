function suma(a, b) {
  return a + b;
}

//console.log(suma(5, 6));

/* function holaMundo(nombre) {
  console.log("Hola " + nombre, "¿cómo estás?");
} */

function holaMundo(nombre = "Default") {
  console.log(`Hola ${nombre} ¿cómo estás?`);
}

/* holaMundo("Pedro");
holaMundo("María");
holaMundo("Juan");
holaMundo("Ramón"); */
holaMundo(undefined);
