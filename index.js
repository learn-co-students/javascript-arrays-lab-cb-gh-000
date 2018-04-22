const app = "I don't do much."
const app = "I don't do much."
kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name) {
  kittens = kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens = kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens = kittens.pop(name)
}

function destructivelyRemoveLastKitten(name) {
  kittens = kittens.pop(name)
}

function destructivelyRemoveFirstKitten(name) {
  kittens = kittens.unshift(name)
}

function appendKitten(name) {
  return kittens.push(name)
}

function prependKitten(name) {
  return kittens.unshift(name)
}


function removeLastKitten(name) {
  return kittens.pop(name)
}

function removeFirstKitten(name) {
  return kittens.unshift(name)
}
