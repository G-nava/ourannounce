class Router {
    // constructor
    constructor(paths){
        this.paths = paths
        this.initRouter();
    };

    // Metodo pera inicializar router
    initRouter(){
        const { 
            location: { 
                pathname = '/' 
            }
        } = window
        const URI = pathname === '/' ? 'keisi' : pathname.replace('/', '');
        this.load(URI)
    };

    // Metodo para cargar las vistas
    load(page = 'home'){
        const {paths} = this
        const {path, template} = paths[page] || paths.error
        const $CONTAINER = document.querySelector('#main-page')
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, "Genial", path);


    }
}