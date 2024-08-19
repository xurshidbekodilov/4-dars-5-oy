//1-masala
/*
function func(text) {
    let upperCaseCount = 0;
    let lowerCaseCount = 0;
    for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
            upperCaseCount++;
        } else if (char >= 'a' && char <= 'z') {
            lowerCaseCount++;
        }
    }
    return {
        upperCase: upperCaseCount,
        lowerCase: lowerCaseCount
    };
}
*/

//2-masala
/*
function func(text) {
    let arr = text.split(' ');
    const newArr = arr.map(word => 
        word.split('').reverse().join('')
    );
    const palindromes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === newArr[i]) {
            palindromes.push(arr[i]);
        }
    }
    return palindromes;
}
*/

//3-masala
/*
function func(numbers) {
    let count = {};
    let newArr = [];
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (count[num]) {
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }
    for (let num in count) {
        if (count[num] > 1) {
            newArr.push(Number(num));
        }
    }
    return newArr;
}
*/

//5-masala
/*
function func(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return func(n - 1) + func(n - 2);
}
*/

//6-masala
/*
function func(number) {
    const arr = number.toString().split('');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}
*/

//7-masala 
/*
const morseCode = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
    '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
    '----.': '9', '/': ' '
};
function func(str) {
    const words = str.trim().split('   ');
    let res = '';
    for (const word of words) {
        const letters = word.split(' ');
        for (const letter of letters) {
           res += morseCode[letter] || '?';
        }
        res += ' ';
    }
    return res.trim();
}
*/

//8-masala
/*
function func(text) {
    const wordsArray = text.trim().split(' ');
    const reversedWordsArray = [];
    for (let i = 0; i < wordsArray.length; i++) {
        const word = wordsArray[i];
        let reversedWord = '';
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        reversedWordsArray.push(reversedWord);
    }
    const reversedText = reversedWordsArray.join(' ');
    return reversedText;
}
*/

//9-masala

// Tub sonni aniqlash funksiyasi
/*
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function filterPrimes(arr) {
    const primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
}
*/
