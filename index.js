//variables

let btn = document.querySelector(".btn");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
const quotes = [
  {
    quote:
      '"Whatever we believe about ourselves and our ability comes true for us." ',
    person: "Susan L. Taylor",
  },
  {
    quote:
      '"People who say it cannot be done should not interrupt those who are doing it."',
    person: "George Bernard",
  },
  {
    quote:
      '"He who would learn to fly one day must first learn to stand and walk and run and climb and dance; one cannot fly into flying."',
    person: "Nietzsche",
  },
  {
    quote: '"Start where you are. Use what you have. Do what you can."',
    person: "Arthur Ashe",
  },
  {
    quote: " “It is hard to beat a person who never gives up.”",
    person: "Babe Ruth",
  },

  {
    quote: " “Earn Nicely, spend wisely and you will live happily.”",
    person: "Auliq Ice",
  },
];
//button change quote funtion
btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
