const locationValue = window.location.search;
    console.log(locationValue);
    
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




