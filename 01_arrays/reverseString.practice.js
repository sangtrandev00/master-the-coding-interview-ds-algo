

function reverse (str) {

    if(!str || typeof str != 'string' || str.length < 2 ) return str;

    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += str[str.length - 1 - i]
    }
    return result;
    // return str.split('').reverse().join('')
}

const reverse2 = (str) => str.split('').reverse().join('') // ES6 Javascript1

console.log("Tran Nhat Sang")
console.log("abcd")