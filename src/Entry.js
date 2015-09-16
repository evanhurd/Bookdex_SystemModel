var QuickStep = require('QuickStep');
var Bookdex = require('./index.js');
var Entry = new QuickStep.Model('Entry', [
	  'id'
	, 'name'

	, 'Locations'
]);

module.exports = Entry;