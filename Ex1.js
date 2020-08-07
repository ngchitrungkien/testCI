function Opposite(firstNum, n) {
    var arr = new Array
    for (let i = 0; i < n; i++)
        arr.push((firstNum + i))

    console.log("Đối diện với số đầu tiên (" + firstNum + ") là :" + arr[Math.floor(n / 2)])
}