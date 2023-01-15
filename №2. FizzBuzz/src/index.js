function fizzBuzz (begin, end) {
    for(begin; begin <= end; begin++) {
  
      if(begin%3 === 0 && begin%5 === 0) {
        console.log('FizzBuzz');
      }
      else if(begin%3 === 0){
        console.log('Fizz');
      }
      else if(begin%5 === 0){
        console.log('Buzz');
      }
      else if(begin){
        console.log(begin)
      }
    } 
  }
  
  fizzBuzz(11, 20);
  
