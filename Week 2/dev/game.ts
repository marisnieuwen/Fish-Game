class Game {

    fish : Fish
    bubble : Bubble
    trashcan : Trashcan

    constructor() {
        console.log("Game created")

        // loop to add fish and bubbles
        for (let i = 0; i < 100; i++) {
            this.fish = new Fish

            this.bubble = new Bubble
          
        }
        for (let i = 0; i < 20; i++) {
            this.trashcan = new Trashcan
            
        }
        
    }
}

window.addEventListener("load", () => new Game())