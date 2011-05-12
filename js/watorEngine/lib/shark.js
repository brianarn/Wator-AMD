// watorEngine shark
// Last modified: 2011-05-11 22:00:34

define(['./creature'], function(creature){
	console.log('watorEngine shark defined');

	function shark() {
		console.log('new shark created');
		this.type = 'shark';
	};

	shark.prototype = creature;

	return shark;
});
