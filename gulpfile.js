const gulp = require('gulp');
//const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
//const concatCss = require('gulp-concat-css');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
/*gulp.task('babel', () =>{
    gulp.src('./sources/scripts/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream())
});*/

gulp.task('css', () => {
    return gulp.src('./sources/styles/*.css')
        //.pipe(concatCss("main.css"))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});


gulp.task('imagemin', () =>
    gulp.src('./sources/assets/*')
    .pipe(imagemin([
        imagemin.gifsicle({
            interlaced: true
        }),
        imagemin.jpegtran({
            progressive: true
        }),
        imagemin.optipng({
            optimizationLevel: 1
        }),
        imagemin.svgo({
            plugins: [{
                    removeViewBox: true
                },
                {
                    cleanupIDs: false
                }
            ]
        })
    ]))
    .pipe(gulp.dest('dist/images'))
);

gulp.task('start-code', ['css'], function () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sources/styles/*.css", ['css']);
    //gulp.watch("./sources/scripts/*.js", ['babel']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});