const app = "I don't do much."
function destructivelyAppendKitten(name){
return  kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
var  newKittens = kittens.slice();
  newKittens.push(name);
  return newKittens;
}
function prependKitten(name){
var  newKittens = kittens.slice();
newKittens.unshift(name);
return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice();
  newKittens.pop();
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice();
  newKittens.shift();
  return newKittens;
}
