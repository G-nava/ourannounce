// const route = (event)=>{
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };

// const routes = {
//     404: "src/pages/404.html",
//     "/": "index.html",
//     "/nos-casamos": "src/pages/client.html",
//     // "/client-2":"index.html",
// };

// const handleLocation = async()=>{
//     const path =window.location.pathname
//     const route = routes[path] || routes[404];
//     const html = await fetch(route).then((data)=> data.text());
//     document.getElementById('main-page').innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.addEventListener("click", route)
// window.route = route;

// // handleLocation();