var QuickStep = require('./QuickStep.js');
var Session = new QuickStep.Model('Session', [
	  'token'
	, 'loginTime'
	, 'userId'
	, 'state'
]);
module.exports = Session;