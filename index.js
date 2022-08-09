function callbackFunction(parameter) {
    console.log(parameter)
}

function receivesAFunction(callbackFunction) {
    return callbackFunction();
}

function returnsANamedFunction() {
    return function aNamedFunction() {
        console.log("test2")

    }
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log("test")
    };
}

// function returnsANamedFunction() {
//     callbackFunction();
// }
