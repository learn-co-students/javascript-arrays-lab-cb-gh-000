const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
 }
function destructivelyRemoveLastKitten() {
  kittens.pop()
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}
function prependKitten(name) {
  return [name, ...kittens]
 }
function removeLastKitten() {
  var kittens = [...window.kittens]
  kittens.length = kittens.length - 1
  return kittens
}
function removeFirstKitten() {
  return kittens.slice(1)
}
