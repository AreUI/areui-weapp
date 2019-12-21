const { series, src, dest, watch, parallel } = require('gulp');
const ts = require('gulp-typescript');
const less = require('gulp-less');

function buildTs() {
	const tsProject = ts.createProject('tsconfig.packages.json');
	return tsProject
		.src()
		.pipe(tsProject())
		.pipe(dest('src/components/AreUI'));
}

function buildLess() {
	return src(['packages/**/*.less', '!packages/Style/**/*.less'])
		.pipe(less())
		.pipe(dest('src/components/AreUI'));
}

function watchTs() {
	return watch(
		['./packages/**/*.tsx', './packages/**/*.ts'],
		{ delay: 500 },
		function loadTs(cb) {
			buildTs();
			cb();
		}
	);
}

function watchLess() {
	return watch('packages/**/*.less', { delay: 500 }, function loadLess(cb) {
		buildLess();
		cb();
	});
}
exports.default = series(buildTs, buildLess, parallel(watchTs, watchLess));
