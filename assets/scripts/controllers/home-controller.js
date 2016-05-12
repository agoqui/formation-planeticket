mainApp.controller('HomeController', ['$scope',function($scope) { 

	$scope.titre = 'Recherche par ville';
	$scope.custoDisabled = false;
	$scope.fligths = [];
	$scope.btnSalvador = true;
	$scope.btnLisboa = true;
	$scope.btnBuenoaires = true;
	$scope.btnBarcelona = true;


	$scope.saveCustomer = function(){

		
		//$scope.custoDisabled = true;
		var re = new RegExp("^[0-9]{10}$");
		console.log($scope.custo.email);
		console.log(re.test($scope.custo.phone));
		if(!re.test($scope.custo.phone)) {
			
			$scope.custoForm.$valid = false;
		}

	};

	$scope.validateFly = function(dest){

		console.log(dest);
		
		$scope.fligths.push({'destination':dest});
		switch(dest) {
			case 'salvador':
				$scope.carsalvador= "flyOKClass";
				$scope.btnSalvador = false;
				break;
			case 'lisboa':
				$scope.carlisboa= "flyOKClass";
				$scope.btnLisboa = false;
				break;
			case 'barcelona':
				$scope.carbarcelona= "flyOKClass";
				$scope.btnBarcelona = false;
				break;
			case 'buenoaires':
				$scope.carbuenoaires= "flyOKClass";
				$scope.btnBuenoaires = false;
				break;

		}
		


	};

	$scope.cancelFly = function(dest){

		var tmpfly = [];
		$scope.fligths.forEach(function(val){
			console.log( val);
			if (val.destination != dest) tmpfly.push(val);
		});
		$scope.fligths = tmpfly
		console.log($scope.fligths);

		
		//$scope.fligths.push({'destination':dest});
		switch(dest) {
			case 'salvador':
				$scope.carsalvador= "flyKOClass";
				$scope.btnSalvador = true;
				break;
			case 'lisboa':
				$scope.carlisboa= "flyKOClass";
				$scope.btnLisboa = true;
				break;
			case 'barcelona':
				$scope.carbarcelona= "flyKOClass";
				$scope.btnBarcelona = true;
				break;
			case 'buenoaires':
				$scope.carbuenoaires= "flyKOClass";
				$scope.btnBuenoaires= true;
				break;

		}

	};



	
}]);


