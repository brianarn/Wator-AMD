// watorEngine fish
// Last modified: 2011-05-12 21:23:35

define(['./creature'], function(Creature){
	console.log('watorEngine fish defined');

	function fish() {
		console.log('new fish created');
		this.type = 'fish';
	};

	fish.prototype = new Creature();

	return fish;
});
