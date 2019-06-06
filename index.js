var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}

function appendKitten(name){
  var ne = kittens.slice();
  ne.push(name)
  return ne
}

function prependKitten(name){
  var ne = kittens.slice();
  ne.unshift(name)
  return ne
}

function removeLastKitten(){
  var ne = kittens.slice();
  ne.pop()
  return ne
}

function removeFirstKitten(){
  var ne = kittens.slice();
  ne.shift()
  return ne
}
