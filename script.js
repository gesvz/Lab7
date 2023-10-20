let personajes = [];
let fetchpromise = fetch("https://api.imgflip.com/get_memes");
//fetch("https://rickandmortyapi.com/api/character");

fetchpromise.then(response => {
    if(response.ok){
        console.log("response successful");
    }
})

function obtenerDatos() {
  fetchpromise.then(response =>{
      response.json()
      .then ( 
        jsondata => {
        arreglo = jsondata.data.memes;
        mapearData(arreglo);
    })
  })
}

function mapearData(arreglo) {
    let contenedor = document.getElementById("contenedor");
    arreglo.forEach(item => {
        contenedor.innerHTML += mapearPlantilla(item);
    })
}

function mapearPlantilla(item) {
    return `<tr>
    <td><img src="${item.url}" alt=""
    style="width: 100px"></td>
            <td>${item.id}</td>
            <td>${item.name}</td>
            </tr>`;
}

function limpiarContenedor() {
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
}

/*****/

var campo=document.getElementById('p1');
campo.style.color="#00ff00";

var e5 = document.getElementById("e5");
e5.style.display = 'none';

function funcionejemplo1 (){
    var p1 = document.getElementById("p1");
    p1.style.color="#FF0000";
}

function funcionejemplo2 (){
    var p2 = document.getElementById("p2");
    p2.innerHTML="texto añadido";
}

function funcionejemplo3 (){
    var input3 = document.getElementById("input3");
    var p3 = document.getElementById("p3");
    p3.innerHTML=p3.innerHTML+' '+input3.value;
}

function funcionejemplo4() {
  var select = document.getElementById("e4");
  var opciones = select.getElementsByTagName("option");
  var atributoAEliminar = "css";

  for (var i = 0; i < opciones.length; i++) {
    var opcion = opciones[i];
    if (opcion.value === atributoAEliminar) {
      opcion.remove();
    }
  }
}

function displaybutton5() {
  var e5 = document.getElementById("e5");
  e5.style.display = 'block';
}

function funcionejemplo5() {
  var videourl = 'https://www.youtube.com/watch?v=-jlYeQ3hOhY';
  window.location.href = videourl;
}

function funcionejemplo6() {
  alert('ALERTA! '+ input3.value);
}

function funcionejemplo7() {
  console.log("nombre a la consola: "+input3.value);
}

function funcionejemplo8() {
  var p8 = document.getElementById('p8');
  var checkbox = document.getElementById('checkbox');
  
  if(checkbox.checked){
    p8.textContent = 'checkbox marcado';
  }
  else {
    p8.textContent = 'checkbox no marcado';
  }
}

function funcionejemplo9() {      
  var p9 = document.getElementById("p9");
  p9.textContent = '';
  var radio = document.getElementById('radio');

  if(radio.checked){
    p9.textContent = 'Radiobutton marcado';
  }
  else {
    p9.textContent = 'Radiobutton no marcado';
  }
}

function desmarcarRadio() {
  let radio = document.getElementById('radio');
  radio.checked = false;
}


function funcionejemplo10() {
  var input10 = document.getElementById("input10");
  var p10 = document.getElementById("p10");
  var inputValue = input10.value;

  if ( /\d/.test(inputValue) ){
    p10.textContent = "Solo se permiten letras";
  }
  else if (inputValue === ""){
    p10.textContent = 'input vacío';
  }
  else {
    p10.textContent = "tudo bem!"
  }
}
