const app = "I don't do much."

var destructivelyAppendKitten = name => {
    kittens.push(name);
    return kittens;
}

var destructivelyPrependKitten = name => {
    kittens.unshift(name);
    return kittens;
}

var destructivelyRemoveLastKitten = () => {
    kittens.pop();
    return kittens;
}

var destructivelyRemoveFirstKitten = () => {
    kittens.shift();
    return kittens;
}

var appendKitten = name => {
    var newArr = [...kittens, name];
    return newArr;
}

var prependKitten = name => {
    var newArr = [name, ...kittens];
    return newArr;
}

var removeLastKitten = () => {
    return kittens.slice(0, kittens.length-1);
}

var removeFirstKitten = () => {
    return kittens.slice(1, kittens.length);
}
