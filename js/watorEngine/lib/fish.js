// watorEngine fish
// Last modified: 2011-05-12 21:47:59

define(['./creature'], function(Creature){
	console.log('watorEngine fish defined');

	function fish() {
		console.log('Creating watorEngine fish');

		// Apply our parent's constructor
		Creature.apply(this, arguments);

		// Modifications for this instance
		this.type = 'fish';
	};

	fish.prototype = new Creature();

	return fish;
});
