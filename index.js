const app = "I don't do much."

const destructivelyAppendKitten = name => window.kittens.push(name)

const destructivelyRemoveFirstKitten = name => window.kittens.shift(name)

const destructivelyPrependKitten = name => window.kittens.unshift(name)

const destructivelyRemoveLastKitten = name => window.kittens.pop(name)

const  prependKitten = name => [name,...window.kittens]

const appendKitten = name => [...window.kittens,name]

const removeLastKitten = name => window.kittens.slice(0,window.kittens.length-1)

const removeFirstKitten = name => window.kittens.slice(1)
