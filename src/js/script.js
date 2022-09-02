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

  static openPopup() {}
}

document.querySelector(".projects").addEventListener("mouseover", (e) => {
  UI.changeBackground(e.target.parentElement.id);
});

document.querySelector(".projects").addEventListener("click", (e) => {
  UI.openPopup(e.target.parentElement.id);
});
