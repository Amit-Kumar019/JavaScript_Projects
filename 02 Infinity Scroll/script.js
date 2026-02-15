//  UNSPLASH API
const count = 10;
const API_KEY = "0y4FpBPwOCb94-TjO_aKFCp1PeSyybaq2fb7gGbGFZA";
const API_URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // catch Error
  }
}

getPhotos();
