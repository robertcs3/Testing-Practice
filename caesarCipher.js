function caesarCipher(string, key) {
    let numbers = [];

    for (let i = 0; i < string.length; i++) {
        numbers.push(string.charCodeAt(i));
    }

    return numbers;
}


module.exports = caesarCipher;