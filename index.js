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
  z=x.slice(1);
  console.log(z);
  return z;
}