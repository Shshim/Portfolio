const card1 = document.querySelector("#card_woosuk");
const card2 = document.querySelector("#card_daniel");

const card_flip1 = function() {
    card1.classList.toggle("is_flipped");
};

const card_flip2 = function() {
    card2.classList.toggle("is_flipped");
};

card1.addEventListener('click', card_flip1);


card2.addEventListener('click', card_flip2);

window.onunload = function() {
    console.log("about to clear event listeners prior to leaving page");
    card1.removeEventListener('click', card_flip1);
    card2.removeEventListener('click', card_flip2);
    return;
}