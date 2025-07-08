import './style.css';
import {
  validatePizzaOrder,
  generateSuperheroName,
  findCutestAnimal,
  countEmojisInMessage,
  fetchRandomCatFact,
  calculateGroupBill,
  formatPlaylistName,
  generateSecurePassword,
  sortMovies,
  type Animal,
  type Movie
} from './utils';

// Create app container
const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div>
    <h1>🧪 Testing Exercise - Utility Functions</h1>
    <p>Welcome to the testing exercise! Below are 10 utility functions in action.</p>
    <p><strong>Your task:</strong> Create comprehensive test suites for each function using Vitest!</p>
    <div id="results"></div>
  </div>
`;

const resultsContainer = document.querySelector('#results')!;

// Function to add result to the page
function addResult(title: string, result: string) {
  const resultDiv = document.createElement('div');
  resultDiv.className = 'result-item';
  resultDiv.innerHTML = `
    <h3>${title}</h3>
    <pre>${result}</pre>
  `;
  resultsContainer.appendChild(resultDiv);
}

// 1. Pizza Order Validator
console.log('🍕 Testing Pizza Order Validator...');
const pizzaResult1 = validatePizzaOrder('large', ['pepperoni', 'mushrooms'], 25);
const pizzaResult2 = validatePizzaOrder('small', ['pineapple', 'ham'], 30);
const pizzaResult3 = validatePizzaOrder('medium', ['cheese'], 3);
addResult(
  '🍕 Testing Pizza Order Validator...',
  `Valid large pizza: ${JSON.stringify(pizzaResult1, null, 2)}
Invalid combination: ${JSON.stringify(pizzaResult2, null, 2)}
Invalid size & age: ${JSON.stringify(pizzaResult3, null, 2)}`
);

// 2. Superhero Name Generator
const hero1 = generateSuperheroName(false);
const hero2 = generateSuperheroName(true);
const hero3 = generateSuperheroName();
addResult(
  '🦸 Testing Superhero Name Generator...',
  `Without title: "${hero1}"
With title: "${hero2}"
Default: "${hero3}"`
);

// 3. Cutest Animal Finder
const animals: Animal[] = [
  { name: 'Fluffy', cuteness: 8.5, species: 'cat' },
  { name: 'Buddy', cuteness: 9.2, species: 'dog' },
  { name: 'Squeaky', cuteness: 7.8, species: 'hamster' },
  { name: 'Nibbles', cuteness: 9.2, species: 'rabbit' }
];
const cutestAnimal = findCutestAnimal(animals);
const noCutest = findCutestAnimal([]);
addResult(
  '🐱 Testing Cutest Animal Finder...',
  `Cutest animal: ${JSON.stringify(cutestAnimal, null, 2)}
Empty array result: ${noCutest}`
);

// 4. Emoji Counter
const message1 = 'I love pizza 🍕 and ice cream 🍦!';
const message2 = 'Party time! 🎉🎊🥳🎈';
const message3 = 'No emojis here :)';
addResult(
  '😊 Testing Emoji Counter...',
  `"${message1}" has ${countEmojisInMessage(message1)} emojis
"${message2}" has ${countEmojisInMessage(message2)} emojis
"${message3}" has ${countEmojisInMessage(message3)} emojis`
);

// 5. Cat Fact Fetcher - Will show at the end because async :D
async function testCatFacts() {
  try {
    const fact1 = await fetchRandomCatFact(true);
    const fact2 = await fetchRandomCatFact(false);
    addResult(
      '🐾 Testing Cat Fact Fetcher...',
      `With breeds: "${fact1}"
General only: "${fact2}"`
    );
  } catch (error) {
    addResult('🐾 Testing Cat Fact Fetcher...', `Error: ${error}`);
  }
}
testCatFacts();

// 6. Group Bill Calculator
const billResult1 = calculateGroupBill([25.99, 18.5, 32.75], 18, 3);
const billResult2 = calculateGroupBill([45.0], 20, 1);
addResult(
  '💰 Testing Group Bill Calculator...',
  `3-person bill: ${JSON.stringify(billResult1, null, 2)}
Solo diner: ${JSON.stringify(billResult2, null, 2)}`
);

// 7. Playlist Name Formatter
const playlist1 = formatPlaylistName('my@awesome#playlist!', 'title');
const playlist2 = formatPlaylistName('  ROCK    CLASSICS  ', 'sentence');
const playlist3 = formatPlaylistName('hip-hop vibes', 'upper');
const playlist4 = formatPlaylistName('', 'title');
addResult(
  '🎵 Testing Playlist Name Formatter...',
  `Title case: "${playlist1}"
Sentence case: "${playlist2}"
Upper case: "${playlist3}"
Empty input: "${playlist4}"`
);

// 8. Password Generator
const password1 = generateSecurePassword(12);
const password2 = generateSecurePassword(8, { includeUppercase: false, includeSymbols: true });
const password3 = generateSecurePassword(16, { includeNumbers: false, includeSymbols: false });
addResult(
  '🔒 Testing Password Generator...',
  `Default 12-char: "${password1}"
8-char with symbols: "${password2}"
16-char letters only: "${password3}"`
);

// 9. Movie Sorter
const movies: Movie[] = [
  { title: 'The Matrix', year: 1999, rating: 8.7, duration: 136, genre: 'Sci-Fi' },
  { title: 'Inception', year: 2010, rating: 8.8, duration: 148, genre: 'Sci-Fi' },
  { title: 'The Godfather', year: 1972, rating: 9.2, duration: 175, genre: 'Crime' },
  { title: 'Pulp Fiction', year: 1994, rating: 8.9, duration: 154, genre: 'Crime' }
];

const sortedByRating = sortMovies(movies, 'rating', 'desc');
const sortedByYear = sortMovies(movies, 'year', 'asc');
addResult(
  '🎬 Testing Movie Sorter...',
  `By rating (desc): ${sortedByRating.map(m => `${m.title} (${m.rating})`).join(', ')}
By year (asc): ${sortedByYear.map(m => `${m.title} (${m.year})`).join(', ')}`
);

console.log(
  '✅ All utility functions tested! Check the results above and start writing your tests!'
);

// Add some styling for better presentation
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  h1 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 10px;
  }
  
  p {
    text-align: center;
    color: #7f8c8d;
    margin-bottom: 30px;
  }
  
  .result-item {
    background: white;
    margin: 20px 0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .result-item h3 {
    margin-top: 0;
    color: #2c3e50;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
  }
  
  .result-item pre {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 4px;
    border-left: 4px solid #3498db;
    overflow-x: auto;
    white-space: pre-wrap;
    font-size: 14px;
  }
`;
document.head.appendChild(style);
