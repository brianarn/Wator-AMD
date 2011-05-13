// watorEngine world
// Last modified: 2011-05-12 22:30:35

define(['./fish', './shark'], function(Fish, Shark){
	console.log('watorEngine world defined');

	function world(opts) {
		console.log('new world created');

		opts = opts || {};

		// Set options
		for (var prop in opts) {
			if (world.prototype.hasOwnProperty(prop) && opts[prop]) {
				console.log('watorEngine world: Setting ',prop,' to ',opts[prop]);
				this[prop] = opts[prop];
			}
		}

		// Grab some options
		var rows = this.rows,
			cols = this.cols,
			percentFish = this.percentFish,
			percentSharks = this.percentSharks;

		// Sanity checks
		if (percentFish + percentSharks > 1) {
			console.warn('Creature ratios invalid, adjusting sharks');
			this.percentSharks = percentSharks = 1 - percentFish;
		}

		// For testing, creating just singles
		/*
		this.fish = new Fish({
			world: this
		});
		this.shark = new Shark({
			world: this
		});
		*/

		// Create our world storage
		var surface = this.surface = [],
			fishes = this.fishes = [],
			sharks = this.sharks = [],
			overallSize = rows * cols,
			// Ensure that we always have at least one fish/shark
			fishSize = Math.floor(overallSize * percentFish) || 1,
			sharkSize = Math.floor(overallSize * percentSharks) || 1,
			remainingSize = overallSize - fishSize - sharkSize,
			c, i;

		// Create the fish
		for (i = 0; i < fishSize; ++i) {
			c = new Fish({world:this});
			fishes.push(c);
			surface.push(c);
		}
		// Now sharks
		for (i = 0; i < sharkSize; ++i) {
			c = new Shark({world:this});
			sharks.push(c);
			surface.push(c);
		}
		// Finish the rest with nulls
		for (i = 0; i < remainingSize; ++i) {
			surface.push(null);
		}

		// Validate
		if (surface.length != overallSize) {
			throw new Error('watorEngine world: Surface size and overall size do not match: ' + surface.length + ' vs ' + overallSize);
		}

		// Mix it up
		this.shuffleSurface();
	}

	world.prototype = {
		// Properties
		rows: 5,
		cols: 5,
		fishBreed: 3,
		sharkBreed: 3,
		sharkStarve: 10,
		percentFish: 0.6,
		percentSharks: 0.2,

		// Methods
		shuffleSurface: function(){
			this.surface.sort(function(){
				// Simply just return a random in [-1,1]
				return Math.floor(Math.random() * 3 - 1);
			});
		}
	};

	return world;
});
