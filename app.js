import { renderStat, renderGame } from './utils.js';

const form = document.querySelector('form');
const statsList = document.getElementById('stats-list');
const gameList = document.getElementById('game-list');

const remove = document.getElementById('remove');
const save = document.getElementById('save-game');

let stats = [];
let games = [];

// IMPURE RENDER FUNCTIONS
// YOUR CODE MUST CALL THESE FUNCTIONS
function renderGames() {
    gameList.textContent = '';
    for (let game of games) {
        const li = renderGame(game);
        gameList.append(li);
    }
}

function renderStats() {
    // this should render out stuff
    statsList.textContent = '';
    for (let item of stats) {
        const li = renderStat(item);
        statsList.appendChild(li);
    }
}

function resetStats() {
    // this should reset things
    stats = [];
    statsList.textContent = '';
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Step 1 - add code to track each submission to the stats and
    const formObj = {};
    const formData = new FormData(form);
    formData.forEach(function(value, key) {
        formObj[key] = value;
    });
    stats.push(formObj);
    renderStats();
});

remove.addEventListener('click', () => {
    // Step 2 -- add code to allow users to remove the most recent stat
    stats.pop();
    renderStats();
});

save.addEventListener('click', () => {
    // Step 3 - add code to allow users to save the state
    let totalPoints = 0;
    stats.forEach(stat => {
        totalPoints += Number(stat.points);
    });
    
    games.push({ number: games.length + 1, totalPoints });
    renderGames();
    resetStats();
});
