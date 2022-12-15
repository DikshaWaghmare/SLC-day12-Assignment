// •Using conditional statements and Take user input and display data in UI
// given number is multiple of 3 or not e.g.10900
function getNum() {
  var n = document.getElementById("number").value;
  if (n != 0) {
    if (n % 3 == 0) {
      document.getElementById("ans").innerHTML = n + " is multiple of 3";
    } else {
      document.getElementById("ans").innerHTML = n + " is not multiple of 3";
    }
  }
}

// check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not
var str = "It is a SLC class of js";
var str1 = "SLC";
if (str.indexOf(str1) !== -1) {
  document.getElementById("str").innerHTML = str1 + " is exist in- " + str;
} else {
  document.getElementById("str").innerHTML = str1 + " is not exist in- " + str;
}

// calculate simple interest ((p*r*t) / 100 )
function getNum2() {
  var p = document.getElementById("principal").value;
  var r = document.getElementById("rate").value;
  var t = document.getElementById("time").value;
  var SI = (p * r * t) / 100;
  document.getElementById("SI").innerHTML = "Simple Interest is " + SI;
}

// given year leap year or not (29 in feb)
function getYear() {
  var year = document.getElementById("year").value;
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    document.getElementById("op-ly").innerHTML = year + " is a leap year";
  } else {
    document.getElementById("op-ly").innerHTML = year + " is a not leap year";
  }
}

// 0-6 display day week depending upon what user is entering (0-> sunday) : using switch

function abcDay() {
  var dayValue = document.getElementById("wday").value;
  //console.log(dayValue);
  var day;
  switch (Number(dayValue)) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thrusday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Invalid Day";
  }
  document.getElementById("op-day").innerHTML = day;
}

// •	use loops, conditional statements, take input from user
// multiplication table (ask number from user)
function mul() {
  var num = document.getElementById("n").value;
  var a = [];
  for (i = 1; i <= 10; i++) {
    n = i * num;
    a.push(n);
    if (num != 0) {
      document.getElementById("mul_ans").innerHTML = "Multiplication: " + a;
    } else {
      document.getElementById("mul_ans").innerHTML = "Enter the Number";
    }
  }
}

// sum of digits: e.g. (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10) : hint - loops, divisor and modulus
function sumDigit() {
  var num = document.getElementById("sum").value;
  var s = 0,
    r;
  while (num != 0) {
    r = num % 10;
    s = s + r;
    num = Math.floor(num / 10);
  }
  document.getElementById("sum_ans").innerHTML = "Sum of digit: " + s;
}

// palindrome string (aca: aca(reverse) is a palindrome, abc: cba is not a palindrome): use loops
function palindromNo() {
  var num = document.getElementById("pno").value;
  //console.log(num);
  var a = num;
  var reverseNo = 0;
  while (num != 0) {
    r = num % 10;
    reverseNo = reverseNo * 10 + r;
    num = Math.floor(num / 10);
  }
  if (a == reverseNo) {
    document.getElementById("pno_ans").innerHTML =
      a + " is a Palindrome Number ";
    //console.log("yes");
  } else {
    document.getElementById("pno_ans").innerHTML =
      a + " is not a Palindrome Number ";
    //console.log("no");
  }
}

// display even numbers upto n number (ask user for number)
function evenNo() {
  var num = document.getElementById("e-no").value;
  var even_no = [];
  for (i = 0; i <= num; i++) {
    if (i % 2 == 0) {
      even_no.push(i);
    }
  }
  document.getElementById("e_ans").innerHTML = even_no;
}

// ask user for the input, whether char is vowel or consonant
function charCheck() {
  let str = document.getElementById("char").value;
  if (str == "") {
    document.getElementById("c_ans").innerHTML = "Enter the character!";
  } else if (
    str == "a" ||
    str == "e" ||
    str == "i" ||
    str == "o" ||
    str == "u"
  ) {
    document.getElementById("c_ans").innerHTML = str + " is a Vowel";
  } else if (
    str == "A" ||
    str == "E" ||
    str == "I" ||
    str == "O" ||
    str == "U"
  ) {
    document.getElementById("c_ans").innerHTML = str + " is a Vowel";
  } else {
    document.getElementById("c_ans").innerHTML = str + " is a consonant";
  }
}

// count of even and odd number from 1 to 999
function evenOddNo() {
  var even = 0;
  var odd = 0;
  for (i = 1; i <= 999; i++) {
    if (i % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  document.getElementById("even_ans").innerHTML = " Even: " + even;
  document.getElementById("odd_ans").innerHTML = " Odd: " + odd;
}

// count occurrence of a particular character in a string (hello: count of l is 2): loops
function charCount() {
  var str = document.getElementById("str_count").value;
  var chr = document.getElementById("char_count").value;
  var count = 0;
  for (i = 0; i <= str.length; i++) {
    if (chr == str.charAt(i)) {
      count++;
    }
  }
  document.getElementById("c_count").innerHTML =
    "Number of character '" + chr + "' is " + count;
}

// sum and average of array elements [1, 9, 8];
function arrayElement() {
  var a = [1, 9, 8];
  var sum = 0,
    avr;
  for (i = 0; i < a.length; i++) {
    sum = sum + a[i];
    avr = sum / a.length;
  }
  document.getElementById("s_ans").innerHTML = "Sum of element: " + sum;
  document.getElementById("avr_ans").innerHTML = "Average of element: " + avr;
}

// largest number in an array (do with loops)
function findNo() {
  var a = document.getElementById("num").value;
  var b = a.split("");
  document.getElementById("array").innerHTML = b;
  var min = b[0];
  var max = b[0];
  for (let i = 1; i < b.length; i++) {
    if (b[i] > max) {
      max = b[i];
    }
    if (b[i] < min) {
      min = b[i];
    }
  }
  document.getElementById("l_no").innerHTML = "max: " + max;
  document.getElementById("s_no").innerHTML = "min: " + min;
}

//From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if multiple of both display "hello" or else print the number
// e.g. 1 2 foo 4 bar foo....

for (i=1;i<=100;i++){
  if(i%3==0 && i%5==0){
    console.log("hello");
  }
  else if((i%3==0)){
    console.log("foo");
  }
  else if(i%5==0){
    console.log("bar");
  }
  else{
    console.log(i);
  }
}



// •	ATM Machine     .................. I will upload it soon
// balance & query
// withdraw (amount)
// change pin
// mini statement
// saving & current acc.
// print receipt
// enter pin number
