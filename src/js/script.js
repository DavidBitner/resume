const project1 = {
  title: "placeholder",
  subtitle: "",
  icon: "",
  technologies: [],
  imgs: [],
  text: "",
};

class ProjectsData {}

class UI {
  static changeBackground(projectId) {
    if (!projectId.includes("project")) {
      return;
    }

    const body = document.querySelector("body");

    body.style.color = "white";

    if (projectId == "project1") {
      body.style.backgroundColor = "#008f11";
    }
    if (projectId == "project2") {
      body.style.backgroundColor = "#d6a283";
    }
    if (projectId == "project3") {
      body.style.backgroundColor = "#e2aada";
    }
    if (projectId == "project4") {
      body.style.backgroundColor = "#606060";
    }
    if (projectId == "project5") {
      body.style.backgroundColor = "#000533";
    }
    if (projectId == "project6") {
      body.style.backgroundColor = "#212121";
    }
  }

  static resetBackground() {
    document.body.style.backgroundColor = "#7d7d7d";
  }

  static openPopup(projectId) {
    if (!projectId.includes("project")) {
      return;
    }

    const popup = document.querySelector(`.popup`);
    const overlay = document.querySelector(`#overlay-popup`);

    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    popup.style.transform = "translateY(0)";
    document.body.style.overflow = "hidden";
  }

  static closePopup() {
    const popup = document.querySelector(`.popup`);
    const overlay = document.querySelector(`#overlay-popup`);

    document.body.style.overflow = "visible";
    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    popup.style.transform = "translateY(100rem)";
    popup.scrollTop = 0;
  }

  static openModal() {
    const modal = document.querySelector(`.modal`);
    const overlay = document.querySelector(`#overlay-modal`);

    overlay.style.visibility = "visible";
    overlay.style.opacity = "1";
    modal.style.transform = "scale(1)";
  }

  static closeModal() {
    const modal = document.querySelector(`.modal`);
    const overlay = document.querySelector(`#overlay-modal`);

    overlay.style.visibility = "hidden";
    overlay.style.opacity = "0";
    modal.style.transform = "scale(0.8)";
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

  if (e.target == document.querySelector(`#overlay-modal`)) {
    UI.closeModal();
  }
});

document
  .querySelector(`#btn-more-projects`)
  .addEventListener("click", UI.openModal);
