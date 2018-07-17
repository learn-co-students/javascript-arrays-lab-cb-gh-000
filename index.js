// Add your functions and code here
var kittens = []
var kittens1 = []

var destructivelyAppendKitten = (name) =>{
  kittens.push(name)
}

var destructivelyPrependKitten = (name) =>{
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = () =>{
  kittens.pop()
}

var destructivelyRemoveFirstKitten = () =>{
  kittens.shift()
}

var appendKitten = (name) => {
  return [...kittens,name]
}

var prependKitten = (name) =>{
  return [name,...kittens]
}

var removeLastKitten = () =>{
   kittens1 = kittens.slice(0,kittens.length-1)
   return kittens1
}

var removeFirstKitten = () =>{
  kittens1 = kittens.slice(1,kittens.length)

  return kittens1
}