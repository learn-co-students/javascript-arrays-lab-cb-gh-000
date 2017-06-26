//arrays

function destructivelyAppendKitten(name){
  kittens.push(name)
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens = kittens.slice(0, kittens.length - 1)
}

function destructivelyRemoveFirstKitten(){
  kittens = kittens.slice(1)
}

function appendKitten(name){
 const newArray = [...kittens, name]
 return newArray
}

function prependKitten(name){
  const newArray = [name, ...kittens]
  return newArray
}

function removeLastKitten(name){
  const newArray = kittens.slice(0, kittens.length - 1)
  return newArray
}

function removeFirstKitten(name){
  const newArray = kittens.slice(1)
  return newArray
}
