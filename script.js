function createTask() 
{
    
// Reconocer elementos

const mypage = document.getElementById('mypage')
const myinput = document.getElementById('myinput')
const mybutton = document.getElementById('mybutton')

// Crear elementos

const mytask = document.createElement('div')
const mytaskText = document.createElement('p')
const mytaskDelete = document.createElement('button')

// Insertar elementos en el documento

mypage.appendChild(mytask)
mytask.appendChild(mytaskText)
mytask.appendChild(mytaskDelete)

// Valores de los elementos

mytask.id = 'mytask'
mytaskText.id = 'mytaskText'
mytaskDelete.id = 'mytaskDelete'

mytaskText.textContent = myinput.value
myinput.value = ''
mytaskDelete.innerHTML = '<i class="fas fa-check"></i>';


// Eliminar tarea

mytaskDelete.onclick = () => {

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: 0.5, y: 0.5 }
    });

    mytask.remove()
};

}

// Crear tarea el boton

mybutton.onclick = () => {
    if (myinput.value != '') {createTask()}
};
  

// Crear tarea al presionar la tecla enter

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && myinput.value != '') {
      createTask()
    }
  });

  // Fondo multicolor animado dinámicamente con JavaScript
function cambiarFondoDinamico() {
    const color1 = generarColor();
    const color2 = generarColor();
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
    document.body.style.backgroundSize = "400% 400%";
  }
  
  function generarColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
  }
  
  // Cambia el fondo cada 3 segundos
  setInterval(cambiarFondoDinamico, 100);
  