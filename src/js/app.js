
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
    button_reset=document.querySelector("#reset");

    button_red.addEventListener("click", () => {
        deck.change_color_btn(1,0,0);
    });
    button_blue.addEventListener("click", () => {
        deck.change_color_btn(2,0,0);
    });
    button_yellow.addEventListener("click", () => {
        deck.change_color_btn(3,0,0);
    });
    button_aqua.addEventListener("click", () => {
        deck.change_color_btn(4,0,0);
    });
    button_green.addEventListener("click", () => {
        deck.change_color_btn(5,0,0);
    });
    button_pink.addEventListener("click", () => {
        deck.change_color_btn(6,0,0);
    });
    button_reset.addEventListener("click", () => {
        deck.mount(place);
    });



    
});
