var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function appendKitten ( value){
  return [...kittens,value];
}
function prependKitten(value){
  return [value,...kittens];
}

function destructivelyAppendKitten(value){
  return kittens.push(value);
}
function destructivelyPrependKitten(value){
  return kittens.unshift(value);
}

// remove Last Kittens
function removeLastKitten(){
  const removeLastKitenArray= kittens.slice(0, kittens.length -1);
  return removeLastKitenArray;
}
function destructivelyRemoveLastKitten (){
  return kittens.pop();
}

//remove First Kittens
function destructivelyRemoveFirstKitten(){
    return kittens.shift();

}
function removeFirstKitten(){
   const result = kittens.slice(1,kittens.length);
   return result;

}
