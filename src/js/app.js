
document.addEventListener("DOMContentLoaded", () => {
    // Create and shuffle a new deck of cards
    const deck = new Deck();
    const place = document.querySelector("#desk");
    
    deck.mount(place);
    button_red=document.querySelector("#red");
    button_blue=document.querySelector("#blue");
    button_yellow=document.querySelector("#yellow");
    button_aqua=document.querySelector("#aqua");
    button_green=document.querySelector("#green");
    button_pink=document.querySelector("#pink");

    button_red.addEventListener("click", () => {
        deck.change_color(1);
    });
    button_blue.addEventListener("click", () => {
        deck.change_color(2);
    });
    button_yellow.addEventListener("click", () => {
        deck.change_color(3);
    });
    button_aqua.addEventListener("click", () => {
        deck.change_color(4);
    });
    button_green.addEventListener("click", () => {
        deck.change_color(5);
    });
    button_pink.addEventListener("click", () => {
        deck.change_color(6);
    });




    
});
