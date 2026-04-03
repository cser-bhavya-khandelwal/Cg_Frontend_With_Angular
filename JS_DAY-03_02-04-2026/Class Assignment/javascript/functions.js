function greet(name) {
    return "Hello " + name;
}

const shout = function(msg) {
    return msg.toUpperCase();
};

function processUser(name, callback) {
    return callback(greet(name));
}


const result = processUser("Bhavya", function(message) {
    return shout(message);
});

console.log(result);