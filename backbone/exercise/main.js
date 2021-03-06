require.config({
	paths : {
		jquery : '../../js/jquery',
		underscore : '../../js/underscore',
		backbone : '../../js/backbone',
		text: '../../js/text',
		app : 'app'
	},
	shim : {
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps : ['jquery', 'underscore'],
			exports : 'Backbone'
		}
	}
});

require(['app'], function(App) {
	App.initialize();
});