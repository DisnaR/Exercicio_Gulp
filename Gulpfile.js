// Importando os módulos do Gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Definindo o compilador Sass explicitamente
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');

// Tarefa para compilar o SASS
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// Tarefa para comprimir as imagens
gulp.task('imagemin', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Tarefa para comprimir o JavaScript
gulp.task('compress-js', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/js'));
});

// Copiar o arquivo HTML para o diretório de destino
gulp.task('copy-html', function() {
  return gulp.src('C:/Users/disna/Ebac/Exercício_Gulp/index.html')
    .pipe(gulp.dest('dist'));
});

// Copiar apenas o arquivo CSS correto para o diretório de destino
gulp.task('copy-css', function() {
  return gulp.src('C:/Users/disna/Ebac/Exercício_Gulp/style.css')
    .pipe(gulp.dest('dist/css'));
});

// Copiar o arquivo JS para o diretório de destino
gulp.task('copy-js', function() {
  return gulp.src('C:/Users/disna/Ebac/Exercício_Gulp/arquivo.js')
    .pipe(gulp.dest('dist/js'));
});

// Tarefa padrão
gulp.task('default', gulp.series('sass', 'imagemin', 'compress-js', 'copy-html', 'copy-css', 'copy-js'));
