// const app = "I don't do much.";


function destructivelyAppendKitten(name){
  // let kittens = ['Milo', 'Otis', 'Garfield'];
  kittens.push("Ralph");
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob");
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  // kittens.push("Broom");
  var newKittens = [...kittens, "Broom"];
  return newKittens;
}

function prependKitten(name){
  var newKittens = ["Arnold", ...kittens];
  return newKittens;
}

function removeLastKitten(){
var ex = kittens.slice(0,2);
return ex;
}

function removeFirstKitten(){
  var ex = kittens.slice(1);
  return ex;
}
