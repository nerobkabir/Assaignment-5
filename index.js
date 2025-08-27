// hart part

const hearts = document.getElementsByClassName("hart-find");
const ans = document.getElementById("hart-total");

let count = 0;

for (let heart of hearts) {
    heart.addEventListener('click', function(e) {
        e.preventDefault();

        count++;
        ans.textContent = count; 

    });
}

// card part

const cards = document.getElementsByClassName("card-find");
const card_id = document.getElementById("card");

let value = parseInt(card_id.textContent);

let message_value = document.getElementsByClassName("message-value").textContent;
let message_number = document.getElementsByClassName("message-number").textContent;

for (let card of cards) {
    card.addEventListener('click', function(e) {
        e.preventDefault();

        value -= 20; 
        card_id.textContent = value;

        alert(message_value + message_number);

        console.log("clicked", card, "New Value:", value);
    });
}









