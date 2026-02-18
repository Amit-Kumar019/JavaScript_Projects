const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];
//  UNSPLASH API
const count = 10;
const API_KEY = "0y4FpBPwOCb94-TjO_aKFCp1PeSyybaq2fb7gGbGFZA";
const API_URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}&count=${count}`;

// Creating Elements for Links & Photos
function displayPhotos() {
  photosArray.forEach((photo) => {
    // imageContainer.innerHTML = ""; // clear old image

    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(API_URL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // catch Error
  }
}

getPhotos();

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
  }
});
