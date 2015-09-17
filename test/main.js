var assert = require("assert");

describe('Bookdex_ModelSystem Tests', function(){
	Bookdex = require('../src/index.js'); 

	it('Add Books', function(done){
		Bookdex.addBook({id:1,title:'Book 1',author:'A'});
		Bookdex.addBook({id:2,title:'Book 2',author:'A'});
		Bookdex.addBook({id:3,title:'Book 3',author:'A'});
		assert.equal(Bookdex.Books.length, 3, 'There should be three Books!');
		done();
	});

	it('Add Entries', function(done){
		Bookdex.addEntry({id:1,name:'Entry 1'});
		Bookdex.addEntry({id:2,name:'Entry 2'});
		Bookdex.addEntry({id:3,name:'Entry 3'});
		assert.equal(Bookdex.Entries.length, 3, 'There should be three Entries!');
		done();
	});

	it('Add Locations', function(done){
		Bookdex.addLocation({id:1, entryId:1, bookId:1, from:1, to:2});
		Bookdex.addLocation({id:2, entryId:2, bookId:1, from:1, to:2});
		Bookdex.addLocation({id:3, entryId:3, bookId:1, from:1, to:2});

		Bookdex.addLocation({id:4, entryId:2, bookId:2, from:1, to:2});
		Bookdex.addLocation({id:5, entryId:3, bookId:2, from:1, to:2});

		Bookdex.addLocation({id:6, entryId:1, bookId:3, from:1, to:2});
		Bookdex.addLocation({id:7, entryId:2, bookId:3, from:1, to:2});
		assert.equal(Bookdex.Locations.length, 7, 'There should be seven Locations!');
		done();
	});

	it('Add Quotes', function(done){
		Bookdex.addQuote({id:1,text:'Quote 1', locationId:1});
		Bookdex.addQuote({id:2,text:'Quote 2', locationId:2});
		Bookdex.addQuote({id:3,text:'Quote 3', locationId:4});
		assert.equal(Bookdex.Quotes.length, 3, 'There should be three Quotes!');
		done();
	});

	it('Verify Linking', function(done){
		setTimeout(function(){
			assert.equal(Bookdex.Books[0].Locations.length, 3, 'Bookdex.Book[0] should have three locations');
			assert.equal(Bookdex.Books[1].Locations.length, 2, 'Bookdex.Book[1] should have two locations');
			assert.equal(Bookdex.Books[2].Locations.length, 2, 'Bookdex.Book[2] should have two locations');

			assert.equal(Bookdex.Books[0].Entries.length, 3, 'Bookdex.Book[0] should have three Entries');
			assert.equal(Bookdex.Books[1].Entries.length, 2, 'Bookdex.Book[1] should have two Entries');
			assert.equal(Bookdex.Books[2].Entries.length, 2, 'Bookdex.Book[2] should have two Entries');

			assert.equal(Bookdex.Quotes[0].Locations.length, 1, 'Bookdex.Quotes[0] should have one Location');
			assert.equal(Bookdex.Quotes[1].Locations.length, 1, 'Bookdex.Quotes[0] should have one Location');
			assert.equal(Bookdex.Quotes[2].Locations.length, 1, 'Bookdex.Quotes[0] should have one Location');
			done();
		},200);
	});

});