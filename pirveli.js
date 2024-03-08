// variables ცვლადები let var const
//ვარ არის ძველი ვერსია, ლეთ და კონსტ არის შედარებიათ ახალი ვერსიები
//მაგრამ ლეტში შეგვიძლია ცვლადს შევუცვალოთ მნიშვნელობა ხოლო კონსტში არა.
//primitiv values
let useRname = "mariami"; //string
let userAge = 25; //number
let userStatus = true; //boolean აქ გვაქვს ორი მნიშვნელობა თრუ და ფოლსი და იერება ბრჭყალების გარეშე რათა სტრინგად არ გადაკეთდეს.
let x = null; //nul ცვლადს აქ მნიშვნელობა აქვს მაგრამ განსაზღვრული არაა
let y; //undefined აქ მნიშვნელობა არ არის განსაზღვრული

// console.log(typeof userAge);
// console.log(typeof useRname);

// let number1 = 10;
// let number2 = 15;
// let result = number1 + number2;
// console.log(result);

// let a = 5;
// a -= 15;
// console.log(a);
// a*=a
// console.log(a);
// let b=true
// console.log(!b);

// &&-და
// ||-ან

//type convertation ტიპების კონვერტაცია
//1, explicit როდესაც ჩვენთვითონვე ვუცვლით ტიპს
//2. implicit ჯავასკრიპტს აქვს ავტომატურად გადაყვანილია

//explicit
let item1 = String(11); //aq namberi gadaiqca stringad
console.log(item1);
console.log(typeof item1);
console.log(item1.length); //simboloebis raodenobiss gageba

//implicit
let item7 = 15;
let item8 = "10";
let result = item7 + item8;
console.log(result);
console.log(typeof result);

//if statement
let element = 10;
if (element > 15) {
  console.log("hello");
} else if (element < 20 && element > 12) {
  console.log("hello2");
} else {
  console.log("error");
}

// if new syntax es6 axali chanaweri
// ? tarnnery operatory

let el2 = 15;
if (el2 < 20) {
  console.log("hello1");
} else {
  console.log("error");
}
//--
let conditionResult = el2 < 20 ? "hello" : "error";
console.log(conditionResult);

let el3 = 15;
if (el3 > 20) {
  console.log("hello1");
} else if (el3 > 25) {
  console.log("hello2");
} else if (el3 < 18) {
  console.log("hello3");
} else {
  console.log("error");
}

let conditionResult2 =
  el3 > 20
    ? "hello1"
    : el3 > 25
    ? "hello2"
    : el3 < 18
    ? "hello3"
    : el3 > 17
    ? "hello4"
    : "error";
console.log(conditionResult2);

//prompt
// let question = prompt("enter your name");
// console.log(question);//aq qvescheni stringia

let question = Number(prompt("enter your age"));
console.log(question); //aq qvescheni numberia

if (question > 18) {
  alert("srulwlovani");
} else {
  alert("arasrulwlovani");
}
