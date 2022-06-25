const importacion = require("./multiplicacion");
const { resta } = require("./resta");
const operacionSuma = require("./suma");

console.log(importacion.multiplicacion(3, 5));
console.log(operacionSuma(5, 3));
console.log(resta(5, 3));
