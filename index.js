// Add your functions and code here
// kittens = ["Milo", "Otis", "Garfield"];

var destructivelyAppendKitten = name => {
  kittens.push(name);
  return kittens
}

var destructivelyPrependKitten = name => {
  kittens.unshift(name);
  return kittens
}

var destructivelyRemoveLastKitten = () => {
  kittens.pop();
  return kittens
}

var destructivelyRemoveFirstKitten = () => {
  kittens.shift();
  return kittens
}

var appendKitten = name => {
  let out_array = kittens.slice();
  out_array.push(name);
  return out_array
}

var prependKitten = name => {
  let out_array = kittens.slice();
  out_array.unshift(name);
  return out_array
}

var removeLastKitten = () => {
  let out_array = kittens.slice();
  out_array.pop();
  return out_array
}

var removeFirstKitten = () => {
  let out_array = kittens.slice();
  out_array.shift();
  return out_array
}
