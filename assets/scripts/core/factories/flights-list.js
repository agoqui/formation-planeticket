mainApp.factory('flightsList', function(){

	return {
		'getFlights' : function() {
			var list = {
						"0": {
							"destination": "salvador",
							"name": "Salvador da Bahia, Brasil",
							"reserved": false,
							"flight": {
										"0": {
											"number": "11111",
											"date": "02/06/2016",
											"reserved": false

										},
										"1": {
											"number": "11112",
											"date": "05/06/2016",
											"reserved": false

										},
										"2": {
											"number": "11113",
											"date": "08/06/2016",
											"reserved": false

										},
										"3": {
											"number": "11114",
											"date": "10/06/2016",
											"reserved": false

										}
									}
						},
						"1": {
							"destination": "lisboa",
							"name": "Lisboa, Portugal ",
							"reserved": false,
							"flight": {
										"0": {
											"number": "22221",
											"date": "02/08/2016",
											"reserved": false

										},
										"1": {
											"number": "22222",
											"date": "05/08/2016",
											"reserved": false

										},
										"2": {
											"number": "22223",
											"date": "08/08/2016",
											"reserved": false

										},
										"3": {
											"number": "22224",
											"date": "10/08/2016",
											"reserved": false

										}
									}
						},
						"2": {
							"destination": "barcelona",
							"name": "Barcelona, Catalunya",
							"reserved": false,
							"flight": {
										"0": {
											"number": "33331",
											"date": "08/10/2016",
											"reserved": false

										},
										"1": {
											"number": "33332",
											"date": "15/10/2016",
											"reserved": false

										},
										"2": {
											"number": "33333",
											"date": "20/10/2016",
											"reserved": false

										},
										"3": {
											"number": "33334",
											"date": "25/10/2016",
											"reserved": false

										}
									}
						},
						"3": {
							"destination": "buenosaires",
							"name": "Buenos Aires, Argentina",
							"reserved": false,
							"flight": {
										"0": {
											"number": "44441",
											"date": "08/11/2016",
											"reserved": false

										},
										"1": {
											"number": "44442",
											"date": "15/11/2016",
											"reserved": false

										},
										"2": {
											"number": "44443",
											"date": "18/11/2016",
											"reserved": false

										},
										"3": {
											"number": "44444",
											"date": "30/11/2016",
											"reserved": false

										}
									}
							}
						};
					

			return list;
		}
	};
});