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
  