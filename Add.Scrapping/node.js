const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


/* value to change */
var count = 10;

/* value can't be more than 30, because of limit on site */
if (count > 30)
	count = 30;

var products = new Array(count);

console.log('Counting unit value for RAM memory.');
console.log('How much do you pay for 1 GB memory?');

request('https://www.morele.net/komputery/podzespoly-komputerowe/pamieci-ram-38/,,,,,,,,0,,,,21239O668024/1/', function (error, response, body) {

	var dom = (new JSDOM(body, {contentType: "text/html"}));
	  
	// links: 0-1, 2-3, 4-5, max=60
	// price: 0,1,2,3,4,5, max = 30
	// feature: 0,1,2,3,4, max = 30 (3 = częstotliwość, 7 = pojemność)
	var links = dom.window.document.querySelectorAll("a.productLink");
	var price = dom.window.document.querySelectorAll("div.price-new");
	var feature = dom.window.document.querySelectorAll("div.cat-product-features");
	  
	var i;
	for (i = 0; i < count; i++) {
		var temp = new Array(5);
		var link_insert = links[i*2].title;
		var price_insert = price[i].innerHTML;
		
		var childs = feature[i].childNodes;
		var freq_insert = childs[3].childNodes[1].innerHTML;
		var amount_insert = childs[7].childNodes[1].innerHTML;
		
		var unit_value = parseInt(price_insert) / parseInt(amount_insert);
		products[i] = new Array(link_insert, price_insert, amount_insert, unit_value);
	};
	/* sorting by unit value ascending */
	products.sort(function(a, b) {
		if (a[3] > b[3]) {
			return 1;
		}
		if (a[3] < b[3]) {
			return -1;
		}
		return 0;
	});
	console.log(products);
});
