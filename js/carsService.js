angular.module('carFire').service('carsService', [function () {
	this.getCars = function () {
		return new Firebase('https://smrtsmrf-carfire.firebaseio.com/' + '/cars');
	}

	this.getCar = function (carId) {
		return new Firebase('https://smrtsmrf-carfire.firebaseio.com/' + '/cars/' + carId);
	}

	this.getComments = function (carId) {
		return new Firebase('https://smrtsmrf-carfire.firebaseio.com/' + '/comments/' + carId);
	}
}])