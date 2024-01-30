//ejecutar hojas estilo con sass

//con const es una funcion y abrimos los archivos src, y dest
//src sirve para identificar un archivo
//dest sirve para guardarlo
//requiere gulp, busca el archivo gulp en node_modules y aplica al archivo gulpfile
const{src, dest}= require("gulp");
const sass= require('sass'); //importar archivo sass para poder ejecutarlo


function css(done){
        //identificar archivo sass:  src('src/scss/app.scss')
        //compilarlo con .pipe() y sass: .pipe( sass ())


    src('src/scss/app.scss')
    .pipe( sass ()) //ejecuta esto primero
    .pipe(dest("build/css")); //luego ejecuta el sigueinte pipe

    






    done(); //callback que avisa a gulp cuando llegamos al final, es decir cuando ya terminamos la tarea
}