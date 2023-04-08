import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAqMrmoMVuydj3EyA2UclpV54SNXfwkfjM",
    authDomain: "data-storage-a60be.firebaseapp.com",
    databaseURL: "https://data-storage-a60be-default-rtdb.firebaseio.com",
    projectId: "data-storage-a60be",
    storageBucket: "data-storage-a60be.appspot.com",
    messagingSenderId: "303177073307",
    appId: "1:303177073307:web:cb5229274a3074aa1bbc3e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//   import {getDataBase,  ref, child, onValue, get, post} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

//   const getDB = getDataBase();

//   function getAllData(){
//     const dbRef = ref(getDB);

//     get(child(dbRef, "data-storage" ))
//     .then((snapshot)=>{
//         let s
//     })
//   }

// const gitName = 'g-nava'
// const repoName = 'guest.json'
// const urlGit = `https://${gitName}.github.io/dataFileGuest/${repoName}`

// // visualizar datos
// fetch('/src/family.json')
//     .then(function(resp){
//         return resp.json();
//     })
//     .then((data)=>{
//         console.log(data);
//     });
console.log('bingbong');





// console.log('hola');

// const data = {
//   key1: 'value1',
//   key2: 'value2'
// };

// const options = {
//   headers: {
//     'Authorization': 'token [tu clave de acceso personal de GitHub]'
//   }
// };

// post(urlGit, {
//   message: 'Actualización del archivo JSON',
//   content: Buffer.from(JSON.stringify(data)).toString('base64')
// }, options)
// .then((response) => {
//   console.log('Archivo JSON actualizado:', response.data.content);
// })
// .catch((error) => {
//   console.error('Error al actualizar el archivo JSON:', error);
// });