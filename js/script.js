const turnLampOff = document.getElementById(`lamp-off`)
const turnLampOn = document.getElementById(`lamp-on`)
const btnOnOff = document.getElementById(`btn`)


// creo una funzione che permetta di accendere e spegnere la lampaddina con un bottone



btnOnOff.addEventListener('click', function() {
    if (turnLampOn.classList.contains(`hidden`)) {
        turnLampOn.classList.remove(`hidden`)
        turnLampOff.classList.add(`hidden`)
        btnOnOff.textContent = `SPEGNI`;
        } else {
            turnLampOff.classList.remove(`hidden`)
            turnLampOn.classList.add(`hidden`)
            btnOnOff.textContent = `ACCENDI`;
        }
     })

