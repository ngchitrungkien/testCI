function Opposite(firstNum, n) {
    var arr = new Array
    for (let i = 0; i < n; i++){
        arr.push(i)
    }
    
    if (firstNum < (n/2)) {
        console.log("Đối diện với số đầu tiên (" + firstNum + ") là :"
        + arr[firstNum + (n/2)])
    } else if (firstNum == (n/2)) {
        console.log("Đối diện với số đầu tiên (" + firstNum + ") là :"
        + arr[0])
    } else {
        console.log("Đối diện với số đầu tiên (" + firstNum + ") là :"
        + arr[firstNum - (n/2)])
    }

}
    