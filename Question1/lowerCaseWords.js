// Yasaman Mirvahabi Sabet
// 101217770
// Question 1: ES6 Features


function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input should be an array!!");
            return;
        }

        const filteredArray = mixedArray
            .filter(item => typeof item === "string")
            .map(item => item.toLowerCase());
        resolve(filteredArray);    
    });
}

// Example:

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.error(error));