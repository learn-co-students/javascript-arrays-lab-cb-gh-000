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
  let newKittens = [...kittens];
  newKittens.push(name);
  return newKittens;
}
function prependKitten(name) {
  let newKittens = [...kittens];
  newKittens.unshift(name);
  return newKittens;
}
function removeLastKitten() {
  let newKittens = [...kittens];
  newKittens.pop();
  return newKittens;
}
function removeFirstKitten() {
  let newKittens = [...kittens];
  newKittens.shift();
  return newKittens;
}
