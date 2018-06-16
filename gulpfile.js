const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () =>
    gulp.src('src/style.css')
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('watchstyles', () => {
    gulp.watch('src/*.css', ['styles']);
});