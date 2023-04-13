
/*================= LISTAR EN PAGINA DE ASISTENCIA =================*/
import { queryData} from '../src/scripts/firebase.js'
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
    table.className = 'table'

    th.innerHTML = '#';

    let th2 = th.cloneNode(true);
    th2.innerHTML = 'invitado';

    let th3 = th.cloneNode(true);
    th3.innerHTML = 'asistirá';
    
    let th4 = th.cloneNode(true);
    th4.innerHTML = 'nombres';

    let th5 = th.cloneNode(true);
    th5.innerHTML = 'total';
    
    let tr1 = tr.cloneNode(true);
    tr1.append(th, th2, th3, th4, th5);

    thead.appendChild(tr1)
    table.appendChild(thead)

    const main = async () => {
        const data = await queryData();
        const objeto = data.slice(1);
        objeto.forEach((dt, index)=>{

            let thN = th.cloneNode(true);
            thN.innerHTML = `${index+1}`;
            
            let td1 = td.cloneNode(true);
            td1.innerHTML = `${dt.name}`;

            let td2 = td.cloneNode(true);
            td2.innerHTML = `${dt.confirm}`;

            let td3 = td.cloneNode(true);
            td3.innerHTML = `${Object.values(dt.numPer)}`;
            
            let td4 = td.cloneNode(true);

            console.log(Object.keys(dt.numPer).length);
            const numPerLength = Object.keys(dt.numPer).length;
            td4.innerHTML = `${Object.keys(dt.numPer).length}`;

            let tr2 = tr.cloneNode(true);
            tr2.append(thN, td1, td2, td3, td4);

            tbody.appendChild(tr2)
            table.appendChild(tbody)
        
        });
            // asistenciaList(data)
    }
    main();
     
    html = table;
}
asistenciaList();
document.getElementById('asistencia_list-container').appendChild(html)

