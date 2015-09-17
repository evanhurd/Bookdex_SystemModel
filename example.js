var Bookdex = require('index.js');

Bookdex.addBook({id:1,title:'Book 1',author:'A'});
Bookdex.addBook({id:2,title:'Book 2',author:'A'});
Bookdex.addBook({id:3,title:'Book 3',author:'A'});

Bookdex.addEntry({id:1,name:'Entry 1'});
Bookdex.addEntry({id:2,name:'Entry 2'});
Bookdex.addEntry({id:3,name:'Entry 3'});

Bookdex.addLocation({id:1, entryId:1, bookId:1, from:1, to:2});
Bookdex.addLocation({id:2, entryId:2, bookId:1, from:1, to:2});
Bookdex.addLocation({id:3, entryId:3, bookId:1, from:1, to:2});

Bookdex.addLocation({id:4, entryId:2, bookId:2, from:1, to:2});
Bookdex.addLocation({id:5, entryId:3, bookId:2, from:1, to:2});

Bookdex.addLocation({id:6, entryId:1, bookId:3, from:1, to:2});
Bookdex.addLocation({id:7, entryId:2, bookId:3, from:1, to:2});

Bookdex.addQuote({id:1,text:'Quote 1', locationId:1});
Bookdex.addQuote({id:2,text:'Quote 2', locationId:2});
Bookdex.addQuote({id:3,text:'Quote 3', locationId:4});