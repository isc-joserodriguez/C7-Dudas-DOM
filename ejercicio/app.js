const bodyElement = document.getElementById("contenido");
const globoElement = document.getElementById("globo");
let destruido = false;

globoElement.style.fontSize = "40px"; 

function toggleClass(){
    globoElement.classList.toggle('Aumentar')
}

function cambio(e) {
    console.log('Cambio')
  if (!destruido) {
    let fontSize = +globoElement.style.fontSize.replace("px", "");

    if (e.code === "ArrowUp") {
      const newSize = fontSize * 1.1;
      globoElement.style.fontSize = `${newSize}px`;
      if (newSize > 120) {
        globoElement.innerHTML = "💥";
        destruido = true;
      }
    } else if (e.code === "ArrowDown") {
      if (fontSize > 15) {
        globoElement.style.fontSize = `${fontSize * 0.9}px`;
      }
    }
  }
}

//bodyElement.addEventListener("keydown", cambio);
