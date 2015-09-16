var QuickStep = require('./QuickStep.js');
var Bookdex = require('./index.js');
var Entry = new QuickStep.Model('Entry', [
	  'id'
	, 'name'

	, 'Locations'
]);

module.exports = Entry;