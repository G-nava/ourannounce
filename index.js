const locationValue = window.location.search;
    // console.log(locationValue);
    
    //separar datos

    const urlParams = new URLSearchParams(locationValue);

    const nombreInvitado = urlParams.get('n'); //detecta si hay nombre
    const primerApellido = urlParams.get('p'); // detecta si hay primer apellido
    const segundApellido = urlParams.get('s'); // detecta si hay segundo apellido
    const cantidad = urlParams.get('c'); // detecta si hay cantidad o cupos
    const singlePerson = 1;
    // console.log(cantidad);

    if (primerApellido == null && segundApellido == null) {
        document.getElementById('value').style.display = 'none';
    }else{

        if (nombreInvitado != null || nombreInvitado != undefined) {
            document.getElementById('value').innerHTML = `${nombreInvitado} ${primerApellido} ${segundApellido}`
            // return
        }else{
            document.getElementById('value').innerHTML = `Familia: ${primerApellido} ${segundApellido}`
        }

    }

    // nombreInvitado == null && primerApellido == null && segundApellido == null ?
        // document.getElementById('value').style.display = 'none' :



/*Intersection observer */
const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
    // console.log(entries);
    entries.forEach(entry =>{
        if (entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 1.5s ${entry.target.dataset.delay} forwards ease-out`;
        }
        // else{
        //     entry.target.style.animation = `none`;
        // }
    })
});

images.forEach(image =>{
    observer.observe(image)
})


/*EXCEL DB */

// const SHEET_ID = "1tRxbmhamPZzTM3vhzsFfcpclvcxygmToIt5mfKahnKE";
// const SHEET_TITTLE = "data_guests";

// const SHEET_RANGE = ""; // for concatenate :/
// const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}`

// https://docs.google.com/spreadsheets/d/1tRxbmhamPZzTM3vhzsFfcpclvcxygmToIt5mfKahnKE/edit?usp=sharing

// https://sheet.best/api/sheets/3e1004e4-657b-49d3-8a85-a9e84f1f220b

if (nombreInvitado != null || nombreInvitado != undefined && cantidad == null || cantidad == undefined) {
    const singleName = document.querySelector('.sinlePerson');
    singleName.innerHTML = '';

    const singleP = ()=>{

        const singleNamePerson = document.createElement('h5');
        singleNamePerson.className = 'onliNameGuest'
        singleNamePerson.innerHTML = `${nombreInvitado} ${primerApellido} ${segundApellido}`
        
        const justConfirm = document.createElement('a');
        justConfirm.type = 'submit'
        justConfirm.className = 'btn-single_person'
        justConfirm.innerHTML = 'confirmar'
        
        singleName.appendChild(singleNamePerson);
        singleName.appendChild(justConfirm);
    }

    singleP();



    // poner en confirmar asistencia solamente el nombre de la persona
    // acompañada del botón enviar
    
}else{
    // generar los check box deacuerdo al parametro ingresado por URL
    // seguido del código de abajo
    const insertcheck = document.getElementById('group-choice');
    let = html = ''
    for (let i = 0; i < cantidad; i++) {
        const quantityCheck = ()=>{
            const inputCheck = document.createElement('input');
            // input class="rad" type="radio" name="numPerson" id="select" value="1"
            
            inputCheck.className ="rad";
            inputCheck.type ='radio';
            inputCheck.name ='numPerson';
            inputCheck.id ='select';
            inputCheck.value =`${i+1}`;
            
            const inputLabelCheck = document.createElement('label');
            inputLabelCheck.className = 'label_check';
            // label class="label_check"

            inputLabelCheck.appendChild(inputCheck);
            const numeroCheckBox = document.createTextNode(`${i+1}`)
            inputLabelCheck.appendChild(numeroCheckBox)
            // insertcheck.appendChild(intupLabel);

            //html = inputLabelChecks

            //console.log(html);
            // inputCheck.appendChild(inputLabelCheck);
            // console.log(inputLabelCheck);
            // inputCheck.append(inputLabelCheck)
            insertcheck.appendChild(inputLabelCheck)
        }
        quantityCheck();
        
    }

    // numberSelector.classList.add('hide-checkMark');  // remover el css que oculta y poner el menu que está oculto
    // listSelector.classList.remove('lst-hide');

}

const numb = document.getElementById("num-selection").addEventListener('click',(f)=>{
    const numberSelector = document.getElementById('check');
    const listSelector = document.querySelector('.type-list');
    f.preventDefault();
    
    /*Si hay uun numero seleccionado en el checkbox quitar el
    primer formulario y mostrar la opcion ede ingresar nombres
    de acuerdo a la cantidad seleccionada */
    const guestNumber = document.querySelectorAll('input[type="radio"][name="numPerson"]');
    const selectedValue = Array.from(guestNumber).find(radio => radio.checked) && Array.from(guestNumber).find(radio => radio.checked).value;;
    
    
    
    if (selectedValue == null || selectedValue == "" || selectedValue == undefined ) {
        alert('debes seleccionar la cantidad total de invitados a asistir')
    }else{
        
        const insertPerson = document.getElementById('list-name');
        for (let i = 0; i < selectedValue; i++) {
            const quantityInput = ()=>{
                const inputLabel = document.createElement('input');
                inputLabel.className ='guest1';
                inputLabel.type ='text';
                inputLabel.placeholder =`invitado ${i+1}`;
                insertPerson.appendChild(inputLabel)
            }
            quantityInput();
        }

        numberSelector.classList.add('hide-checkMark');  // remover el css que oculta y poner el menu que está oculto
        listSelector.classList.remove('lst-hide');  // remover el css que oculta y poner el menu que está oculto
        //recresar y cambiar la oipcion de numero de invitados
        document.querySelector('.goBack').addEventListener('click', ()=>{
        
            listSelector.classList.add('lst-hide');
            numberSelector.classList.remove('hide-checkMark');  // remover el css que oculta y poner el menu que está oculto
            insertPerson.innerHTML = '';
        });
    }

    
    
    
    
    // console.log(selectedValue);



});

const form = document.getElementById('form').addEventListener('submit',(e)=>{
        
    e.preventDefault();  
    const guestNumber = document.querySelectorAll('input[type="radio"][name="numPerson"]');
    const selectedValue = Array.from(guestNumber).find(radio => radio.checked) && Array.from(guestNumber).find(radio => radio.checked).value;;
    console.log(selectedValue);
    // guestNumber.forEach((g)=>{
    // });

        // alert('done');       

})



