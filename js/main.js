// main.js
// Last modified: 2011-05-12 22:29:46
//
// Playing around with AMD and the CommonJS package format and Require.js

// Configure RequireJS
require({
	packages: ['watorEngine']
});

// Load up our watorEngine
require(['watorEngine'], function(wE){
	console.log('watorEngine required', wE);

	var world = new wE.world({
		rows: 3,
		cols: 3
	});
	console.log('world:',world);

	require.ready(function(){
		console.log('require.ready');
	});

	// Expose a few things
	window.w = world;
	/*
	window.f = world.fish;
	window.s = world.shark;
	*/
});
