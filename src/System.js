var QuickStep = require('QuickStep');
var Book = require('./Book.js');
var Entry = require('./Entry.js');
var Quote = require('./Quote.js');
var Location = require('./Location.js');
var Session = require('./Session.js');
var User = require('./User.js');

var System =  new QuickStep.Model('System', [
	  'User'
	, 'Login'
	, 'Session'
	, 'Locations'
	, 'Entries'
	, 'Books'
	, 'Quotes'
]);

module.exports = System;

System.prototype.init = function(){
	this.Locations =  new QuickStep.Collection(Location);
	this.Entries = new QuickStep.Collection(Entry);
	this.Books = new QuickStep.Collection(Book);
	this.Quotes = new QuickStep.Collection(Quote);
	this.Session = new QuickStep.Collection(Session);
	this.User = new QuickStep.Collection(User);
};

System.prototype.addLocation = function(location){
	var location = new Location(location);
	this.Locations.add(location);
	return location;
}

System.prototype.addEntry = function(entry){
	var entry = new Entry(entry);
	this.Entries.add(entry);
	return entry;
}

System.prototype.addBook = function(book){
	var book = new Book(book);
	this.Books.add(book);
	return book;
}

System.prototype.addQuote = function(quote){
	var quote = new Quote(quote);
	this.Quotes.add(quote);
	return quote;
}

System.prototype.addSession = function(session){
	var session = new Session(session);
	this.Session.add(session);
	return session;
}

System.prototype.addUser = function(user){
	var user = new User(user);
	this.User.add(user);
	return user;
}