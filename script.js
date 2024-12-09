let l = 3;
let w = 4;
let r = 6;
let h = 8;
let b = 10;

const rectangleArea = (1 * w)
const triangleArea = (.5 * 1 * w)
const circleArea = (3.14 * r * 2)

console.log(rectangleArea);
console.log(triangleArea);
console.log(circleArea);


////////////or//////////////

function area(shape, measure1, measure2){
    if(shape === "rectangle"){
      return measure1 * measure2
    } else if(shape === "triangle"){
         return 0.5 * measure1 * measure2;
    } else if(shape === "circle"){
         return Math.PI * measure1 * measure2;
    }else{
         return "Shape not recognized";
    }
}


console.log(area("rectangle", 10, 5));