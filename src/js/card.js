/*
 * A playing card
 */
class Cube {
    constructor() {
        this.color;
        this.team=false;
    }

    render() {
        this.element = document.createElement("div");
        this.element.innerHTML = "";
        this.element.className = `cube`;
        this.color=Math.round(Math.random() * (5)+1);
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
        this.update();
    }

    update() {
        switch(this.color){
            case 1:
            this.element.style.backgroundColor="red";
            break;
            case 2:
            this.element.style.backgroundColor="blue";
            break;
            case 3:
            this.element.style.backgroundColor="yellow";
            break;
            case 4:
            this.element.style.backgroundColor="aqua";
            break;
            case 5:
            this.element.style.backgroundColor="green";
            break;
            case 6:
            this.element.style.backgroundColor="pink";
            break;
        }
    }
}
