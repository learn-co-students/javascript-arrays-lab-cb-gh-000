var kittens = ["Milo", "Otis", "Garfield"]

//Adds a new name to the end of the kittens array, mutating the original kittens array
function destructivelyAppendKitten(name){
return kittens.push(name)
}

//Adds a new name to the start of the kittens array, mutating the original kittens array
function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

//Removes the last name from the kittens array, mutating the original array
function destructivelyRemoveLastKitten(name){
  return kittens.pop()
}

//Removes first name from the kittens array, mutating the original array
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
}

//Adds new name to the end of a newKittens array, leaving the original kittens array unchanged
function appendKitten(name){
  var newKittens = [...kittens, name]
  return newKittens
}

//Adds new name to the start of a newKittens array, leaving the original kittens array unchanged
function prependKitten(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

//Removes all the names from the kittens array except for the last one, placing them into a new array which has the final name removed
function removeLastKitten(name){
  return kittens.slice(0, kittens.length-1)
}

//
function removeFirstKitten(name){
  return kittens.slice(1, kittens.length)
}
