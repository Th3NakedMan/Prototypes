angular.module('artmobilis').factory('LocationsService', [ function() {

  var locationsObj = {};

  locationsObj.savedLocations = [
    {
		id: 0,
		name : 'Le hublot',
		sousTitre: 'Rue de Roquebillière - Nice',
		url: 'http://lehublot.net/',
		vignette: 'img/vignettes/hublot.jpg',
		lat : 43.7141806,
		lng : 7.2889964,
		icon :'local_icons.purple_icon'
    }
	
  ];

  return locationsObj;

}]);