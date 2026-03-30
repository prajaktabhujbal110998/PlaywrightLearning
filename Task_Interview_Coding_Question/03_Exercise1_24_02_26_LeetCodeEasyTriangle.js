// Triangle Classifier:
// Write a program that classifies a triangle based on its side lengths. Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). Use an if-else statement to classify the triangle.

let Side1 = 20, Side2 = 10, Side3 = 30;

if(Side1 == Side2 && Side2 == Side3 && Side3 == Side1){
    console.log("This is a Equilateral Triangle");
}
else if(Side1 == Side2 || Side2 == Side3 || Side3 == Side1){
    console.log("This is a Isosceles Triangle");
}
else {
    console.log("This is a Scalene Triangle");
}

