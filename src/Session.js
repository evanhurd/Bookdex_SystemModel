var QuickStep = require('QuickStep');
var Session = new QuickStep.Model('Session', [
	  'token'
	, 'loginTime'
	, 'userId'
	, 'state'
]);
module.exports = Session;