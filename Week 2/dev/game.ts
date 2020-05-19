class Game {

    fish : Fish
    bubble : Bubble
    can : Can

    constructor() {
        console.log("Game created")

        // loop to add fish and bubbles
        for (let i = 0; i < 100; i++) {
            this.fish = new Fish

            this.bubble = new Bubble
          
        }
        for (let i = 0; i < 20; i++) {
            this.can = new Can
            
        }
        
    }
}

window.addEventListener("load", () => new Game())