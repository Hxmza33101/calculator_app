// Simple method using the inbuilt feature of js, the parseInt method where the first parameter is a string and the second is a radix.

function binaryToDecimal1(binaryString1) {
    let binary = parseInt(binaryString1, 2);
    return binary;
}

console.log(binaryToDecimal1('1001'));


function binaryToDecimal(binaryString) {
    let decimal = 0;
    let power = 0;
    for (let i = binaryString.length-1; i >= 0; i--) {
        decimal += binaryString[i] * (2**power);
        power++;
    }
    return decimal;
}

console.log(binaryToDecimal('1001'));