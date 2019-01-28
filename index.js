var kittens = [ 'Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here

function destructivelyAppendKitten (name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  return kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift()
}

function appendKitten(name) {
  var added = kittens.concat([name])
  return added
}

function prependKitten(name) {
  var added = [name].concat(kittens)
  return added
}

function removeLastKitten() {
  var removed = kittens.slice(0,kittens.length -1)
  return removed
}

function removeFirstKitten() {
  var removed = kittens.slice(1)
  return removed
}
