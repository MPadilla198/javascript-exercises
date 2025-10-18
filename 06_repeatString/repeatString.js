const repeatString = function(str, number) {
    if (number < 0) {
        return "ERROR"
    }
    
    let new_str = ""
    for (let i = 0; i < number; i++) {
        new_str += str
    }
    return new_str
};

// Do not edit below this line
module.exports = repeatString;
