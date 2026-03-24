const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingDef = true;

let flashcard_content = document.getElementById('card-content')
let previous_button = document.getElementById('prev-btn')
let next_button = document.getElementById('next-btn')
let card = document.getElementById('flashcard')
let new_term = document.getElementById('new-term')
let new_definition = document.getElementById('new-definition')
let add_button = document.getElementById('add-card-btn')

// Start with this function to simply display the card
function displayCard() {
        flashcard_content.innerHTML = flashcards[currentIndex].term;
        console.log(flashcards[currentIndex]);
}

// The rest of the code you will write is apart of event listeners

add_button.addEventListener('click', function() {
    
    flashcards.push({term: new_term.value, definition: new_definition.value});

    new_term.value = "";
    new_definition.value = "";
})


card.addEventListener('click', function() {
    if (showingDef) {
    flashcard_content.innerHTML = flashcards[currentIndex].definition;
    console.log(flashcards[currentIndex].definition);
    } else {
        displayCard();
    }

    showingDef = !showingDef;

})


previous_button.addEventListener('click', function() {

    currentIndex--;

    flashcard_content.innerHTML = flashcards[currentIndex].term;
    console.log(flashcards[currentIndex]);
    


    if (currentIndex == 0) {
        flashcard_content.innerHTML = flashcards[0].term;
        console.log(flashcards[0]);
        currentIndex = flashcards.length;
    }
}
    )

next_button.addEventListener('click', function() {

    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
        flashcard_content.innerHTML = flashcards[currentIndex].term;
        console.log(flashcards[currentIndex]);
    }

    flashcard_content.innerHTML = flashcards[currentIndex].term;
    console.log(flashcards[currentIndex]);
    
   
}
    )









// This line will display the card when the page is refreshed
window.onload = displayCard;
