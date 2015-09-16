var QuickStep = require('./QuickStep.js');

var Book = new QuickStep.Model('Book', [
	  'id'
	, 'title'
	, 'author'

	, 'Entries'
	, 'Locations'
	, 'Quotes'
]);

Book.prototype.init = function() {
	this.Locations = new QuickStep.Collection(Bookdex.Locations).filter(FilterLocations.bind(this), 'Location.bookId');
	this.Entries = new QuickStep.Collection(Bookdex.Entries).crossFilter(this.Locations, 'id', 'entryId');
	this.Quotes = new QuickStep.Collection(Bookdex.Quotes).crossFilter(this.Locations, 'locationId', 'id');
};


function FilterLocations(location){
	if(this.id == location.bookId){
		return true;
	}else{
		return false;
	}
}

module.exports = Book;