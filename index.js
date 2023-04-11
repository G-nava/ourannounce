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



const locationValue = window.location.search;

const urlParams = new URLSearchParams(locationValue);

const nombreInvitado = urlParams.get('n'); //detecta si hay nombre
const primerApellido = urlParams.get('p'); // detecta si hay primer apellido
const segundApellido = urlParams.get('s'); // detecta si hay segundo apellido
const cantidad = urlParams.get('c'); // detecta si hay cantidad o cupos
const singlePerson = 1;


const localList = '/src/family.JSON'
fetch(localList)
    .then(resp =>resp.json())
    .then(data=>{
        const result = cantidad != undefined ? data.guestWedding[`${cantidad}`]: data.guestWedding[0];
        // console.log(data.guestWedding[3]);
        resultData(result);
        
    })

function resultData(result){
    // console.log(result.name);
    /*
    Muestra la etiqueta de "familia" en caso de existir apellidos solamente
    de lo contrario solo muertra el nombre del invitado
    */
   const gender = document.getElementById('reason')
//    console.log(result.name);
    if (result.name == '') {
       document.getElementById('value').style.display = 'none';
       document.getElementById('sctn4').style.display = 'none';
    }else{
        
        if (result.familia == 'no') {
            const getGender = result.genero === 'f' ? 'estas invitada a celebrar nuestra boda': 'estas invitado a celebrar nuestra boda'
            gender.innerHTML = getGender;
            // const guestHeader = segundApellido == null ? `${nombreInvitado} ${primerApellido}`: `${nombreInvitado} ${primerApellido} ${segundApellido}`;
            document.getElementById('value').innerHTML = result.name;
            // return
        }else{
            document.getElementById('value').innerHTML = `Familia: ${result.name}`
            gender.innerHTML = 'estan invitados a celebrar nuestra boda'
        }
    }
    
    /*
    Codigo que que consulta al google sheet si el link ya fue usado
    tomando como base los datos ingresados a la URL
    */
    // console.log((verf1 || verf2 || verf3));
    
    const main = async () => {
        const data = await queryData();
        data.forEach((dt, index)=>{
            const linkUsed = document.querySelector('.form');
    
    
            // console.log(dt.capacity);
            // console.log(dt.confirm === 'si');
            /** Busca en la base de datos ya ya hay un cupo usado */
    
            if (dt.confirm === 'si' && dt.name == result.name){
                linkUsed.innerHTML = '';
                
                const messageTicketUsed = document.createElement('div');
                messageTicketUsed.className = 'message';
                messageTicketUsed.innerHTML = 'gracias por confirmar tu asistencia,<br>nos vemos en cartagena.';
    
                const messageImg = document.createElement('img');
                messageImg.className = 'messageImg anim';
                // messageImg.setAttribute('data-delay','.5s');
                messageImg.src ='src/style/elements/Recurso 1message.png'
                
                linkUsed.classList.add('borderGold')
                linkUsed.appendChild(messageTicketUsed);
                linkUsed.appendChild(messageImg);
                // si aparece "si" quitar el formulario de confirmación para que no vuelva a ser llenado
                // console.log(used);
                // console.log(result.toLowerCase() === dataForGuest)  
            }else{

            }

            })
    };
    main();
        
    const insertcheck = document.getElementById('group-choice');
    
    const funct = ()=>{ // fncion para generar los checkboxes
    
        for (let i = 0; i < result.capacity; i++) { //por cada numero indicado en URL
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
    
    /** */
    if (result.familia == 'no' && result.capacity == 1) {
    const singleName = document.querySelector('.singlePerson');
    singleName.innerHTML = '';
    
    const singleP = ()=>{
        // const singleGuestForm = segundApellido == null ? `${nombreInvitado} ${primerApellido}`: `${nombreInvitado} ${primerApellido} ${segundApellido}`;
    
        const singleNamePerson = document.createElement('h5');
        singleNamePerson.className = 'onlyNameGuest'
        singleNamePerson.id = 'input-task'
        singleNamePerson.innerHTML = result.name;
        
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
    
    }
    // else if (result != null || nombreInvitado != undefined && cantidad != null || cantidad != undefined) {
    // funct(); // persona invitada con acompañante
    
    // }
    else{
    funct(); // familia invitada con cupos
    }
/**===========================INPUTS=============================== */
    /*
     * Segundo paso: despues de haber seleccionado la cantidad final de
     * de invitados que van a asistir se cambia el formulario para el 
     * ingreso de los nombres...
     */
    
    //boton que confirma la cantidad de personas seleccionadas en el checkbox
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
            
            // Cuenta el numero de check box seleccionado para generar los inputs
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
    
    
        const formData = document.getElementById('form');
        
        formData.addEventListener('submit', async (e)=>{
            // console.log('done');
            
            e.preventDefault();
            const formDataGuests = document.querySelectorAll('[id*="input-task"]')
            /**traer posicion del array al que corresponde el nombre */ 
            const dbJson = getDatabase()
            const getForSubmit = await queryData();
        getForSubmit.forEach((getSubm, index)=>{
            /**Comparo los datos deJSON con los de la base de datos, si hay 
             * coincidencia; realizar submit
             */

            if (result.name === getSubm.name) {
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
        
};


