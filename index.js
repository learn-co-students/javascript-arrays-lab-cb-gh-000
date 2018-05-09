const app = "I don't do much."
var kittens = ['Milo', 'Otis', 'Garfield']
var destructivelyAppendKitten=(name)=>{kittens.push(name);return kittens;}
var destructivelyPrependKitten=(name)=>{kittens.unshift(name);return kittens;}
var destructivelyRemoveLastKitten=()=>{kittens.pop();return kittens;}
var destructivelyRemoveFirstKitten=()=>{kittens.shift();return kittens;}
var appendKitten=(name)=>[...kittens, name]
var prependKitten=(name)=>[name, ...kittens]
var removeLastKitten=()=>kittens.slice(0,kittens.length-1);
var removeFirstKitten=()=>kittens.slice(1);