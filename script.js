// A list of quotes
const quotes = [
   "The only way to do great work is to love what you do. - Steve Jobs",
   "Life is what happens when you're busy making other plans. - John Lennon",
   "In the middle of every difficulty lies opportunity. - Albert Einstein",
   "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
];

// Function to generate a random quote
function generateQuote() {
   const randomIndex = Math.floor(Math.random() * quotes.length);
   const randomQuote = quotes[randomIndex];
   document.getElementById("quote").textContent = randomQuote;
}

// Event listener for the button click
document.getElementById("generate").addEventListener("click", generateQuote);

// Initial quote generation
generateQuote();