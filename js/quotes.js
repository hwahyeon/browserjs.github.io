const quotes = [
    {
        quote: "When I look at my life and its secret colours, I feel like bursting into tears.",
        author: "Albert Camus",
    },
    {
        quote: "Autumn is a second spring when every leaf is a flower.",
        author: "Albert Camus",
    },
    {
        quote: "Blessed are the hearts that can bend; they shall never be broken.",
        author: "Albert Camus",
    },
    {
        quote: "I may not have been sure about what really did interest me, but I was absolutely sure about what didn't.",
        author: "Albert Camus",
    },
    {
        quote: "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.",
        author: "Albert Camus",
    },
    {
        quote: "You know what charm is: a way of getting the answer yes without having asked any clear question.",
        author: "Albert Camus",
    },
    {
        quote: "But in the end one needs more courage to live than to kill himself.",
        author: "Albert Camus",
    },
    {
        quote: "In the depth of winter, I finally learned that within me there lay an invincible summer.",
        author: "Albert Camus",
    },
    {
        quote: "Man is the only creature who refuses to be what he is.",
        author: "Albert Camus",
    },
    {
        quote: "Should I kill myself, or have a cup of coffee?",
        author: "Albert Camus",
    },
    {
        quote: "Live to the point of tears.",
        author: "Albert Camus",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;