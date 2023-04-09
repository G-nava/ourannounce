 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

// import {getFirestore,
//         collection, 
//         addDoc,
//         getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"

import { getDatabase, 
         ref,
         set,
         get,
         child,
         push,
         update,
         remove,
         onValue  } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js'
        //  import { } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAbBzvRPEvKjkPF8Coz0t3C3jv6joCi8Og",
   authDomain: "ourannounce.firebaseapp.com",
   projectId: "ourannounce",
   storageBucket: "ourannounce.appspot.com",
   messagingSenderId: "800536561863",
   appId: "1:800536561863:web:0ffc3561679ddc22b596e2"
 };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = getFirestore();


//  export const saveTask = (guest1)=>{
//   addDoc(collection(db, 'guests'),{
//     guest1
//   });
//  }

//  export const getTasks = ()=> getDocs(collection(db,'guests'))
//  export 
// const database = firebase.database();

// import { getDatabase, ref, onValue} from "firebase/database";

const dbRead = getDatabase();
const starCountRef = ref(dbRead, 'guestWedding/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});


/*===================== FUNCTION FOR SUBMIT DATA ================== */
/**  */
const formData = document.getElementById('form')
   
formData.addEventListener('submit',(e)=>{
  e.preventDefault(); // previene el recargue de la página
  
  const formDataGuests = document.querySelectorAll('[id*="input-task"]')

  update(ref(dbJson, `guestWedding/5/`),{
    confirm: 'si'
  });

  const refDir = ref(dbJson,`guestWedding/5/`);
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

    formData.reset();// clean the form
});
