//Exercício 4

 const getNumber = (num: number, acc: number = 1): number => {
    if (num < 10) {
      return acc;
    }
    return getNumber(num / 10, acc + 1);
  };
  
//   console.log(getNumber(0));
//   console.log(getNumber(10));
//   console.log(getNumber(2034));

//Exercício 5

 const getArrayMaximum = (
    arr: number[],
    i: number = 0,
    largest: number = 0
  ): number => {
    let largestAux = largest;
    if (arr[i] > largest) {
      largestAux = arr[i];
    }
    if (i === arr.length - 1) {
      return largestAux;
    }
  
    return getArrayMaximum(arr, i + 1, largestAux);
  };
  //console.log(getArrayMaximum([2, 10, 8, 5, 4]));

//Exercício 6

 const findCapitalLetter = (
    s: string,
    char: string = ""
  ): string => {
    if (char && char.toUpperCase() === char) {
      return char;
    }
    return findCapitalLetter(s.substring(1), s[0]);
  };

//Exercício 7

function power (a: number, b: number): number {
    if (b < 0) {
      return 0; // Erro
    } else if (b === 0) {
      return a;
    } else {
      return a * power(a, b - 1);
    }
  }

//Exercício 8

function allFib (n: number): void {
    for (let i = 0; i < n; i++) {
      console.log(`i: ${fib(i)}`)
    }
  }
  
  function fib (n: number) : number {
    if(n <= 0){
      return 0
    } else if( n === 1) {
      return 1
    }
    return fib(n - 1) + fib(n - 2)
  }
  // 0(2^n)