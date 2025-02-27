const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const paths = {
    scss: "src/scss/style.scss",
    cssDest: "src/css/"
};

function styles() {
    return gulp
        .src(paths.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest(paths.cssDest))
        .on("end", () => console.log("Arquivo CSS atualizado com sucesso!"));
}

function watch() {
    gulp.watch("src/scss/**/*.scss", { usePolling: true }, gulp.series(styles));
}

gulp.task("styles", styles);
gulp.task("watch", watch);
gulp.task("default", gulp.series("styles", "watch"));
