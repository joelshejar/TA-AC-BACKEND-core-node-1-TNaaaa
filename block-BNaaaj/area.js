function squareArea(num){
   return  num*num
}

function rectangleArea(l,b){
    return  l*b
}
function circleArea(r){
    return (22*r*r)/7
}


module.exports = {
    square: squareArea,
    rectangle: rectangleArea,
    circle: circleArea
}










