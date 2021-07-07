var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  return kittens.push(name);
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  return kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}

function appendKitten(name){
  var dontKnow = [...kittens,'Broom'];
  return dontKnow;
}

function prependKitten(name){
  var anotherThing = ["Arnold",...kittens];
  return anotherThing;
}

function removeLastKitten(){
  var something = kittens.slice(0, kittens.length - 1);
  return something;
}

function removeFirstKitten(){
  var somenewArray = kittens.slice(1);
  return somenewArray;
}
