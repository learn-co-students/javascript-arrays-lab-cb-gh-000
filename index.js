var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (element) {
  kittens.push(element)
}

function destructivelyPrependKitten (element) {
  kittens.unshift(element)
}

function destructivelyRemoveLastKitten () {
  kittens.pop()
}

function destructivelyRemoveFirstKitten () {
  kittens.shift()
}

function appendKitten (name) {
  var arrayNew = [...kittens, name]
  return arrayNew
}

function prependKitten (name) {
  var arrayNew = [name, ...kittens]
  return arrayNew
}

function removeLastKitten () {
  var arrayNew = kittens.slice(0,-1)
  return arrayNew
}

function removeFirstKitten () {
  var arrayNew = kittens.slice(1)
  return arrayNew
}
