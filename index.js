const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

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

function appendKitten(name){
  var copy = kittens.slice();
  copy.push(name)
  return copy

}

function prependKitten(name){
  var copy = kittens.slice();
  copy.unshift(name)
  return copy
}

function removeLastKitten(){
  var copy = kittens.slice();
  copy.pop()
  return copy
}

function removeFirstKitten(){
  var copy = kittens.slice();
  copy.shift()
  return copy
}
