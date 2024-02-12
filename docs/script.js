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
   const textContainer2 = document.getElementById("text-container2");
   const textContainer3 = document.getElementById("text-container3");
   const textContainer4 = document.getElementById("text-container4");
   const textContainer5 = document.getElementById("text-container5");
   const textContainer6 = document.getElementById("text-container6");
   const nextButton1 = document.getElementById("next-button1");
   const nextButton2 = document.getElementById("next-button2");
   const nextButton3 = document.getElementById("next-button3");
   const nextButton4 = document.getElementById("next-button4");
   const nextButton5 = document.getElementById("next-button5");
    showButton.addEventListener("click", () => {
        textContainer.textContent = "This was first proposed in 1946 by Canadian geologist \"Reginald Daly \". The hypothesis suggests that the early Earth collided with a Mars-sized dwarf planet of the same orbit approximately 4.5 billion years ago";
        showButton.style.display = "none";
        nextButton1.style.display = "inline-block";
    nextButton1.addEventListener("click", () => {
      textContainer2.textContent = "There are evidences that support this hypothesis: Both have the same or similar orbits. The stable isotope ratios of lunar and terrestrial rock are very identical. The Moon has a small iron core, giving it a lower density than Earth. When both collided, The impactor\’s core penetrated deep to the Earth\’s own core, resulting in the formation of the Moon. There are, in other star systems, similar collisions, resulting in debris discs";
      nextButton1.style.display = "none";
      nextButton2.style.display = "inline-block";
    });
    nextButton2.addEventListener("click", () => {
      textContainer3.textContent = "Important Questions\: If the Moon was a small planet which was captured by our field, how would their chemical compositions differ?. If the Moon and Earth formed from the same accretion disc, would their inner, chemical composition be similar or still very different?";
      nextButton2.style.display = "none";
      nextButton3.style.display = "inline-block";
    });
    nextButton3.addEventListener("click", () => {
      textContainer4.textContent = "Way before, the Apollo missions (spaceships sent to the Moon) collected 2200 samples of the Moon\’s rock (with a total mass of 382 kg). After the scientists experimented and tested with the rocks, the results were supporting and with the Giant Impact Theory. In 2012, a scientist called Robin M. Canup had a suggestion for a new theory. He said that both the Earth and Moon were formed from the collision of two protoplanets (both bigger than Mars). This formed the Earth and a debris disc, forming the Moon";
      nextButton3.style.display = "none";
      nextButton4.style.display = "inline-block";
    });
    nextButton4.addEventListener("click", () => {
      textContainer5.textContent = "Even though there is evidence that supports the Impact Theory, there are evidence against it:There is no visual evidence that a part of the Earth was molten. Moreover, no magma oceans are there on the Earth like that on the Moon.There is very tiny evidence of material of Theia, the protoplanet on the surface of Earth or Moon.There is no hypothesis that is fully supported with evidence that is truly right";
      nextButton4.style.display = "none";
      nextButton5.style.display = "inline-block";
    });
    nextButton5.addEventListener("click", () => {
      textContainer6.textContent = "Refrences: 1.Notes, 2.Wikipedia, 3.Youtube";
      nextButton5.style.display = "none";
    });
      });