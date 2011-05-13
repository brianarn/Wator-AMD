// main.js
// Last modified: 2011-05-12 21:21:53
//
// Playing around with AMD and the CommonJS package format and Require.js

// Configure RequireJS
require({
	packages: ['watorEngine']
});

// Load up our watorEngine
require(['watorEngine'], function(wE){
	console.log('watorEngine required', wE);

	var world = new wE.world();
	console.log('world:',world);

	require.ready(function(){
		console.log('require.ready');
	});

	// Expose it
	window.world = world;
});
