var System = require('./System.js');
var Bookdex = new System({User:null});
module.exports = Bookdex;
if(typeof window != 'undefined') {
	window.Bookdex = Bookdex;
}