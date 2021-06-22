function staircase(n) { //6
    // Write your code here
    let str = '';

    for (let i = n; i > 0; i-=3) {
        if (i > 3) {
            // str = str + '***'
            for (let x = 0; x < 3; x++) {
                str = str + '*'
            }
        } else {
            for (let x = i; x > 0; x--) {
                str = str + '*'
            }
        }
        console.log(str);
        str = '';
    }
}

console.log(staircase(6))