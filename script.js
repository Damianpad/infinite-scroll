
// Unspladsh API
const count = 10;
const apiKey = 'woQsuYq2nQzz_3JfD1Lpbx1rR23K79j3CWeKZ2gES3g';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get Photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error

    }
}

// On Load
getPhotos();