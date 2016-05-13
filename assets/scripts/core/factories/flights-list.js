mainApp.factory('flightsList', function($http, $q	){

	return {
		'getFlights' : function() {
			var defer = $q.defer();
			$http({
				method: 'GET',
				url: '/planeticket/listflights.json'
			})
			.then(function successCallback(response) {
			   defer.resolve(response.data);
			}, function errorCallback(response) {	
				defer.reject(response);
			});
			return defer.promise;
		}
	};
});