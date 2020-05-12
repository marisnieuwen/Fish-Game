window.addEventListener("load", makeEnvironment)

let game = document.getElementsByTagName("game")[0]
// eventlistener for clicking on fish and bubbles
addEventListener("click", clickFish)

// the amount of fish (in the school of fish)
let school = 215;

// function for creating the fish and bubbles
function makeEnvironment() {
   
    for (let i = 0; i < school; i++) {
   
    // fish posisitions and colour
    let fishProperties = {
        x: Math.floor(Math.random() * screen.width),
        y: Math.floor(Math.random() * screen.height),
        colour: Math.floor(Math.random() * 360)
    }
    
    //position of bubbles
    bubbleProperties = {
        x: Math.floor(Math.random() * screen.width),
        y: Math.floor(Math.random() * screen.height),
    }

    // fish element
    let fish = document.createElement("fish")
    game.appendChild(fish)
    fish.style.transform = `translate(${fishProperties.x}px, ${fishProperties.y}px)`
    fish.style.filter = `hue-rotate(${fishProperties.colour}deg)`
    fish.classList.add("fish")

    // bubble element
    let bubble = document.createElement("bubble")
    game.appendChild(bubble)
    bubble.style.transform = `translate(${bubbleProperties.x}px,${bubbleProperties.y}px)`
    bubble.classList.add("bubble")
    }

}

// Clickhandler function
function clickFish() {
    let target = event.target

    // add deadfish to classlist when fish is clicked
    if(target.classList.contains("fish")) {
        target.classList.add("deadfish")
    }

    //remove bubble
    if(target.classList.contains("bubble")){
        target.remove()
    }
}