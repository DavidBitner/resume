class UI {
  static changeBackground(projectId) {
    if (!projectId.includes("project")) {
      return;
    }

    const background = document.querySelector("body");

    if (projectId == "project1") {
      background.style.backgroundColor = "#008f11";
    }
    if (projectId == "project2") {
      background.style.backgroundColor = "#d6a283";
    }
    if (projectId == "project3") {
      background.style.backgroundColor = "#e2aada";
    }
    if (projectId == "project4") {
      background.style.backgroundColor = "#808080";
    }
    if (projectId == "project5") {
      background.style.backgroundColor = "#000533";
    }
    if (projectId == "project6") {
      background.style.backgroundColor = "#000000";
    }
  }

  static openPopup(projectId) {
    if (!projectId.includes("project")) {
      return;
    }

    const popup = document.querySelector(`.popup`);

    document.querySelector(`.overlay`).style.visibility = "visible";
    popup.style.transform = "scale(1)";
    popup.style.opacity = "1";
  }

  static closePopup() {
    const popup = document.querySelector(`.popup`);

    document.querySelector(`.overlay`).style.visibility = "hidden";
    popup.style.transform = "scale(0.8)";
    popup.style.opacity = "0";
  }
}

document.querySelector(".projects").addEventListener("mouseover", (e) => {
  UI.changeBackground(e.target.parentElement.id);
});

document.querySelector(".projects").addEventListener("mouseleave", (e) => {
  UI.resetBackground(e.target.parentElement.id);
});

window.addEventListener("click", (e) => {
  UI.openPopup(e.target.parentElement.id);

  if (e.target == document.querySelector(`.overlay`)) {
    UI.closePopup();
  }
});
