let dato = null;

const saludo = () => console.log('Hola')

const mensaje = (mensaje) => {
    console.log(
        `Son las: ${new Date().getHours()} horas con ${new Date().getMinutes()} minutos. ${mensaje}`
    )
    dato = 'Dato importante';
}

const despedida = ()=> console.log('Tu dato es:', dato);

saludo();
setTimeout(()=>mensaje('primero'),0000);
setTimeout(()=>mensaje('segundo'),mensaje,0);
despedida();


const promesa = new Promise((resolve, reject)=>{
    
    reject('BAD');
})

promesa.then(valor => console.log(valor)).catch(valor=>console.log(valor));