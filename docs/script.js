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