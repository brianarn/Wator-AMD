// watorEngine world
// Last modified: 2011-05-12 21:52:03

define(['./fish', './shark'], function(Fish, Shark){
	console.log('watorEngine world defined');

	function world() {
		console.log('new world created');

		this.fish = new Fish({
			world: this
		});
		this.shark = new Shark({
			world: this
		});
	};

	return world;
});
