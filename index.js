const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
var destructivelyAppendKitten = name => {
	kittens.push(name);
}
var destructivelyPrependKitten = name => {
	kittens.unshift(name);
}

var destructivelyRemoveLastKitten = name => {
	kittens.pop()
}

var destructivelyRemoveFirstKitten = name => {
	kittens.shift()
}

var appendKitten = name =>{
	return [...kittens, name]
}

var prependKitten = name => {
	return [name, ...kittens]
}

var removeLastKitten = () => {
  return kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten() {
  return kittens.slice(1)
}
