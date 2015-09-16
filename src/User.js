var QuickStep = require('QuickStep');

var User = new QuickStep.Model('Book', [
	  'id'
	, 'username'
	, 'password'
	, 'firstName'
	, 'lastName'
	, 'email'
]);
module.exports = User;