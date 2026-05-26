function solve (n) {
    let number = Number(n);

    for (let i = 0; i < number; i++) {
        let result = String. fromCharCode(97+i);

        for (let j = 0; j < number; j++) {
            let secondResult = String. fromCharCode(97+j);
        

        for (let k = 0; k < number; k++) {
            let thirdResult = String. fromCharCode(97+k);

            console.log(result + secondResult + thirdResult);
        }
    }
    }
}
solve('3')