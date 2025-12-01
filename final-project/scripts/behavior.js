const output = document.getElementById("output");
const inputForm = document.getElementById("input-form");
const userInput = document.getElementById("user-input");
const hint = document.getElementById("hint");
const screenEl = document.querySelector(".behavior-screen");

let step = 0;
let typing = false;

let readyToContinue = false;

let data = {
  emotion: "",
  loss: "",
  pretend: "",
  trade: ""
};

function clearUI() {
  inputForm.classList.add("hidden");
  hint.textContent = "";
  userInput.value = "";
}

function typeLine(text, callback) {
  typing = true;
  const p = document.createElement("p");
  p.className = "output-line";
  output.appendChild(p);

  let i = 0;
  function tick() {
    p.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) setTimeout(tick, 40);
    else {
      typing = false;
      if (callback) callback();
    }
  }
  tick();
}

function glitch() {
  screenEl.classList.add("glitch");
  setTimeout(() => screenEl.classList.remove("glitch"), 200);
}

function next() {
  step++;
  output.innerHTML = ""; 
  clearUI();

  if (step === 1) {
    typeLine("QUESTION 1.", () =>
      typeLine("What emotion controls you the most?", () => {
        inputForm.classList.remove("hidden");
        hint.textContent = "type and submit";
        userInput.focus();
      })
    );
  }

  else if (step === 2) {
    typeLine("QUESTION 2.", () =>
      typeLine("What do you fear losing the most?", () => {
        inputForm.classList.remove("hidden");
        hint.textContent = "type and submit";
        userInput.focus();
      })
    );
  }

  else if (step === 3) {
    typeLine("QUESTION 3.", () =>
      typeLine("What part of yourself do you pretend is fine?", () => {
        inputForm.classList.remove("hidden");
        hint.textContent = "type and submit";
        userInput.focus();
      })
    );
  }

  else if (step === 4) {
    typeLine("QUESTION 4.", () =>
      typeLine("What would you trade for perfect personalization?", () => {
        inputForm.classList.remove("hidden");
        hint.textContent = "type and submit";
        userInput.focus();
      })
    );
  }

  else {
    finalProfile();
  }
}

// FINAL MACHINE PROFILE
function finalProfile() {
  clearUI();
  typeLine("Computing your ideal consumer profile…", () => {
    setTimeout(() => {
      glitch();

      typeLine(`PRIMARY EMOTION: ${data.emotion.toUpperCase()}.`, () =>
        typeLine(`PRIMARY FEAR: ${data.loss.toUpperCase()}.`, () =>
          typeLine(`HIDDEN FRACTURE: ${data.pretend.toUpperCase()}.`, () =>
            typeLine(`EXCHANGE WILLINGNESS: "${data.trade}".`, () =>
              typeLine("DATA MONETIZATION SCORE: HIGH.", () =>
                typeLine("Your data has been sold—", () => {
                  glitch();
                  setTimeout(() => {
                    typeLine("—saved. We meant saved.", () => {
                      hint.textContent = "sequence complete. Press enter to continue.";
                      readyToContinue = true;
                    });
                  }, 250);
                })
              )
            )
          )
        )
      );
    }, 600);
  });
}

document.addEventListener("keydown", (e) => {
    if (readyToContinue && e.key === "Enter"){
        window.location.href = "#";
    }
});

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (typing) return;

  const val = userInput.value.trim();
  if (!val) return;

  glitch();
  clearUI();

  if (step === 1) {
    data.emotion = val;
    typeLine(`"${val}". Logged.`, () => {
      setTimeout(() => {
        output.innerHTML = "";
        next();
      }, 900);
    });
  }

  else if (step === 2) {
    data.loss = val;
    typeLine(`"${val}". Interpreted.`, () => {
      setTimeout(() => {
        output.innerHTML = "";
        next();
      }, 900);
    });
  }

  else if (step === 3) {
    data.pretend = val;
    typeLine(`"${val}". Archived.`, () => {
      setTimeout(() => {
        output.innerHTML = "";
        next();
      }, 900);
    });
  }

  else if (step === 4) {
    data.trade = val;
    typeLine(`"${val}". Exchange accepted.`, () => {
      setTimeout(() => {
        output.innerHTML = "";
        next();
      }, 900);
    });
  }
});

// START SEQUENCE
window.onload = () => {
  typeLine("SYSTEM ONLINE.", () =>
    typeLine("Good. You are here.", () =>
      typeLine("Let us profile your tendencies.", next)
    )
  );
};
