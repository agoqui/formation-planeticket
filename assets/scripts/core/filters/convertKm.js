mainApp.filter('convertKm', function(){
	return function(input,param){
		console.log(input);
		var kmH = input
		if (param == 'kmH') kmH = input * 3.6;
		return kmH;
	}
});