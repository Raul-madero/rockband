const {src, dest, watch} = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
function css(done) {
    src('./src/scss/**/*.scss') //Identificar el archivo de sass
        .pipe(plumber())
        .pipe(sass()) //Compilar archivo de sass
        .pipe(dest('./build/css')); //Almacenar en el disco duro
    done();
};
function dev(done) {
    watch('src/scss/**/*.scss', css);
    done()
}
exports.css = css;
exports.dev = dev;