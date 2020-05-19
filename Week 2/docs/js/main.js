class Bubble {
    constructor() {
        let game = document.getElementsByTagName("game")[0];
        this.div = document.createElement("bubble");
        game.appendChild(this.div);
        let x = Math.random() * (window.innerWidth - this.div.clientWidth);
        let y = Math.random() * (window.innerHeight - this.div.clientHeight);
        this.div.style.transform = `translate(${x}px, ${y}px)`;
        this.div.addEventListener("click", () => this.clickBubble());
    }
    clickBubble() {
        this.div.remove();
    }
}
class Can {
    constructor() {
        let game = document.getElementsByTagName("game")[0];
        this.div = document.createElement("can");
        game.appendChild(this.div);
        let x = Math.random() * (window.innerWidth - this.div.clientWidth);
        let y = Math.random() * (window.innerHeight - this.div.clientHeight);
        this.div.style.transform = `translate(${x}px, ${y}px)`;
        this.div.addEventListener("click", () => this.clickCan());
    }
    clickCan() {
        this.div.remove();
    }
}
class Fish {
    constructor() {
        let game = document.getElementsByTagName("game")[0];
        this.div = document.createElement("fish");
        game.appendChild(this.div);
        let colour = Math.random() * 360;
        this.div.style.filter = `hue-rotate(${colour}deg)`;
        let x = Math.random() * (window.innerWidth - this.div.clientWidth);
        let y = Math.random() * (window.innerHeight - this.div.clientHeight);
        this.div.style.transform = `translate(${x}px, ${y}px)`;
        this.div.addEventListener("click", () => this.clickFish());
    }
    clickFish() {
        this.div.classList.add("dead");
    }
}
class Game {
    constructor() {
        console.log("Game created");
        for (let i = 0; i < 100; i++) {
            this.fish = new Fish;
            this.bubble = new Bubble;
        }
        for (let i = 0; i < 20; i++) {
            this.can = new Can;
        }
    }
}
window.addEventListener("load", () => new Game());
//# sourceMappingURL=main.js.map