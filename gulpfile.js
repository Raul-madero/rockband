const {src, dest} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
function css(done) {
    src('./src/scss/app.scss') //Identificar el archivo de sass
        .pipe(sass()) //Compilar archivo de sass
        .pipe(dest('./build/css/app.css')); //Almacenar en el disco duro
    done();
};
exports.css = css;