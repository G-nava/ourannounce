import { queryData} from './firebase.js'
import { getDatabase, 
    ref,
    set,
    get,
    child,
    push,
    update,
    remove,
    onValue  } from './firebase.js'

// window.addEventListener('DOMContentLoaded', async ()=>{
    // const queryPeople = await starCountRef()
    // queryPeople.forEach(query =>{
    //     console.log(query.data());
    // console.log(starCountRef);
    // console.log(starCountRef.val());
    // })
                    // const main = async () => {
                    //     const data = await queryData();
                    //     console.log(data);
                    //   };

                    //   main();
// });

const locationValue = window.location.search;

const urlParams = new URLSearchParams(locationValue);

const nombreInvitado = urlParams.get('n'); //detecta si hay nombre
const primerApellido = urlParams.get('p'); // detecta si hay primer apellido
const segundApellido = urlParams.get('s'); // detecta si hay segundo apellido
const cantidad = urlParams.get('c'); // detecta si hay cantidad o cupos
const singlePerson = 1;

/*
Muestra la etiqueta de "familia" en caso de existir apellidos solamente
de lo contrario solo muertra el nombre del invitado
*/
if (primerApellido == null && segundApellido == null) {
    document.getElementById('value').style.display = 'none';
}else{

    if (nombreInvitado != null || nombreInvitado != undefined) {
        const guestHeader = segundApellido == null ? `${nombreInvitado} ${primerApellido}`: `${nombreInvitado} ${primerApellido} ${segundApellido}`;
        document.getElementById('value').innerHTML = guestHeader;
        // return
    }else{
        document.getElementById('value').innerHTML = `Familia: ${primerApellido} ${segundApellido}`
    }
}

    // nombreInvitado == null && primerApellido == null && segundApellido == null ?
        // document.getElementById('value').style.display = 'none' :



// const SHEET_ID = '1tRxbmhamPZzTM3vhzsFfcpclvcxygmToIt5mfKahnKE';
// const SHEET_TITTLE = 'data_guests';
// const SHEET_RANGE ='A1:C49';
// const SHEET_RANGE_INSERT ='C2:J49';

// const FULL_URL = (`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_TITTLE}&range=${SHEET_RANGE}`);

/*
Codigo que que consulta al google sheet si el link ya fue usado
tomando como base los datos ingresados a la URL
*/
const verf1 = `${primerApellido} ${segundApellido}`;
const verf2 = `${nombreInvitado} ${primerApellido}`;
const verf3 = `${nombreInvitado} ${primerApellido} ${segundApellido}`;

// console.log((verf1 || verf2 || verf3));

const main = async () => {
    const data = await queryData();
    data.forEach((dt, index)=>{
        const linkUsed = document.querySelector('.form');


        // console.log(dt.capacity);
        // console.log(dt.confirm === 'si');

        if ((dt.confirm === 'si' && dt.name == verf1)||(dt.confirm === 'si' && dt.name == verf2)||(dt.confirm === 'si' && dt.name == verf3)){
            linkUsed.innerHTML = '';
            
            const messageTicketUsed = document.createElement('div');
            messageTicketUsed.className = 'message';
            messageTicketUsed.innerHTML = 'gracias por confirmar tu asistencia,<br>nos vemos en cartagena.';

            const messageImg = document.createElement('img');
            messageImg.className = 'messageImg';
            messageImg.src ='src/style/elements/Recurso 1message.png'
            
            linkUsed.classList.add('borderGold')
            linkUsed.appendChild(messageTicketUsed);
            linkUsed.appendChild(messageImg);
            // si aparece "si" quitar el formulario de confirmación para que no vuelva a ser llenado
            // console.log(used);
            // console.log(result.toLowerCase() === dataForGuest)  
        }
            /**
             * en el caso tal de no haber ningun dato confirmado
             * se procede a desplegar la seccion de checkboxes
             */
            
        })
    };
    main();
    

const insertcheck = document.getElementById('group-choice');

const funct = ()=>{ // fncion para generar los checkboxes

    for (let i = 0; i < cantidad; i++) { //por cada numero indicado en URL
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
            insertcheck.appendChild(inputLabelCheck)
        }          
        quantityCheck();      
    }
}
    

if (nombreInvitado != null  && cantidad == null ) {
    const singleName = document.querySelector('.singlePerson');
    singleName.innerHTML = '';
    
    const singleP = ()=>{
        const singleGuestForm = segundApellido == null ? `${nombreInvitado} ${primerApellido}`: `${nombreInvitado} ${primerApellido} ${segundApellido}`;

        const singleNamePerson = document.createElement('h5');
        singleNamePerson.className = 'onlyNameGuest'
        singleNamePerson.id = 'input-task'
        singleNamePerson.innerHTML = singleGuestForm;
        
        const justConfirm = document.createElement('button');
        justConfirm.type = 'submit'
        justConfirm.className = 'btn-single_person'
        justConfirm.innerHTML = 'confirmar'
        
        singleName.appendChild(singleNamePerson);
        singleName.appendChild(justConfirm);
    }
singleP();

/*
generar los check box deacuerdo al parametro ingresado por URL
seguido del código de abajo
en este caso solo serian lo appellidos de las familas y la cantidad 
de cupos disponbibles
*/

}else if (nombreInvitado != null || nombreInvitado != undefined && cantidad != null || cantidad != undefined) {
    funct(); // persona invitada con acompañante

}else{
    funct(); // familia invitada con cupos
}

// fetch(FULL_URL)
//     .then(res => res.text())
//     .then(rep =>{
//         const data = JSON.parse(rep.slice(47).slice(0,-2))

//         data.table.rows.forEach((element, index)=>{// <----------------

//             // const dataForGuest = nombreInvitado ? `${nombreInvitado} ${primerApellido} ${segundApellido}` : `${primerApellido} ${segundApellido}`
//             const result = element.c[0].v
//             const used = element.c[2].v  // si vs null

//             // const linkUsed = document.querySelector('.form');

//             if (result.toLowerCase() === dataForGuest && used === 'si'){
//                 linkUsed.innerHTML = '';
//                 const messageTicketUsed = document.createElement('div');
//                 messageTicketUsed.className = 'message';
//                 messageTicketUsed.innerHTML = 'gracias por confirmar tu asistencia';

//                 const messageImg = document.createElement('img');
//                 messageImg.className = 'messageImg';
//                 messageImg.src ='src/style/elements/Recurso 1message.png'
                
//                 linkUsed.classList.add('borderGold')
//                 linkUsed.appendChild(messageTicketUsed);
//                 linkUsed.appendChild(messageImg);
//             }

//             // si aparece "si" quitar el formulario de confirmación para que no vuelva a ser llenado
//             // console.log(used);
//             // console.log(result.toLowerCase() === dataForGuest)    
//         });
//     });

/*================================================================*/
/*
coloca solamente el nombre de la persona y el boton de confirmar 
cuando la invitacion es individual
*/




/**
 * Segundo paso: despues de haber seleccionado la cantidad final de
 * de invitados que van a asistir se cambia el formulario para el 
 * ingreso de los nombres...
 */

const numb = document.getElementById("num-selection");
if (numb) {
    numb.addEventListener('click',(f)=>{
        f.preventDefault();
        const numberSelector = document.getElementById('check');
        const listSelector = document.querySelector('.type-list');
        
        /*Si hay un numero seleccionado en el checkbox quitar el
        primer formulario y mostrar la opcion ede ingresar nombres
        de acuerdo a la cantidad seleccionada */
        const guestNumber = document.querySelectorAll('input[type="radio"][name="numPerson"]');
        const selectedValue = Array.from(guestNumber).find(radio => radio.checked) && Array.from(guestNumber).find(radio => radio.checked).value;;
          
        if (selectedValue == null || selectedValue == "" || selectedValue == undefined ) {
            alert('debes seleccionar la cantidad total de invitados a asistir')
        }else{
            
            /**
             * Genera los inputs de acuerdo a la cantidad de 
             * datos seleccionados en los checkboxes  
             */
            const insertPerson = document.getElementById('list-name');
            for (let i = 0; i < selectedValue; i++) {
                const quantityInput = ()=>{
                    const inputLabel = document.createElement('input');
                    inputLabel.className ='guest1';
                    inputLabel.id = `input-task userGuest${i+1}`;
                    inputLabel.type ='text';
                    inputLabel.setAttribute('required','required');
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
    });
}


// console.log(rep);

// const formData = document.getElementById('form')
// formData.addEventListener('submit',(e)=>{
        
//     e.preventDefault(); // previene el recargue de la página
//     const formDataGuests = document.querySelectorAll('[id*="input-task"]')
//     formDataGuests.forEach((fdg)=>{
//         // console.log(fdg.value);
//         saveTask(fdg.value)
        
//     });

//     formData.reset();// clean the form
// });


// function familyJSON(){
//     fetch('src/family.json')
//     .then(res=>{
//         return res.json();
//     })
//     .then(data=>{
//         data.forEach(d=>{
//             console.log(d);
//         })

//     })
// }


// familyJSON();





// fetch('src/family.json')
//     .then(response => response.json())
//     .then(data => {
//         data[0].confirm = 'si'; // Modificamos la edad
//         return data; // Retornamos el objeto modificado
//     })
//     .then(data => {
//         fetch('src/family.JSON', {
//         method: 'POST', // Método para modificar el archivo
//         body: JSON.stringify(data), // Convertimos el objeto a JSON
//         headers: {
//             'Content-Type': 'application/json'
//         }
//         })
//         .then(() => console.log('Archivo modificado con éxito'))
//         .catch(error => console.error('Error al modificar el archivo:', error));
//     })
// .catch(error => console.error('Error al cargar el archivo:', error));

// const fileJson = "/src/family.json"

// // visualizar datos
// fetch(fileJson)
//     .then(function(resp){
//         return resp.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     });

//     const data = 'yolo'

// fetch(fileJson, {
//     method: 'POST',
//     // headers: {
//     //     'Content-Type' : 'application/json'
//     // },
//     body: JSON.stringify(data)

// })
    // .then(function(resp){
    //     return resp.json();
    // })
    // .then((data)=>{
    //     console.log(data);
    // });


    // const gitName = 'g-nava'
    // const repoName = 'guest.json'
    // const urlGit = `https://${gitName}.github.io/dataFileGuest/${repoName}`
    
    // visualizar datos
    // fetch(urlGit)
    //     .then(function(resp){
    //         return resp.json();
    //     })
    //     .then((data)=>{
    //         console.log(data);
    //     });
    

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', urlGit);
    // xhr.onload = function() {
    //   if (xhr.status === 200) {
    //     // console.log(JSON.parse(xhr.responseText)); 
    //   } else {
    //     console.log('Error: ' + xhr.status);
    //   }
    // };
    // xhr.send();

    const formData = document.getElementById('form');
    
    formData.addEventListener('submit', async (e)=>{
        console.log('done');
        
        e.preventDefault();
        const formDataGuests = document.querySelectorAll('[id*="input-task"]')
        /**traer posicion del array al que corresponde el nombre */ 
        const dbJson = getDatabase()
        const getForSubmit = await queryData();
    getForSubmit.forEach((getSubm, index)=>{
        // console.log(verf3);
        
        if (( getSubm.name == verf1)||( getSubm.name == verf2)||(getSubm.name == verf3)) {
            // console.log(index);
            if(getSubm.capacity === 1){
                update(ref(dbJson, `guestWedding/${index}/`),{
                  confirm: 'si'
                });

            }else{

                update(ref(dbJson, `guestWedding/${index}/`),{
                  confirm: 'si'
                });
            
                const refDir = ref(dbJson,`guestWedding/${index}/`);
                const newArray = []; //  Agregar un array vacio
                
                set(child(refDir, 'numPer'), newArray);
              
                /**
                 * - La funcion 'child' de firebase está siendo usada para construir 
                 * una referencia al nodo 'numPer' en la ruta 'refDir'
                 * - La funcion set de firebase se usa para escribir un valor en la base 
                 * de datos de firebase. En este caso el valor que se está creando es 
                 * un array vacío 'newArray', y se está escribiendo en la ruta construida
                 * por la funcion child
                 */
                
              
                formDataGuests.forEach((fdg, index)=>{
                    console.log(fdg.value);// geting undefined
                  const newGuest = {[`invitado${index+1}`]:fdg.value}
                  update(child(refDir,'numPer' ),newGuest);
                  /**
                   * refDir: referencia al nodo principal en la base de datos
                   * numPer: es el nombre del subnodo que se quiere actualizar 
                   *         dentro de refDir.
                   * newGuest: es el objeto que contiene los nuevos datos que se desean
                   *           agregar a numPer
                   */
                });
            }
        }
    
    });
    
    formData.reset();// clean the form
});
