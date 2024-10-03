// Yasaman Mirvahabi Sabet
// 101217770
// Question 2: Promises


// Resolve a promise
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({message: "Resolved promise after 500 ms!!"});
        }, 500);
    });
};

// Reject a promise
const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject({error: "Rejected promise after 500 ms!!"});
        }, 500);
    });
};

// Calling the promise
resolvedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

rejectedPromise()
    .then((result) => console.log(result))
    .catch((error) => console.log(error));