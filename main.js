//1.1
var a = 2;

function pow (x, n) {
	var a = x; // a was not given a var.
	for (var i = 1; i < n; i++) {
		var a *= x; // since a was not given a var this doesn't mean anything.

	}
	return a; // nothing will return due to no var on a.
}

pow(3, 1); // needs a number value for second parameter
pow(2, 1); // needs a number value for second parameter

//1.2
var i = 0;

var logNTimes = function (str, n) {
	if (i = 0) } // missing statement and }
	while (i < n) {
		console.log(str); // this should go after the i++;
		i++;

	}
};

while (i < 3) {
	logNTimes('Work', 2);
	i++; // no console.log after this.
	console.log(n);
}

//1.3
(function () {
	var url = 'http://openweathermap.com/api/'
	var apiKey = 'lab2-01bd45-30dab-22232';

	function request (path, method) {
		url = url + path + apiKey;
		return htttp.requestSync(url, method);
	}

	var users = request('/users', 'GET');
	var cities = request('/cities', 'GET');
})();

//1.4
var a = 0;
var b = 0; // give b a value.

(function() {
	var a = b = 5;
})();

console.assert(b === undefined);

//2.1
var x = 1;

var c = function (a, b, c) {
	var x = 10;
	var a = 5;

	console.log(x);
	console.log(a); //a is not defined.

	var f = function (a, b, c) {
		var x = 5;
		var b = 10;
		b = a; // b is not defined.
		console.log(b);
		b = c;
	}
	f(a, b, c);

	console.log(b);
}

c(8, 9, 10);