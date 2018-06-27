const app = "I don't do much.";
var kittens=["Milo", "Otis", "Garfield"];

destructivelyAppendKitten(kittens,1);

function destructivelyAppendKitten(x,y){
  x.push(y);
  console.log(x);
  return x;
}

function destructivelyPrependKitten(x,y){
  x.unshift(y);
  console.log(x);
  return x;
}