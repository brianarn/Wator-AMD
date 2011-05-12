// main.js
// Last modified: 2011-05-11 22:02:53
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
});
