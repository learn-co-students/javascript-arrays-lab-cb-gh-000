var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function appendKitten(name){
  return [...kittens, name];
}

function prependKitten(name){
  return [name, ...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, -1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}

function destructivelyAppendKitten(name){
  kittens = appendKitten(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens = prependKitten(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens = removeLastKitten();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens = removeFirstKitten();
  return kittens;
}
