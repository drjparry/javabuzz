function Javabuzz(){

}


Javabuzz.prototype.isDivisibleBy = function(number1, number2){
  return number2 % number1 === 0;
};

Javabuzz.prototype.play = function(number){
  if(this.isDivisibleBy(15, number)){
    return "fizzbuzz";
  } else if(this.isDivisibleBy(5, number)) {
    return "buzz";
  } else if(this.isDivisibleBy(3, number)) {
    return "fizz";
  } else{
    return number;
  }
};

var javabuzz = new Javabuzz();

for(var i=1;i<=100; i++){
  console.log(javabuzz.play(i));
}