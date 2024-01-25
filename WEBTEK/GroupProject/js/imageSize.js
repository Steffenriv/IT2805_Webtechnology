var gameInfo = document.getElementById('gameInfoP');
var gameName = document.getElementById('gameName');


//roulette
var roulette = document.getElementById('roulette');

roulette.addEventListener("mouseover", rouletteDisplayGameInfo);
roulette.addEventListener("mouseout", rouletteReset);



function rouletteDisplayGameInfo(){
    roulette.style.width = '25%';
    roulette.style.height = '25%';
    gameInfo.innerText = 'Roulette is a casino game named after the French word meaning little wheel which was likely developed from the italian game Birbi. In the game, a player may choose to place a bet on a single number, various groupings of numbers, the color red or black, whether the number is odd or even, or if the numbers are high (19–36) or low (1–18). To determine the winning number, a croupier spins a wheel in one direction, then spins a ball in the opposite direction around a tilted circular track running around the outer edge of the wheel. The ball eventually loses moementum, passes through an area of deflectors, and falls onto the wheel and into one of the colored and numbered pockets on the wheel. The winnings are then paid to anyone who has placed a successful bet.   Get rich or die trying! Play now.'
    gameName.innerText = 'Roulette';
}

function rouletteReset(){
    roulette.style.width = '20%';
    roulette.style.height = '22%';
    gameInfo.innerText = '';
    gameName.innerText = ''; 
}

//poker
var poker = document.getElementById('poker');

poker.addEventListener("mouseover", pokerDisplayGameInfo);
poker.addEventListener("mouseout", pokerReset);

function pokerDisplayGameInfo(){
    poker.style.width = '25%';
    poker.style.height = '25%';
    gameInfo.innerText = "As early as the sixteenth century, Germans played a bluffing game called 'Pochen.' It later developed into a French version, called 'Poque,' which was eventually brought over to New Orleans and played on the riverboats that plied the Mississippi. In the 1830s, the game was refined further and became known as Poker. There are hundreds of versions of Poker, and the game is played not only in private homes, but also in countless Poker rooms at famous casinos like this one. Poker can be played socially for pennies or matchsticks, or professionally for thousands of dollars. There is plenty of luck in Poker, but the game requires incredibly great skill and inteligence as well. Each player is the master of his own fate. Get rich or die trying! Play now."
    gameName.innerText = 'Poker'; 
}

function pokerReset(){
    poker.style.width = '20%';
    poker.style.height = '22%';
    gameInfo.innerText = '';
    gameName.innerText = ''; 
}

//blackjack
var blackjack = document.getElementById('blackjack');

blackjack.addEventListener("mouseover", blackjackDisplayGameInfo);
blackjack.addEventListener("mouseout", blackjackReset);

function blackjackDisplayGameInfo(){
    blackjack.style.width = '25%';
    blackjack.style.height = '25%';
    gameInfo.innerText = 'Blackjack, or twenty-one, is a card game whose object is to be dealt cards having a higher count than those of the dealer, up to but not exceeding 21. The dealer may use a single deck of 52 cards or two or more decks from a holder called a shoe. Aces count as 1 or 11, and face cards as 10. Depending on the rules used, bets may be placed before the deal, after each player has been dealt one card facedown, or after each player has received two cards facedown and the dealer has exposed one of his cards. Get rich or die trying! Play now.';
    gameName.innerText = 'Blackjack'; 
}

function blackjackReset(){
    blackjack.style.width = '20%';
    blackjack.style.height = '21%';
    gameInfo.innerText = '';
    gameName.innerText = ''; 
}

