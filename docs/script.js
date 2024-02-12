// Define the moon formation theories
   const theories = [
     "Giant Impact Theory",
     "Capture Theory",
     "Co-formation Theory"
   ];

   // Shuffle the theories randomly
   const shuffledTheories = theories.sort(() => Math.random() - 0.5);

   // Get the game container element
   const gameContainer = document.getElementById("game-container");

   // Create moon pieces dynamically
   shuffledTheories.forEach(theory => {
     const moonPiece = document.createElement("div");
     moonPiece.classList.add("moon-piece");
     moonPiece.textContent = theory;

     // Add click event listener to each moon piece
     moonPiece.addEventListener("click", () => {
       moonPiece.classList.toggle("selected");
     });

     gameContainer.appendChild(moonPiece);
   });

   const showButton = document.getElementById("show-button");
   const textContainer = document.getElementById("text-container");
    showButton.addEventListener("click", () => {
        textContainer.textContent = "This was first proposed in 1946 by Canadian geologist \"Reginald Daly \". The hypothesis suggests that the early Earth collided with a Mars-sized dwarf planet of the same orbit approximately 4.5 billion years ago";
    });