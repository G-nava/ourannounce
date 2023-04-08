

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