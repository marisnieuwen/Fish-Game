class Fish {

    div : HTMLElement

    constructor() {
        let game = document.getElementsByTagName("game")[0]

        // create fish element and append to game
        this.div = document.createElement("fish")
        game.appendChild(this.div)

        //random colour
        let colour = Math.random() * 360
        this.div.style.filter = `hue-rotate(${colour}deg)`

        //random location
        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)

        this.div.style.transform = `translate(${x}px, ${y}px)`

        //click event
        this.div.addEventListener("click", () => this.clickFish())

    }

    clickFish() {
        this.div.classList.add("dead")
    }
}