const app = "I don't do much."
var kittens = [
  "Milo",
  "Otis",
  "Garfield"
];
function destructivelyAppendKitten(name) {
  kittens.push(name);
}
destructivelyAppendKitten("Ralph");

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
}
destructivelyPrependKitten("Bob");

function destructivelyRemoveLastKitten() {
  kittens.pop();
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}
destructivelyRemoveFirstKitten();

function appendKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.push(name);
  return newKittens;
}
appendKitten("Kek");

function prependKitten(name) {
  var newKittens = kittens.slice(0);
  newKittens.unshift(name);
  return newKittens;
}
prependKitten("Monk");

function removeLastKitten() {
  var newKittens = kittens.slice(0);
  newKittens.pop();
  return newKittens;
}
removeLastKitten();

function removeFirstKitten() {
  var newKittens = kittens.slice(0);
  newKittens.shift();
  return newKittens;
}
removeLastKitten();
