// hart part

const hearts = document.getElementsByClassName("hart-find");
const ans = document.getElementById("hart-total");

let count = 0;

for (let heart of hearts) {
    heart.addEventListener('click', function (e) {
        e.preventDefault();

        count++;
        ans.textContent = count;

    });
}

// card part

const cards = document.getElementsByClassName("card-find");
const card_id = document.getElementById("card");

let value = parseInt(card_id.textContent);
let save_data = []; // history array

const clear_button = document.getElementById("clear-button");

for (let card of cards) {
    card.addEventListener('click', function (e) {
        e.preventDefault();

        let parentCard = card.closest(".parent");
        let message_value = parentCard.querySelector(".message-value").textContent;
        let message_number = parentCard.querySelector(".message-number").textContent;

        value -= 20;
        card_id.textContent = value;

        alert("📞 " + message_value + " " + message_number);

        console.log("clicked", card, "New Value:", value);

        // extra code
        const data = {
            name: message_value,
            amount: message_number,
            date: new Date().toLocaleTimeString()
        };

        save_data.push(data);

        // also render immediately
        const transactionPart = document.getElementById("transaction-part");
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="bg-[#f4f5f7] rounded-xl p-3 flex justify-between items-center mb-3">
                <div class="flex items-center gap-2">
                    
                    <div>
                        <h1>${data.name}</h1>
                        <div class="flex justify-between items-center">
                            <span>${data.amount}</span>
                            <span style=" margin-left: 100px;">${data.date}</span>
                        </div>
                    </div>

                </div>
                
            </div>
        `;
        transactionPart.prepend(div);
    });
}

clear_button.addEventListener("click", function () {
    // 1) array clear
    save_data = [];

    // 2) UI clear
    const transactionPart = document.getElementById("transaction-part");
    transactionPart.innerHTML = "";

    console.log("History cleared!");
});




// const cards = document.getElementsByClassName("card-find");
// const card_id = document.getElementById("card");

// let value = parseInt(card_id.textContent);

// for (let card of cards) {
//     card.addEventListener('click', function(e) {
//         e.preventDefault();

//         let parentCard = card.closest(".parent");
//         let message_value = parentCard.querySelector(".message-value").textContent;
//         let message_number = parentCard.querySelector(".message-number").textContent;

//         value -= 20;
//         card_id.textContent = value;

//         alert(" 📞 " + message_value + " " + message_number);

//         console.log("clicked", card, "New Value:", value);

//         // extra code


//     });
// }










