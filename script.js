<<<<<<< HEAD
const imageData = [
    {
      name: "Electrode",
      description: "Gold electrode",
      category: "gold",
      url: "img/Au1.jpg"
    },
    {
      name: "Electrode",
      description: "Carbon Glass Electrode",
      category: "gold",
      url: "img/Au2.png"
    },
    {
      name: "Electrode",
      description: "Gold Nanoparticles",
      category: "gold",
      url: "img/Au3.jpg"
    },
    {
      name: "Thrombin Aptamer",
      description: "Bio recognition",
      category: "aptamer",
      url: "img/apt1.jpg"
    },
    {
      name: "Dopamine Aptamer",
      description: "Bio recognition",
      category: "aptamer",
      url: "img/apt2.jpg"
    },
    {
      name: "Histamine Aptamer",
      description: "Bio recognition",
      category: "aptamer",
      url: "img/apt3.png"
    },
    {
      name: "Cocaine Aptamer",
      description: "aptamer",
      category: "animals",
      url: "img/apt4.png"
    }
    // Add more objects as needed
  ];
  
  function displayImages(images) {
    const galleryElement = document.getElementById("gallery");
    galleryElement.innerHTML = "";
  
    images.forEach((image) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
      <img src="${image.url}" alt="${image.name}">
      <table>
        <tr><td><strong>Name:</strong></td><td>${image.name}</td></tr>
        <tr><td><strong>Description:</strong></td><td>${image.description}</td></tr>
      </table>
    `;
      galleryElement.appendChild(cardElement);
    });
  }
  
  function filter(category) {
    const filteredImages =
      category === "all"
        ? imageData
        : imageData.filter((img) => img.category === category);
    displayImages(filteredImages);
  }
  
  function sort(property) {
    const sortedImages = [...imageData].sort((a, b) =>
      a[property].localeCompare(b[property])
    );
    displayImages(sortedImages);
  }
  
  // Initial display
  displayImages(imageData);
  
=======
// Select relevant HTML elements
const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

document.getElementById("dee").innerHTML=JSON.stringify(filterableCards);

// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Function to sort the images in alphabetical order
function sortImagesAlphabetically() {
    const cardsContainer = document.getElementById('filterable-cards');
    const cards = Array.from(cardsContainer.getElementsByClassName('card'));
  
    cards.sort((a, b) => {
      const titleA = a.querySelector('.card-title').textContent.toLowerCase();
      const titleB = b.querySelector('.card-title').textContent.toLowerCase();
      return titleA.localeCompare(titleB);
    });
  
    // Clear the container
    cardsContainer.innerHTML = '';
  
    // Append the sorted cards back to the container
    for (const card of cards) {
      cardsContainer.appendChild(card);
    }
  }
  
  // Add a click event listener to the sort button
  const sortButton = document.getElementById('sort-button');
  sortButton.addEventListener('click', sortImagesAlphabetically);
  
  // Initial sorting
  sortImagesAlphabetically();
>>>>>>> 6ff6b882906b854da42e5c8ce9eaa5b13e2593c1
