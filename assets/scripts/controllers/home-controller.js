mainApp.controller('HomeController', ['$scope', 'flightsList', function($scope,$flightsList) { 

	$scope.custosynt=[];
	$scope.custosyntFly=[];
	$scope.custoDisabled = false;
	$scope.fligths = [];

	 $flightsList.getFlights().then(
	 	function ok(data){
		$scope.fligths =data;
	}, function error(err){
		console.log('Fichier Json en erreur!'+ err.status+':'+err.statusText)
	});
	
	$scope.custoSaved = false;

	$scope.custoChange = function(){
		$scope.custoSaved = false;
	}
	
	$scope.saveCustomer = function(){		
		//$scope.custoDisabled = true;
		var re = new RegExp("^[0-9]{10}$");
		
		if(!re.test($scope.custo.phone)) {
			$scope.custoForm.$valid = false;
		}

		if ($scope.custoForm.$valid) {
			$scope.custosynt.name = $scope.custo.name;
			$scope.custosynt.surname = $scope.custo.surname;
			$scope.custosynt.phone = $scope.custo.phone;
			$scope.custosynt.email = $scope.custo.email;
			$scope.custoSaved = true;
		}

	};

	var classCarousselActive = "car0";
	$scope[classCarousselActive]= "active";

	$scope.validateFly = function(index, indexFlight){

		// Validate
		if ($scope.fligths[index].flight[indexFlight].reserved == false) {
			//$scope.fligths[index].reserved = true;
			$scope.fligths[index].flight[indexFlight].reserved = true;
			
			
			classCarousselActive = "car"+index;
			$scope[classCarousselActive]= "flyOKClass active";
			classFlightActive = "flight"+index+indexFlight;
			$scope[classFlightActive]= "flyOKClass";
			
			
			$scope.custosyntFly.push({"number": $scope.fligths[index].flight[indexFlight].number,
				"indexTour" : index,
				"indexVol" : indexFlight,
				"name" : $scope.fligths[index].name,
				"destination": $scope.fligths[index].destination,
				"date" : $scope.fligths[index].flight[indexFlight].date
			});
	

		} else {
			var tmp = [];
			$scope.custosyntFly.forEach(function(val){
				if (val.number != $scope.fligths[index].flight[indexFlight].number) {
					tmp.push(val);
				}
			});
			$scope.custosyntFly = tmp;
			//$scope.fligths[index].reserved = false;
			$scope.fligths[index].flight[indexFlight].reserved = false;

			classCarousselActive = "car"+index;
			$scope[classCarousselActive]= "flyKOClass active";
			
			classFlightActive = "flight"+index+indexFlight;
			$scope[classFlightActive]= "flyKOClass";
				
		}

	};


	$scope.cancelFly = function(number, indexTour, indexVol){
		var tmp = [];
		$scope.custosyntFly.forEach(function(val){	
			if (val.number != number) {
				tmp.push(val);
			}
		});
		$scope.custosyntFly = tmp;
		$scope.fligths[indexTour].flight[indexVol].reserved = false;
		classFlightActive = "flight"+indexTour+indexVol;
		$scope[classFlightActive]= "flyKOClass";

	};

	
}]);


