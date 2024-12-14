/*    Author: Kylie Drawdy
      Date: 10/21/2024
*/

function showProduct(value) {
    let imageDescription = imgDescriptions[value];
    let imageFile = imgFiles[value];

    document.getElementById("productTitle").innerHTML = "Product: " + (value + 1);
    document.getElementById("productDescription").innerHTML = imageDescription;
    document.getElementById("productImage").src = imageFile;

    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}