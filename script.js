// document.getElementById("playButton").addEventListener("click", function () {
//   const balloonsContainer = document.getElementById("balloons");
//   balloonsContainer.innerHTML = ""; // Clear existing balloons

//   // Create multiple balloons with text inside
//   for (let i = 0; i < 30; i++) {
//     const balloon = document.createElement("div");
//     balloon.className = "balloon";
//     balloon.style.right = `${Math.random() * 100}vw`; // Random horizontal position
//     balloon.textContent = "You mean the world to me";
//     balloonsContainer.appendChild(balloon);

//     // Remove balloon after animation ends
//     balloon.addEventListener("animationend", function () {
//       balloon.remove();
//     });
//   }
// });

document.getElementById("playButton").addEventListener("click", function () {
  const balloonsContainer = document.getElementById("balloons");
  balloonsContainer.innerHTML = ""; // Clear existing balloons

  // Create multiple balloons with text inside
  for (let i = 0; i < 30; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.setProperty("--translateX", Math.random()); // Random horizontal position
    balloon.textContent = "You mean the world to me";
    balloonsContainer.appendChild(balloon);

    // Remove balloon after animation ends
    balloon.addEventListener("animationend", function () {
      balloon.remove();
    });
  }
});
