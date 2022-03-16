const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    autor: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    autor: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    autor: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor. ",
    autor: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    autor: "Oprah Winfrey",
  },
];

const quote = document.querySelector("#quotes span:first-child");
const autor = document.querySelector("#quotes span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
autor.innerText = todayQuote.autor;
