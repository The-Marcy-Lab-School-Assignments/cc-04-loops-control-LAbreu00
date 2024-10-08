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

sumOfThreeOrFive();

//Q6
const isLowerCase = (l) => {};
