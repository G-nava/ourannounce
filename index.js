const locationValue = window.location.search;
    // console.log(locationValue);
    
    //separar datos

    const urlParams = new URLSearchParams(locationValue);

    const primerApellido = urlParams.get('pa')
    const segundApellido = urlParams.get('sa')

    primerApellido == null && segundApellido == null ?
        document.getElementById('value').style.display = 'none' :
        document.getElementById('value').innerHTML = `Familia: ${primerApellido} ${segundApellido}`



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


// const formulario = document.getElementById('form');

// formulario.addEventListener('submit',(e)=>{
//     e.preventDefault();  

// });

const form = document.getElementById('form').addEventListener('submit',(e)=>{
        
    e.preventDefault();  
    const guestNumber = document.querySelectorAll('input[type="radio"][name="numPerson"]');
    const selectedValue = Array.from(guestNumber).find(radio => radio.checked) && Array.from(guestNumber).find(radio => radio.checked).value;;
    console.log(selectedValue);
    // guestNumber.forEach((g)=>{
    // });

        // alert('done');       

})


