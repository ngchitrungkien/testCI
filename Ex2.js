function sapXep(s1, s2) {
    let s1Arr = s1.split("");
    let s2Arr = s2.split("");
    let sxArr = [];
    for (i = 0; i < s2Arr.length; i++) {
        if (s1Arr[i] != undefined) {
            sxArr.push(s1Arr[i]);
        }
        if (s2Arr[i] != undefined) {
            sxArr.push(s2Arr[i]);
        }
    }
    console.log(sxArr);
}
sapXep('super', 'tower');
