// var gulp = require('gulp');
// gulp.task('default',function(){
//     console.log('gulp启动成功');//测试gulp是否启动
// })

var gulp = require('gulp');
//编写任务名字
// 第一个参数 任务的名字 自定义
// 第二个参数 回调函数 任务知
gulp.task('my_task',function(){
console.log('gulp启动成功');//测试gulp是否启动
});
gulp.task('copy-html',function() {
    return gulp.src("index.html")
    .pipe(gulp.dest("dist/"))
    .pipe(serve.reload());
})

const serve = require('gulp-connect');
gulp.task('serve',function(){
    serve.server({
        root : 'dist',
        port : 8888,
        livereload: true 
    })
})

gulp.task('watch',function(){
    gulp.watch('index.html',['copy-html'])

})


gulp.task('default',['watch','serve']);