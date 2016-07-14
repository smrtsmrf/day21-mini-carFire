angular.module('carFire', ['firebase', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state('cars', {
		url: '/cars',
		templateUrl: '/templates/cars.html', 
		controller: 'carsCtrl', 
		resolve: {
			carsRef: function (carsService) {
				return carsService.getCars();
			}
		}
	})

	.state('car', {
		url: '/cars/:carId',
		templateUrl: '/templates/car.html',
		controller: 'carCtrl', 
		resolve: {
			carRef: function (carsService, $stateParams) {
				var id = $stateParams.carId;
				return carsService.getCar(id);
			}, 
			commentsRef: function (carsService, $stateParams) {
				var id = $stateParams.carId;
				return carsService.getComments(id);
			}
		}
	});

	$urlRouterProvider.otherwise('/cars')

}])
