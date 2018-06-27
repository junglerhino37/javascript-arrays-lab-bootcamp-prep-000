const app = "I don't do much.";
var kittens=["Milo", "Otis", "Garfield"];

destructivelyAppendKitten(1);

function destructivelyAppendKitten(y){
  return  kittens.push(y)
}

function destructivelyPrependKitten(y){
  return kittens.unshift(y)
}

function removeFirstKitten(x){
  return kittens.slice(1)
}

function destructivelyRemoveLastKitten(x){
  kittens.pop()
}

function removeLastKitten(){
 x=kittens.slice(0,kittens.length-1)
 return  x
}