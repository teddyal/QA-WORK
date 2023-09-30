var images = [
    "PICTURES/1.jpg",
    "PICTURES/2.jpg",
    "PICTURES/3.jpg",
    "PICTURES/4.jpg"
];


var currentImageIndex = 0;


function changeImage() {
    // Get the <img> element by its id
    var img = document.getElementById("myImage");

    // Change the image src attribute to the current image file name
    img.src = images[currentImageIndex];

    // Increment the current image index
    currentImageIndex++;

    // If the current image index is greater than or equal to the number of images in the array, reset it to 0
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

}
setInterval(changeImage, 3000); // Change the image every 4 seconds
