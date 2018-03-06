module.exports.add = add;
module.exports.square = square;
module.exports.factorials = factorials;

function add (one, two) {
	return ("%d plus %d is %d",one,two,one+two);
}
function square (one) {
	return ("%d square is $d",one,one*one);
}
function factorials (one) {
	if (one === 0) {
		return "0 factorial is 1";
	}else {
		return ("%d factorial is %d",one,one * factorial(one));
	}
}
function factorial (val) {
	factor = 1;
	for (var i = val; i > 0; i--) {
		factor = factor*i
	}
	return factor;
}