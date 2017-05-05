const app = "I don't do much."

let kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten (name) {
  kittens.push(name);
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten (name) {
  kittens.pop();
}

function destructivelyRemoveFirstKitten (name) {
  kittens.shift();
};

function appendKitten(name) {
  let newKittens = []
  newKittens = kittens.slice()
  newKittens.push(name)
  return newKittens
}

function prependKitten(name) {
  let newKittens = []
  newKittens = kittens.slice()
  newKittens.unshift(name)
  return newKittens
}

function removeLastKitten() {
  let newKittens = []
  newKittens = kittens.slice()
  newKittens.pop()
  return newKittens
}

function removeFirstKitten() {
  let newKittens = []
  newKittens = kittens.slice()
  newKittens.shift()
  return newKittens
}
