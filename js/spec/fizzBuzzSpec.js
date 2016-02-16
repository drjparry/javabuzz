describe("Javabuzz", function(){

  var javabuzz;

  beforeEach(function(){
    javabuzz = new Javabuzz();
  });



  describe('multiples of 3', function(){
    it('divisible by 3', function(){
      expect(javabuzz.isDivisibleBy(3,6)).toBe(true);
    });

    it('fizzes for 3', function(){
      expect(javabuzz.play(6)).toEqual("fizz");
    });
  });

  describe('multiples of 5', function(){
   it('multiples of 5', function(){
      expect(javabuzz.isDivisibleBy(5,25)).toBe(true);
    });

    it('buzzes on 5', function(){
      expect(javabuzz.play(25)).toEqual("buzz");
    });
  });

  describe('multiples of 3 and 5', function() {

    it('multiple of 15', function(){
      expect(javabuzz.isDivisibleBy(15,30)).toBe(true);
    });

    it('fizzbuzzes for 15', function(){
      expect(javabuzz.play(30)).toEqual("fizzbuzz");
    });
  });

  describe('all other numbers', function() {
    it('returns all other numbers', function(){
      expect(javabuzz.play(17)).toEqual(17);
    });

  });
});

