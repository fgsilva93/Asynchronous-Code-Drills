//Timimn Out//

// function someWord(message) {
//     console.log(message); 
// }

// someWord('Hi, what up.'); 

// function SomeWord(message) {
//     setTimeout(() => {
//         console.log(message);
//     }, 2000)
// }

// SomeWord('Hi, what up!');

// function getWords(message) {
//     setTimeout(() => {
//         console.log(message);
//     }, 3000);
//     setTimeout(() => {
//         console.log(message);
//     },2000);
//     setTimeout(() => {
//         console.log(message);
//     }, 1000)
// }

// getWords('Hello!');

//Callbacks and Recursion//

function done () {
    console.log("Job's Done!"); 
}

function countdown (num, callback) {
    setTimeout(() => {
        if(num > 0) {
            console.log(num);
            countdown(num-1, callback);
        }
        else {
            callback();
        }
    }, 1000)
}

countdown(10, done);


//Promises, Promises// 

let lunchTime = false;

function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        if (lunchTime === true) {
            let food = { lunch: "Chicken Bowl", drink: "Passion Fruit" };
            resolve(food);
        }
        else {
            // lunchTime = false;
            // Promise.reject().catch(function() {
            //     err = 'Not something you will eat!';
            //     throw new Error(err);
            // })
            let err = new Error('Not some thing you will eat!');
            reject(err);
        }
    })
}

orderMeSomeFood().then((a) => {
    console.log(a);
}).catch((e) => {
    console.log(e);
});



// function ordering() {
//     orderMeSomeFood
//     .then(food => {
//         console.log(food);
//     })
//     .catch(noFood => {
//         console.log(noFood)
//     })
// }

// orderi
