var kittens = [] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name)
}
function destructivelyPrependKitten(name){
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
kittens.shift()
}

function appendKitten(name) {
  var kittens2 = kittens
  return kittens2.concat(name)
}

function prependKitten(name){
  var kittens2 = kittens
  return [name,...kittens2]
}

function removeLastKitten(){
  var kittens2 = kittens
  return kittens2.slice(0,kittens2.length - 1)
}

function removeFirstKitten(){
  var kittens2 = kittens
  return kittens2.slice(1)
}
