const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

const destructivelyAppendKitten = (kitten) => {
  kittens.push(kitten)
  return kittens
}

const destructivelyPrependKitten = (kitten) => {
  kittens.unshift(kitten)
  return kittens
}

const destructivelyRemoveLastKitten = () => {
  kittens.pop()
  return kittens
}

const destructivelyRemoveFirstKitten = () => {
  kittens.shift()
  return kittens
}

const appendKitten = (kitten) => {
  let kittensEdited = kittens.slice(0)
  kittensEdited.push(kitten)
  return kittensEdited
}

const prependKitten = (kitten) => {
  let kittensEdited = kittens.slice(0)
  kittensEdited.unshift(kitten)
  return kittensEdited
}

const removeLastKitten = () => {
  let kittensEdited = kittens.slice(0)
  return kittensEdited.splice(0, kittens.length - 1)
}

const removeFirstKitten = () => {
  let kittensEdited = kittens.slice(0)
  return kittensEdited.splice(1, kittens.length - 1)
}
