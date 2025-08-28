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
let save_data = []; 

for (let card of cards) {
    card.addEventListener('click', function (e) {
        e.preventDefault();

        if(value < 20){
            alert("❌ You don’t have enough coins; making a call requires at least 20 coins.");
            return;
        }

        let parentCard = card.closest(".parent");
        let message_value = parentCard.querySelector(".message-value").textContent;

        let message_title = parentCard.querySelector(".message-title").textContent;

        let message_number = parentCard.querySelector(".message-number").textContent;

        value -= 20;
        card_id.textContent = value;

        alert("📞 " + message_value + " " + message_number);


        // History part
        const data = {
            name: message_title,
            amount: message_number,
            date: new Date().toLocaleTimeString()
        };

        save_data.push(data);

        const transactionPart = document.getElementById("history-add");
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

// remove history
const clear_button = document.getElementById("clear-button");
clear_button.addEventListener("click", function () {
    save_data = [];
    const history_delete = document.getElementById("history-add");
    history_delete.innerHTML = "";
});

// copy part

const copy_text = document.getElementsByClassName("copy-text");
const copy_value = document.getElementById("copy-value");

let count_value = 0;

for (let copy of copy_text) {
    copy.addEventListener('click', function (e) {
        e.preventDefault();

        let parentCard = copy.closest(".parent");
        let message_number = parentCard.querySelector(".message-number").textContent;
        alert("Number has been copied. " + message_number);

        count_value++;
        copy_value.textContent = count_value;

    });
}


// copy part 

const copyButtons = document.querySelectorAll(".copy-text");

copyButtons.forEach(button => {
  button.addEventListener("click", function () {
    
    const card = button.closest(".card");
    const textToCopy = card.querySelector(".message-number").textContent;
    navigator.clipboard.writeText(textToCopy)
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });
});
















