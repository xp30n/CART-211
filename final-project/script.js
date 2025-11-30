/*=================================================
=              IMAGE CAROUSEL SCRIPT              =
==================================================*/

// const galleryContainer = document.querySelector(".gallery-container");
// const galleryControlsContainer = document.querySelector(".gallery-controls");
// const galleryControls = ["previous", "next"];
// const galleryItems = document.querySelectorAll(".gallery-item");

// class Carousel {
//   constructor(container, items, controls) {
//     this.carouselContainer = container;
//     this.carouselControls = controls;
//     this.carouselArray = [...items];
//     this.totalItems = this.carouselArray.length;
//   }

//   updateGallery() {
//     this.carouselArray.forEach((el, index) => {
//       for (let i = 1; i <= this.totalItems; i++) {
//         el.classList.remove(`gallery-item-${i}`);
//       }
//     });
//     this.carouselArray.forEach((el, i) => {
//       el.classList.add(`gallery-item-${i + 1}`);
//     });
//   }

//   setCurrentState(direction) {
//     if (direction.className.includes("previous")) {
//       this.carouselArray.unshift(this.carouselArray.pop());
//     } else {
//       this.carouselArray.push(this.carouselArray.shift());
//     }
//     this.updateGallery();
//   }

//   setControls() {
//     this.carouselControls.forEach((control) => {
//       let button = document.createElement("button");
//       button.className = `gallery-controls-${control}`;
//       button.innerText = control;
//       galleryControlsContainer.appendChild(button);
//     });
//   }

//   useControls() {
//     const triggers = [...galleryControlsContainer.childNodes];
//     triggers.forEach((control) => {
//       control.addEventListener("click", (e) => {
//         e.preventDefault();
//         this.setCurrentState(control);
//       });
//     });
//   }
// }

// const exampleCarousel = new Carousel(
//   galleryContainer,
//   galleryItems,
//   galleryControls
// );

// exampleCarousel.setControls();
// exampleCarousel.useControls();

/*=================================================
=              PAGE 5 TERMINAL SCRIPT             =
==================================================*/

const terminal = document.getElementById("terminal");
const inputField = document.getElementById("user-input");

// Allows the user to type in the terminal without having to click it when the page first loads
if (inputField) {
  window.onLoad = () => inputField.focus;
}

// TYPING EFFECT FOR TEXT
function typeText(text, delay = 20) {
  return new Promise((resolve) => {
    let i = 0;
    let line = document.createElement(div);
    terminal.appendChild(line);

    function typeChar() {
      if (i < text.length) {
        line.textContent += text[i];
        i++;
        // Keeps the bottom of the text visible as users types
        terminal.scrollTop = terminal.scrollHeight;
        setTimeout(typeChar, delay);
      } else {
        resolve();
      }
    }
    typeChar();
  });
}

// Prints the text based on what the user types
function print(text) {
  const line = document.createElement("div");
  line.textContent = text;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

async function processCommand(cmd) {
  cmd = cmd.toUpperCase().trim();
  print(`EXOS > ${cmd}`);

  // Commands that will display based on the word that is entered into the terminal
  if (cmd === "HELP") {
    await typeText("AVAILABLE COMMANDS:");
    await typeText("- HELP");
    await typeText("- SCAN_USER");
    await typeText("- EXPOSE");
    await typeText("- FOOTPRINT");
    await typeText("- CONTINUE");

  } else if (cmd === "SCAN_USER") {
    await typeText("EXTRACTING DIGITAL FOOTPRINT...");
    await typeText("CROSS-REFERENCING BEHAVIORAL PATTERNS...");
    await typeText("SCAN COMPLETE.");

  } else if (cmd === "FOOTPRINT") {
    await typeText("YOUR DIGITAL FOOTPRINT INCLUDES:");
    await typeText("- CREATIVE OUTPUT LOGS");
    await typeText("- ENGAGEMENT PATTERNS");
    await typeText("- METADATA TRAILS");
    await typeText("- PREDICTIVE BEHAVIOR PROFILES");
    await typeText("THIS DATA IS USED TO PREDICT, INFLUENCE AND CONTROL.");

  } else if (cmd === "EXPOSE") {
    await typeText("DECRYPTING REDACTED FILES...");
    await typeText("[██████████████████████████████]");
    await typeText("[PROFILE LINKED → AD TARGET MODEL]");
    await typeText("[ENGAGEMENT LOOP → BEHAVIOR ENGINEERING]");
    await typeText("REVEALING HIDDEN STRUCTURES...");

  } else if (cmd === "CONTINUE") {
    await typeText("REDIRECTING TO NEXT ACCESS NODE...");
    setTimeout(() => {
      window.location.href = "#";
    }, 800);
  } else {
    await typeText(`UNKNOWN COMMAND: ${cmd}`);
  }
}

// Allows the user to press "Enter" to input commands
if (inputField) {
    inputField.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            let command = inputField.value;
            inputField.value = "";
            processCommand(command);
        }
    });
}