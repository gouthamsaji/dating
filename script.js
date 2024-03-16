const noButton = document.getElementById("noButton"); // Select button 2 using its ID

noButton.addEventListener("mouseover", () => {
  const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth); // Adjust for button width
  const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight); // Adjust for button height
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

noButton.addEventListener("mouseout", () => {
  // Generate new random positions within reasonable limits
  const maxOffset = 100; // Adjust value for desired movement range
  const randomX = Math.floor(Math.random() * maxOffset * 2 - maxOffset);
  const randomY = Math.floor(Math.random() * maxOffset * 2 - maxOffset);
  noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
