var rect = require('./rectangle')

function solveRect(l,b) {
    console.log("solving for rectangle with l = " + l + "and b = " + b);
    if (l<=0 || b<=0) {
        console.log("rectangle dimensions should be greater than zero")
    }
    else {
        console.log("the area of rectangle is " + rect.area(l,b));
        console.log("the perimeter of rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,5);
