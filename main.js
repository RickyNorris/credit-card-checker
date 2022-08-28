// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

const allInValid = [invalid1, invalid2, invalid3, invalid4, invalid5]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

const validateCred = (cardNum) => {
    let cardNumber = [...cardNum];
    const endNumber = cardNumber.pop();
    const reverseArray = cardNumber.reverse();

    for (let i = 0; i < reverseArray.length; i++) {
        if ((i % 2) === 0) {
            reverseArray[i] = reverseArray[i] * 2;
            if (reverseArray[i] > 9) {
                reverseArray[i] = reverseArray[i] - 9;
            }
        }
    }

    const cardAccumeulation = reverseArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    const finalNumber = cardAccumeulation + endNumber;


    if ((finalNumber % 10) === 0) {
        return true; // if it is true the it is valid
    } else {
        return false; // if false then is not valid
    }
    // console.log(reverseArray);
    // console.log(cardAccumeulation);
    // console.log(endNumber);
};

function findInvalidCards(nestedArray) {
    const newNestedArray = [];

    // newNestedArray = nestedArray.forEach((array) => {
    //     if (!validateCred(array)) {
    //         return newNestedArray.push(array);
    //     }
    // })

        for (let i = 0; i < nestedArray.length; i++) {
            if (validateCred(nestedArray[i]) === false) {
                //console.log(nestedArray[i]);
                newNestedArray.push(nestedArray[i]);
            }
        }
    return newNestedArray; // nested array of invalid card numbers
};


function idInvalidCardCompanies(invalidCardNums) {
    const badCompainies = [];

    invalidCardNums.forEach((cardNum) => {
        if (cardNum[0] === 3 && (badCompainies.indexOf('Amex') === -1)) {
            badCompainies.push('Amex');
        } else if (cardNum[0] === 4 && (badCompainies.indexOf('Visa') === -1)) {
            badCompainies.push('Visa');
        } else if (cardNum[0] === 5 && (badCompainies.indexOf('Mastercard') === -1)) {
            badCompainies.push('Mastercard');
        } else if (cardNum[0] === 6 && (badCompainies.indexOf('Discover') === -1)) {
            badCompainies.push('Discover');
        } else {
            console.log('Company Not found')
        };
    });
    console.log(badCompainies);
};


//console.log(validateCred(valid1));
// console.log(invalid1);
idInvalidCardCompanies((findInvalidCards(batch)));
//console.log(findInvalidCards(allInValid));















/*
console.log('invalid');
console.log(validateCred(invalid1));
console.log(validateCred(invalid2));
console.log(validateCred(invalid3));
console.log(validateCred(invalid4));
console.log(validateCred(invalid5));

console.log('----------------');

console.log('valid');
console.log(validateCred(valid1));
console.log(validateCred(valid2));
console.log(validateCred(valid3));
console.log(validateCred(valid4));
console.log(validateCred(valid5));

console.log('----------------');

console.log('mystery');
console.log(validateCred(mystery1));
console.log(validateCred(mystery2));
console.log(validateCred(mystery3));
console.log(validateCred(mystery4));
console.log(validateCred(mystery5));
*/