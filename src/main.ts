import * as typescript from "typescript";
import * as gulpTypescript from "gulp-typescript";
import * as path from "path";

function createTask(gulp: any, options: any) {
    const tsOptions = {
        charset: "utf8",
        noImplicitAny: true,
        moduleResolution: "node",
        typescript: typescript,
        target: options.target,
    };

    gulp.task("compile", function () {
        const tsSources = path.resolve(options.root, options.sourceDirectory);

        return gulp
            .src(tsSources)
            .pipe(gulpTypescript(tsOptions));
    });
}
