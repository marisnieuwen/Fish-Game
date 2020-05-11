window.addEventListener("load", makeEnvironment)


// eventlistener for clicking on fish and bubbles
addEventListener("click", clickFish)

// the amount of fish (in the school of fish)
let school = 215;

// function for creating the fish and bubbles
function makeEnvironment() {
   
    for (let i = 0; i < school; i++) {
   
    // fish posisitions and colour
    let fishProperties = {
        x: Math.floor(Math.random() * screen.width - 100),
        y: Math.floor(Math.random() * screen.height - 250),
        colour: Math.floor(Math.random() * 361)
    }
    
    //position of bubbles
    bubbleProperties = {
        x: Math.floor(Math.random() * screen.width - 50),
        y: Math.floor(Math.random() * screen.height - 250),
    }

    // fish element
    let fish = document.createElement("fish")
    document.body.appendChild(fish)
    fish.style.transform = `translate(${fishProperties.x}px, ${fishProperties.y}px)`
    fish.style.filter = `hue-rotate(${fishProperties.colour}deg)`
    fish.classList.add("fish")

    // bubble element
    let bubble = document.createElement("bubble")
    document.body.appendChild(bubble)
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