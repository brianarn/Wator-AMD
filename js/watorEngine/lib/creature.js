// watorEngine creature
// Last modified: 2011-05-12 22:10:26

define(function(){
	console.log('watorEngine creature defined');

	var id = 0;

	// A stub base class of sorts
	function creature(opts) {
		console.log('Creating watorEngine creature');

		// Set properties
		if (opts && opts.world) { this.world = opts.world; }
		// Set up an ID and increment after,
		// if we've received options
		if (opts) { this.id = id++; }
	}

	creature.prototype = {
		// Properties
		age: 0,
		type: 'creature',
		sinceLastBreed: 0,
		world: null,

		// Methods
		tick: function(){
			console.log('creature.tick');
			// Increment all ages
			this.age++;
			this.sinceLastBreed++;
		},

		toString: function(){
			return '[wator ' + this.type + ']';
		},

		log: function(){
			console.log('Creature type:',this.type);
			console.log('ID:',this.id);
			console.log('Age:',this.age);
			console.log('Ticks since last breed:', this.sinceLastBreed);
		}
	};

	return creature;
});
