
/*================= LISTAR EN PAGINA DE ASISTENCIA =================*/
import { queryData} from '../firebase.js'
const main = async () => {
    const data = await queryData();
    // data.forEach((dt, index)=>{
    //     // const linkUsed = document.querySelector('.form');
    //     // console.log(dt.name);
    //     asistenciaList(dt)
    
    // });
        asistenciaList(data)
}
main();

const asistHeadetTitle = []
let html = '';
const asistenciaList = (data)=>{

    // const gerTitle = Object.keys(data[0]);


    // console.log(gerTitle)
    // gerTitle.forEach(dataKey =>{
    //     const trueTitle = dataKey == 'name'? 'invitado': dataKey == 'confirm'? 'asistirá': numper > 0 ?  
        
    // });
    const th = document.createElement('th');
    const tr = document.createElement('tr');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const td = document.createElement('td');
    const table = document.createElement('table');

    th.innerHTML = '#';

    let th2 = th.cloneNode(true);
    th2.innerHTML = 'invitado';

    let th3 = th.cloneNode(true);
    th3.innerHTML = 'asistirá';
    
    let th4 = th.cloneNode(true);
    th4.innerHTML = 'nombres';

    tr.append(th, th2, th3, th4);

    table.appendChild(tr)
    



    
    html = table;
    // tableRow.appendChild();
    

    // inputLabel.className ='guest1';
    // inputLabel.id = `input-task userGuest${i+1}`;
    // inputLabel.type ='text';
    // inputLabel.setAttribute('required','required');
    // inputLabel.placeholder =`invitado ${i+1}`;
    // insertPerson.appendChild(inputLabel)
}
asistenciaList();
document.getElementById('asistencia_list-container').appendChild(html)

