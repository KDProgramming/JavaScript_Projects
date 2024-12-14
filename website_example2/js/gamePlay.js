/*
      Author: Kylie Drawdy
      Date: 11/13/2024
   */
let deckStr = `Ace of Hearts, King of Hearts, Queen of Hearts, Jack of Hearts,
               10 of Hearts, 9 of Hearts, 8 of Hearts, 7 of Hearts, 6 of Hearts,
               5 of Hearts, 4 of Hearts, 3 of Hearts, 2 of Hearts,
               Ace of Spades, King of Spades, Queen of Spades, Jack of Spades,
               10 of Spades, 9 of Spades, 8 of Spades, 7 of Spades, 6 of Spades,
               5 of Spades, 4 of Spades, 3 of Spades, 2 of Spades,
               Ace of Diamonds, King of Diamonds, Queen of Diamonds, Jack of Diamonds,
               10 of Diamonds, 9 of Diamonds, 8 of Diamonds, 7 of Diamonds, 6 of Diamonds,
               5 of Diamonds, 4 of Diamonds, 3 of Diamonds, 2 of Diamonds, 
               Ace of Clubs, King of Clubs, Queen of Clubs, Jack of Clubs,
               10 of Clubs, 9 of Clubs, 8 of Clubs, 7 of Clubs, 6 of Clubs,
               5 of Clubs, 4 of Clubs, 3 of Clubs, 2 of Clubs`;

let cards = document.querySelectorAll("div#hand span"); 
let cards2 = document.querySelectorAll("div#hand2 span");
let cardsLeft = document.getElementById("cardsLeft");
let deck = [];

// Initialize accumulators
let hand1Accumulator = 0;
let hand2Accumulator = 0;

document.getElementById("deal").onclick = function() {   
    // Create newDeck function
    function newDeck() {
        // Split contents of deckStr
        deck = deckStr.split(/,/g);
        // Shuffle deck
        deck.sort(shuffle);
    }
    
    // Shuffle function
    function shuffle(a, b) {
        return 0.5 - Math.random();
    }

    // Function to set the image source based on card name
    function setCardImage(element, cardName) {
        let img = document.createElement("img");
        let formattedName = cardName.trim().toLowerCase().replace(" of ", "_");
        img.src = `images/${formattedName}.PNG`; 
        img.alt = cardName;
        element.textContent = '';
        element.appendChild(img);
    }

    // Function to determine the value of the cards
    function getCardValue(cardName) {
        if (cardName.includes("King")) {
            return 10;
        }
        if (cardName.includes("Queen")) {
            return 10;
        }
        if (cardName.includes("Jack")) {
            return 10;
        }
        if (cardName.includes("Ace")) {
            return 11;
        }
        // Get number from numeric cards
        let value = cardName.match(/\d+/); 
        return value ? parseInt(value[0], 10) : 0;
    }

    // Deal cards for hand 1 and hand 2, continue until deck is empty
    for (let i = 0; i < Math.max(cards.length, cards2.length); i++) {
        // If deck is empty, reshuffle
        if (deck.length === 0) {
            newDeck();
        }

        // Deal one card to hand 1
        if (i < cards.length && deck.length > 0) {
            let card = deck.pop();
            cards[i].textContent = card;
            setCardImage(cards[i], card);
            hand1Accumulator += getCardValue(card);
        }

        // Deal one card to hand 2
        if (i < cards2.length && deck.length > 0) {
            let card = deck.pop();
            cards2[i].textContent = card;
            setCardImage(cards2[i], card);
            hand2Accumulator += getCardValue(card);
        }

        // Update the number of cards left in deck
        cardsLeft.textContent = deck.length;
    }

    // Display scores
    document.getElementById("hand1Score").textContent = `Player 1 Score: ${hand1Accumulator}`;
    document.getElementById("hand2Score").textContent = `Player 2 Score: ${hand2Accumulator}`;

    // Determine winner
    let winnerMessage = "";
    if (hand1Accumulator > hand2Accumulator) {
        winnerMessage = "Player 1 wins!";
    } else if (hand2Accumulator > hand1Accumulator) {
        winnerMessage = "Player 2 wins!";
    } else {
        winnerMessage = "It's a tie!";
    }

    // Display winner message
    document.getElementById("winnerMessage").textContent = winnerMessage;
    
    // Log final accumulators for both hands
    console.log("Final Hand 1 Accumulator:", hand1Accumulator);
    console.log("Final Hand 2 Accumulator:", hand2Accumulator);
};
            
