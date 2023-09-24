const allLinks = document.querySelectorAll('a');

let lightness = 0;
let saturation = 0;

allLinks.forEach((link) => {
    link.style.backgroundColor = `hsl(297, ${saturation}%, ${lightness}%)`;
    lightness += 1;
    saturation += 1;
});

allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        const folderPath = link.getAttribute('href');

        // Make an HTTP request to check if the folder exists
        fetch(folderPath, { method: 'HEAD' })
          .then(response => {
            if (response.status !== 200) {
              // Folder doesn't exist, prevent the default behavior and show an alert
              alert("This day hasn't been added yet.");
              e.preventDefault(); // Prevent navigation
            }
          })
          .catch(error => {
            // Handle any errors that occur during the fetch
            console.error("Error:", error);
          });
          return false;
    });
});
