// watorEngine world
// Last modified: 2011-05-11 22:00:43

define(['./fish', './shark'], function(Fish, Shark){
	console.log('watorEngine world defined');

	function world() {
		console.log('new world created');

		this.fish = new Fish();
		this.shark = new Shark();
	};

	return world;
});
