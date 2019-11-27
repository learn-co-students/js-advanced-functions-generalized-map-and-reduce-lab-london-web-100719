// Add your functions here

const map = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]));
    };
    return newArray;
}

const reduce = (array, callback, startValue = null) => {
    let endValue = (!!startValue) ? startValue : array[0]
    let i = (!!startValue) ? 0 : 1
    for (; i < array.length; i++) {
        endValue = callback(array[i], endValue);
    } 
    return endValue;
}