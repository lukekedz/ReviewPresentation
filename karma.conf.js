module.exports = function (config) {
	'use strict';
	config.set({
		autoWatch: true,
		singleRun: false,

		logLevel: config.LOG_INFO,
		basePath: '',

		frameworks: ['jspm', 'jasmine'],

		files: [
			'node_modules/babel-polyfill/dist/polyfill.js',
			'jspm_packages/system-polyfills.js',
      		'jspm_packages/npm/angular@1.5.8/angular.js',
      		'jspm_packages/npm/angular-mocks@1.5.8/angular-mocks.js'
		],

		jspm: {
			config: 'config.js',
			loadFiles: [
				'src/app/**/*.spec.js'
			],
			serveFiles: [
				'src/app/**/!(*.spec).js'
			]
		},

		proxies: {
			'/src/app/': '/base/src/app/',
			'/jspm_packages/': '/base/jspm_packages/'
		},

		browsers: ['PhantomJS'],

		preprocessors: {
			'src/app/**/!(*spec).js': ['babel', 'sourcemap']
		},

		babelPreprocessor: {
			options: {
				presets: ['es2015', 'stage-0'],
				sourceMap: 'inline'
			},
			sourceFileName: function(file) {
				return file.originalPath;
			}
		},

		reporters: ['mocha'],
	});

	function normalizationBrowserName(browser) {
		return browser.toLowerCase().split(/[ /-]/)[0];
	}
};
