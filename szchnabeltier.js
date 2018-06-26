// JavaScript Document

function getTriangleArea(a, h) {
	if ((a <= 0) && (h <= 0 )) {
		document.write('Nieprawidłowe dane')
		
	}
	return a*h/2
}
//console.log (getTriangleArea(10, 26));

var triangle1Area = getTriangleArea(10, 15);
console.log (triangle1Area);
var triangle2Area = getTriangleArea(25, 17);
console.log (triangle2Area);
var triangle3Area = getTriangleArea(3, 19);
console.log (triangle3Area);