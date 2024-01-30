//ejecutar hojas estilo con sass

//con const es una funcion y abrimos los archivos src, y dest
//src sirve para identificar un archivo
//dest sirve para guardarlo
//requiere gulp, busca el archivo gulp en node_modules y aplica al archivo gulpfile
//agregamos un watch 
const{src, dest, watch}= require("gulp");
const sass= require('gulp-sass') (require('sass')); //importar archivo sass para poder ejecutarlo


function css(done){
        //identificar archivo sass:  src('src/scss/app.scss')
        //compilarlo con .pipe() y sass: .pipe( sass ())


    src('src/scss/app.scss')
    .pipe( sass ()) //ejecuta esto primero
    .pipe(dest("build/css")); //luego ejecuta el sigueinte pipe y almacena en disco duro

    done(); //callback que avisa a gulp cuando llegamos al final, es decir cuando ya terminamos la tarea

}

function dev(done){

    watch("src/scss/app.scss", css);
    done();
}
//guardo el archivo como .dev e asigno lo que tiene la funcion dev
exports.css= css;
exports.dev= dev;