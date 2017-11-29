var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name){
  return kittens.push(name);
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
  var temp = [...kittens, name];
  return temp;
}

function prependKitten(name){
  var temp = [name, ...kittens];
  return temp;
}

function removeLastKitten(){
  var temp = kittens.slice(0, kittens.length-1);
  return temp;
}

function removeFirstKitten(){
  var temp = kittens.slice(1, kittens.length);
  return temp;
}
