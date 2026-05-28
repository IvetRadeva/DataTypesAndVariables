function solve (num1, num2, num3) {

    let numbers = [num1, num2, num3];
    let biggest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > biggest) {
            biggest = numbers[i]; 
        }
    }

    console.log(biggest);
}

solve (-2,7,3);