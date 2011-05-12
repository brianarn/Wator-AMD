// watorEngine fish
// Last modified: 2011-05-11 22:00:21

define(['./creature'], function(creature){
	console.log('watorEngine fish defined');

	function fish() {
		console.log('new fish created');
		this.type = 'fish';
	};

	fish.prototype = creature;

	return fish;
});
