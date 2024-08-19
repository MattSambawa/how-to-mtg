// Select image element
const img = document.getElementById('images');

//toggle variable
let toggle = true;
img.addEventListener('click', function() {

    toggle = !toggle;
    if(toggle) {
        img.src = './resources/images/island.png';
    } else {
        img.src = './resources/images/mountain.png';
    }
    
    //TODO: FIX TOGGLE FUNCTION TO SHOW ALL IMAGES
    /*toggle = toggle + 1;

    if (toggle > 4) {
        toggle = 0;
    }

    if(toggle = 0) {
        img.src = './resources/images/island.png';
    } else if (toggle = 1) {
        img.src = './resources/images/mountain.png';
    } else if (toggle = 2) {
        img.src = './resources/images/forest.png';
    } else if (toggle = 3) {
        img.src = './resources/images/swamp.png';
    } else if (toggle = 4) {
        img.src = './resources/images/plains.png';
    }*/

    console.log("event listener works!" + toggle);
})