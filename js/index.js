 card1 = document.querySelector("#card_woosuk");
 card2 = document.querySelector("#card_daniel");

card1.addEventListener('click', function() {
    card1.classList.toggle("is_flipped");
});


card2.addEventListener('click', function() {
    card2.classList.toggle("is_flipped");
});
