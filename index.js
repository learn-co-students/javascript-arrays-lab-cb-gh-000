const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

var kittens = () => {
  var kittens = ["Milo", "Otis", "Garfield"]
}

var destructivelyAppendKitten = (name) => {
  kittens.push(name)
  return kittens
}

var destructivelyPrependKitten = (name) => {
  kittens.unshift(name)
  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop(name)
  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift()
  return kittens
}

var appendKitten = (name) => {
  return [...kittens, name]
}

var prependKitten = (name) => {
  return [name, ...kittens]
}

var removeLastKitten = () => {
  var a = kittens.slice(0, kittens.length -1)
  return a
}

var removeFirstKitten = () => {
  var a = kittens.slice(1)
  return a
}
