var gulp = require('gulp'),
		gutil = require('gulp-util'),
		concat = require('gulp-concat');

var jsSources = [
		'components/scripts/html5shiv.js',
		'components/scripts/respond.min.js',
		'components/scripts/bootstrap.min.js',
		'components/scripts/default.min.js',
		'components/scripts/application.js',
];

gulp.task('log', function() {
	gutil.log('Workflows are awesome');
});

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(gulp.dest('builds/development/js'))

});