let INPUT_CUENTA = document.querySelector('.entrada-cuenta')
let INPUT_PERSONAS = document.querySelector('.entrada-personas')
let botonesPorciento = document.querySelectorAll('.btn-porciento')
let alertError = document.querySelector('.alert-error')
let customModal = document.querySelector('.contenedor-modal-custom')
let customInput = document.querySelector('.entrada-custom')

const TOTAL_TIPS = document.querySelector('.total-tips')
const TOTAL_PERSONA = document.querySelector('.total-persona')
let botonReset = document.querySelector('.btn-reset');
let botonCustomOpen = document.querySelector('.btn-custom');
let botonCloseCustom = document.querySelector('.btn-custom-aceptar');

// get percentage 
let porcentage = [5,10,15,25,50]
botonesPorciento.forEach((porciento,posicion) =>{
    porciento.addEventListener('click',()=>{
        let porcientoFinal = porcentage[posicion];
        brain(porcientoFinal)
    })
})

// return tip amount and total
function brain (entradaOne){
     // convert it to number
    let cuenta = Number(INPUT_CUENTA.value) ;
    let personas = Number(INPUT_PERSONAS.value)
    // total / person
     let resultTotalPerson = cuenta / personas;
    // tip / person
    let tipTotalPerson = entradaOne / 100 * cuenta / personas;
    if(personas == 0 || entradaOne == 0){
        alertError.style.display = 'block';
        INPUT_PERSONAS.classList.add('error-input')
    }else{
    // total / person 3 digits decimal
        TOTAL_PERSONA.innerHTML = `$${resultTotalPerson.toFixed(3)}` ;
        TOTAL_TIPS.innerHTML = `$${tipTotalPerson.toFixed(3)}`
        alertError.style.display = 'none';
        INPUT_PERSONAS.classList.remove('error-input')
    }
}



// reset amount
botonReset.addEventListener('click',()=>{
    TOTAL_TIPS.innerHTML = '$0'
    TOTAL_PERSONA.innerHTML = '$0';
    INPUT_CUENTA.value = '';
    INPUT_PERSONAS.value = ''
    customInput.value = ''
})

// custom tip % button 
    botonCustomOpen.addEventListener('click',()=>{
        if(INPUT_CUENTA.value == '' || INPUT_PERSONAS.value == ''){
        INPUT_PERSONAS.classList.add('error-input')
        alertError.style.display = 'block'
        }else{
            customModal.classList.add('open-modal');
        INPUT_PERSONAS.classList.remove('error-input')
        alertError.style.display = 'none'
        }
    })
    botonCloseCustom.addEventListener('click',()=>{
      
        brain(customInput.value)
        // close modal
     customModal.classList.remove('open-modal')
    })


    /*

      // convert it to number
        let cuenta = Number(INPUT_CUENTA.value) ;
        let personas = Number(INPUT_PERSONAS.value)
        // total / person
        let resultTotalPerson = cuenta / personas;
        // tip / person
        let tipTotalPerson = porcientoFinal / 100 * cuenta / personas;
        if(personas == 0){
            alertError.style.display = 'block'
        }else{
        // total / person 3 digits decimal
        TOTAL_PERSONA.innerHTML = `$${resultTotalPerson.toFixed(3)}` ;
        TOTAL_TIPS.innerHTML = `$${tipTotalPerson.toFixed(3)}`
        alertError.style.display = 'none'
        }





          let tipToNum = Number(customInput.value);
          let cuentaPersona = Number(INPUT_CUENTA.value) ;
          let cantidadPersona = Number(INPUT_PERSONAS.value)
        let resultado = tipToNum / 100 *  cuentaPersona / cantidadPersona
        if(INPUT_PERSONAS.value == ''){
            console.log(INPUT_PERSONAS.value)
            alertError.style.display = 'block';
        }else{
        // total / person 3 digits decimal
        TOTAL_TIPS.innerHTML = `$${resultado.toFixed(3)}`
        alertError.style.display = 'none'
        }

    */