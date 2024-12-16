
// const formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", function(event) {
//     event.preventDefault();

//     const lugar = document.getElementById("lugar");
//     const valorLugar = lugar.value;
//     console.log(valorLugar);    

//     });

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     if (!res.ok) {
//         throw new Error("Erorr" + res.status);
//     }
//     return res.json();
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((res)=>{
//     console.log("Error de conexion")
// })




// async function obtenerArreglo() {
//     const arreglo = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await arreglo.json();
//     console.log(data)
// }
// obtenerArreglo()


// const nuevaPromesa = new Promise((resolve, reject) => {
//     const valor = false
//     if (valor) {
//         resolve("Exitos")
//     }else{
//         reject("Erorr")
//     }
// })
// nuevaPromesa.then((resolve)=>{
//     console.log(resolve)
// }).catch((reject)=>{
//     console.log(reject)
// })



// // forma 1
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response)=>{
//     if (!response.ok) {
//         throw new Error("Error" + response.status);
//     }
//     return response.json()
// })
// .then((response)=>{
//     console.log("resultado: ", response)
// })
// .catch(()=>{
//     console.log("Error")
// })

// // forma 2
// async function obtenerdatos(params) {
//     const arreglo = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await arreglo.json();
//     console.log(data);
// }  
// try {
//     obtenerdatos();
// } catch (error) {
//     console.log("Error"+ error.message);
// }

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario y la recarga de la página
});

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", async function () {

    const monto = document.getElementById("cant").value //Monto De compra
    const valorSelectMia = document.getElementById("divisaMia").value; //Valor del Select
    const valorSelect = document.getElementById("divisa").value; //Valor del Select

    async function obtenerDivisaMia() { //obtener valor de divisa Mia
        try {
            const respuestaMia = await fetch(`https://dolarapi.com/v1/${valorSelectMia}`);
            const dataMia = await respuestaMia.json();
            return dataMia;
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            return null;
        }
    }
    async function obtenerDivisa() { //obtener valor de divisa
        try {
            const respuesta = await fetch(`https://dolarapi.com/v1/${valorSelect}`);
            const data = await respuesta.json();
            return data;
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            return null;
        }
    }

    
    const datosMia = await obtenerDivisaMia();
    const datos = await obtenerDivisa();
    // console.log(datosMia)
    if (datosMia && datos) {
        let montoArg=monto*datosMia.venta;
        console.log(montoArg)

        if (datos) {
            // console.log("Valor de Compra:", datos.compra);
            // console.log("Valor de Venta:", datos.venta);
            console.log(montoArg)
            let montoE= montoArg/datos.venta;
            console.log(montoE)
            // const total = monto/datos.venta
            // console.log(total.toFixed(1))
            const totalDivid = document.getElementById("totalDivid")
            totalDivid.innerText=`${montoE.toFixed(1)}`
        } else {
            console.log("No se pudieron obtener los datos.");
        }
    } else {
        console.log("No se pudieron obtener los datos.");
    }

console.log("hola")

    // Llamamos a la función y esperamos los datos
    



    const moneda1=document.getElementById("moneda1")
    moneda1.innerText=`${datosMia.nombre}`
    
    const moneda2=document.getElementById("moneda2")
    moneda2.innerText=`${datos.nombre}`
    
    // const valor1=document.getElementById("valor1")
    // const cantvalor1= datosMia.venta/datos.venta
    // valor1.innerText=`${cantvalor1.toFixed(1)}`
    
    const valor2=document.getElementById("valor2")
    const cantvalor2= (datosMia.venta/datos.venta)*10
    valor2.innerText=`${cantvalor2.toFixed(1)}`
    
    const valor4=document.getElementById("valor4")
    const cantvalor4= (datosMia.venta/datos.venta)*100
    valor4.innerText=`${cantvalor4.toFixed(1)}`
    
    const valor6=document.getElementById("valor6")
    const cantvalor6= (datosMia.venta/datos.venta)*1000
    valor6.innerText=`${cantvalor6.toFixed(1)}`
    
});


const logo = document.getElementById("logo");
logo.addEventListener("click", function () {
    const aside = document.querySelector("aside");
    aside.classList.add("show"); // Agrega la clase 'show' para hacer visible el aside con animación
    console.log("aside mostrado");
});

const logocerrar = document.getElementById("logo-cerrar");
logocerrar.addEventListener("click", function () {
    const aside = document.querySelector("aside");
    aside.classList.remove("show"); // Remueve la clase 'show' para ocultar el aside
    console.log("aside ocultado");
});
