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
    }

    mount(parent) {
        parent.innerHTML='';
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
        let win=true;
        for (let i=0;i<14;i++){
            for (let j=0;j<14;j++){
                this.cubes[i][j].update();
                if(this.cubes[i][j].color===this.cubes[0][0].color){win=false}
            }
        }
        if(win){alert('WIN!!')}
    }
    change_color_btn(col,i,j){
        for (let i=0;i<14;i++){
            for (let j=0;j<14;j++){
                this.cubes[i][j].team=true;
            }
        }
        this.change_color(col,i,j);
        
        
    }
    change_color(col,i,j){
        
        this.cubes[i][j].team=false;
            if ((i>0)&&(this.cubes[i-1][j].color===this.cubes[i][j].color)){if(this.cubes[i-1][j].team===true){this.change_color(col,i-1,j);}}
            if ((i<13)&&(this.cubes[i+1][j].color===this.cubes[i][j].color)){if(this.cubes[i+1][j].team===true){this.change_color(col,i+1,j);}}
            if ((j>0)&&(this.cubes[i][j-1].color===this.cubes[i][j].color)){if(this.cubes[i][j-1].team===true){this.change_color(col,i,j-1);}}
            if ((j<13)&&(this.cubes[i][j+1].color===this.cubes[i][j].color)){if(this.cubes[i][j+1].team===true){this.change_color(col,i,j+1);}}
            
        this.cubes[i][j].color=col;
        this.update();
    }

}
