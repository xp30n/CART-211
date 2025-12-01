window.onload = () => {
    setTimeout(() => {
      document.body.classList.add("glitch");
    }, 7400);
  
    setTimeout(() => {
      document.body.style.transition = "opacity 2s";
      document.body.style.opacity = "0";
    }, 8200);
  };