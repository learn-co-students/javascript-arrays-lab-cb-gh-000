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
  kittens.push(name)
}

function prependKitten(name){
  kittens.unshift(name)
}

function removeLastKitten(){
  kittens.pop()
}

function removeFirstKitten(){
  kittens.shift()
}
