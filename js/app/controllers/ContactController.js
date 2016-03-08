function ContactController(random, time) {
	random.name = 'Bill Gates';

	time(function () {
		random.name = 'Steve Jobs';
	}, 5000);
}

ContactController.$inject = ['$scope', '$timeout'];

angular
	.module('app')
	.controller('ContactController', ContactController);