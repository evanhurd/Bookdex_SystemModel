var QuickStep = require('./QuickStep.js');
var Bookdex = require('./index.js');
var Location = new QuickStep.Model('Location', [
	  'id'
	, 'entryId'
	, 'bookId'
	, 'from'
	, 'to'

	, 'Book'
	, 'Quote'
	, 'Entry'
]);

module.exports = Location;