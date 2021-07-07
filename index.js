var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
}

function appendKitten(name){
  let newKittens = kittens.concat(name);
  return newKittens;
}

function prependKitten(name){
  let kitAr = [name];
  let newKittens = kitAr.concat(kittens);
  return newKittens;
}

function removeLastKitten(){
  let removedLast = kittens.slice(0, -1);
  return removedLast;
}

function removeFirstKitten(){
  let removedFirst = kittens.slice(1);
  return removedFirst;
}
