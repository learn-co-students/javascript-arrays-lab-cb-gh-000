const app = "I don't do much."
function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var arr = kittens.slice();
  arr.push(name);
  return arr;
}

function prependKitten(name) {
  var arr = kittens.slice();
  arr.unshift(name);
  return arr;
}

function removeLastKitten() {
  var arr = kittens.slice();
  arr.pop();
  return arr;
}

function removeFirstKitten() {
  var arr = kittens.slice();
  arr.shift();
  return arr;
}
