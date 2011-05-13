// watorEngine creature
// Last modified: 2011-05-12 21:51:36

define(function(){
	console.log('watorEngine creature defined');

	// A stub base class of sorts
	function creature(opts) {
		console.log('Creating watorEngine creature');

		// Sanity check
		if (!opts.world) {
			throw new Error('watorEngine creature: Invalid world specified');
		}

		// Set properties
		this.world = opts.world;
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
			console.log('Age:',this.age);
			console.log('Ticks since last breed:', this.sinceLastBreed);
		}
	};

	return creature;
});
