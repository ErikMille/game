/*
 * Generates a random integer from min to max.
 */
function randint(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

/*
 * The deck of cards to deal from.
 */
class Deck {
    constructor() {
        this.cubes=[];
        this.element;
    }

    render() {
        this.element = document.createElement("div");
        this.element.innerHTML = "";
        this.element.className = "container";
        for (let i=0;i<14;i++){
            this.cubes.push([]);
            for (let j=0;j<14;j++){
                this.cubes[i].push(new Cube());
            }
        }
        this.cubes[0][0].team=true;
    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
        for (let i=0;i<14;i++){
            this.cubes.push([]);
            for (let j=0;j<14;j++){
                this.cubes[i][j].mount(this.element);
            }
        }
        this.update();
    }

    update(){
        for (let i=0;i<14;i++){
            for (let j=0;j<14;j++){
                this.cubes[i][j].update();
            }
        }
    }
    change_color(col){
        for (let i=0;i<14;i++){
            for (let j=0;j<14;j++){
                if(this.cubes[i][j].team){this.cubes[i][j].color=col;}
                
            }
        }
        this.team_change();
        this.update();
    }
    team_change(){
        for (let i=0;i<14;i++){
            for (let j=0;j<14;j++){
                if(this.cubes[i][j].team){
                    if ((i>0)&&(this.cubes[i-1][j].color===this.cubes[i][j].color)){this.cubes[i-1][j].team=true;}
                    if ((i<13)&&(this.cubes[i+1][j].color===this.cubes[i][j].color)){this.cubes[i+1][j].team=true;}
                    if ((j>0)&&(this.cubes[i][j-1].color===this.cubes[i][j].color)){this.cubes[i][j-1].team=true;}
                    if ((j<13)&&(this.cubes[i][j+1].color===this.cubes[i][j].color)){this.cubes[i][j+1].team=true;}
                }
            }
        }
        for (let i=13;i>=0;i--){
            for (let j=13;j>=0;j--){
                if(this.cubes[i][j].team){
                    if ((i>0)&&(this.cubes[i-1][j].color===this.cubes[i][j].color)){this.cubes[i-1][j].team=true;}
                    if ((i<13)&&(this.cubes[i+1][j].color===this.cubes[i][j].color)){this.cubes[i+1][j].team=true;}
                    if ((j>0)&&(this.cubes[i][j-1].color===this.cubes[i][j].color)){this.cubes[i][j-1].team=true;}
                    if ((j<13)&&(this.cubes[i][j+1].color===this.cubes[i][j].color)){this.cubes[i][j+1].team=true;}
                }
            }
        }
    }

}
