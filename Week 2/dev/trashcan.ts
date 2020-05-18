class Trashcan {

    div : HTMLElement

    constructor() {
        let game = document.getElementsByTagName("game")[0]

        // create trashcan element and append to game
        this.div = document.createElement("trashcan")
        game.appendChild(this.div)

        //random location
        let x = Math.random() * (window.innerWidth - this.div.clientWidth)
        let y = Math.random() * (window.innerHeight - this.div.clientHeight)

        this.div.style.transform = `translate(${x}px, ${y}px)`

        //click event
        this.div.addEventListener("click", () => this.clickCan())

    }

    clickCan() {
        this.div.remove()
    }
}