// let ciudad="buenos aires";

function mostrarData(data){
    if (data.name.length > 0){
        document.querySelector(".respuesta").style="display:visible";
        document.querySelector(".nombre").textContent = data.name;
        document.querySelector(".temperatura").textContent = Math.round(data.main.temp) + "°C";
        document.querySelector(".icono").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        document.querySelector(".descripcion").textContent = data.weather[0].description;  
        // CON CORRRRCHETEEES CAAAAPOOOO
    }
}

function cargarCiudad(){
    document.querySelector(".respuesta").style="display:none";
    let ciudad=document.querySelector(".ciudad").value;
    $.getJSON(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=dcec7df661b1e6b0edab51d796b7339c&units=metric&lang=es`,mostrarData);
}

let enviar = document.querySelector(".enviar");
enviar.addEventListener("click",cargarCiudad)


// cargarCiudad(ciudad);