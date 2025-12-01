window.onload = () => {
    const dinoBox = document.getElementById("dino-box");
  
    setTimeout(() => {
      dinoBox.style.opacity = "1";
      dinoBox.style.pointerEvents = "auto";
    }, 10000); // 10 seconds
  };

  document.getElementById("ok-button").addEventListener("click", () => {
    window.location.href = "#";  
  });
  
  