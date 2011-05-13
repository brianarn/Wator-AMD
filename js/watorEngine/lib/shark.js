// watorEngine shark
// Last modified: 2011-05-12 21:21:03

define(['./creature'], function(Creature){
	console.log('watorEngine shark defined');

	function shark() {
		console.log('new shark created');
		this.type = 'shark';
	};

	// Set our base
	shark.prototype = new Creature();

	// Augment
	shark.prototype.sinceLastMeal = 0;

	var parentTick = shark.prototype.tick;
	shark.prototype.tick = function(){
		parentTick.apply(this, arguments);
		console.log('shark.tick');
		this.sinceLastMeal++;
	};

	var parentLog = shark.prototype.log;
	shark.prototype.log = function(){
		parentLog.apply(this, arguments);
		console.log('Ticks since last meal:', this.sinceLastMeal);
	};

	return shark;
});
