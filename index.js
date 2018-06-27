const app = "I don't do much.";
var kittens=["Milo", "Otis", "Garfield"];

destructivelyAppendKitten(1);

function destructivelyAppendKitten(y){
  return  kittens.push(y)
}

function destructivelyPrependKitten(x,y){
  x.unshift(y);
  console.log(x);
  return x;
}

function removeFirstKitten(x){
  z=x.slice(1);
  console.log(z);
  return z;
}