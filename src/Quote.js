var QuickStep = require('QuickStep');
var Quote = new QuickStep.Model('Comment', [
	  'id'
	, 'locationId'
	, 'text'

	, 'Locations'	
]);

Quote.prototype.init = function(){
	var Bookdex = require('./index.js');
	this.Locations = new QuickStep.Collection(Bookdex.Locations).filter(FilterLocations.bind(this), 'Location.id');
}

function FilterLocations(location){
	if(this.locationId == location.id){
		return true;
	}else{
		return false;
	}
}

module.exports = Quote;