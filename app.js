// List of rotating image URLs
const imageUrls = [
    "./resources/images/plains.png",
    "./resources/images/island.png",
    "./resources/images/swamp.png",
    "./resources/images/mountain.png",
    "./resources/images/forest.png"
  ];

  // Current image index
  let currentIndex = 0;

  function cycleImage() {
    // Image element
    const imgElement = document.getElementById('cycle-image');

    // Update the index to the next image, cycling back to 0 if at the end
    currentIndex = (currentIndex + 1) % imageUrls.length;

    // Change the image to the next image
    imgElement.src = imageUrls[currentIndex];
  }