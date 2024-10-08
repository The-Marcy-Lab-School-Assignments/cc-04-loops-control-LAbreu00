//Q1
const countFromOne = (n) => {
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
};

//countFromOne(9);

//Q2
const countEveryOdd = (n) => {
  for (i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

//countEveryOdd(10);

//Q3
const isNegative = (n) => {
  console.log(n < 0);
};

//isNegative(3);
//isNegative(-2);
//isNegative(Math.PI);

//Q4
const betweenFiveAndTwenty = (n) => {
  console.log(5 <= n && n <= 20);
};

//betweenFiveAndTwenty(12);
//betweenFiveAndTwenty(5);
//betweenFiveAndTwenty(100);

//Q5
const sumOfThreeOrFive = () => {
  s = 0;
  for (i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      s = s + i;
    }
  }
  console.log(s);
};

//sumOfThreeOrFive();

//Q6
const isAllLowerCase = (s) => {
  console.log(s === s.toLowerCase());
};

//isAllLowerCase("hello");
//isAllLowerCase("seven eleven");
//isAllLowerCase("Seven eleven has the best slushies");

//Bonus
const countMultiplesOfFive = (a) => {
  n = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] % 5 === 0) {
      n++;
    }
  }
  console.log(n);
};

//countMultiplesOfFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//countMultiplesOfFive([15, 23, 35, 45, 67]);
//countMultiplesOfFive([2, 6, 14]);
