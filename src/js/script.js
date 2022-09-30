import { projects } from "./data.js";

class UI {
  static changeBackground(projectId) {
    if (!projectId.includes("project")) {
      return;
    }

    const body = document.querySelector("body");

    body.style.color = "white";

    if (projectId == "project1") {
      body.style.backgroundColor = "#195020";
    }
    if (projectId == "project2") {
      body.style.backgroundColor = "#714f3b";
    }
    if (projectId == "project3") {
      body.style.backgroundColor = "#886a84";
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

    UI.loadProject(projects[`${projectId}`]);

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

  static loadTitles() {
    for (let i = 1; i <= 4; i++) {
      particlesJS.load(`title${i}`, "src/js/particles.json", function () {});
    }
  }

  static loadProject(project) {
    const projectIcon = document.querySelector(`.popup__icon`);
    const projectTitle = document.querySelector(`.popup__title`);
    const projectSubtitle = document.querySelector(`.popup__subtitle`);
    const highlightsContainer = document.querySelector(`.popup__highlights`);
    const imgsContainer = document.querySelector(`.popup__imgs`);
    const projectText = document.querySelector(`.popup__text`);
    const projectBtn = document.querySelector(`.popup__btn`);

    highlightsContainer.innerHTML = "";
    imgsContainer.innerHTML = "";

    projectIcon.style.backgroundImage = `url("src/img/projects/${project.icon}")`;
    projectTitle.innerHTML = project.title;
    projectSubtitle.innerHTML = project.subtitle;
    projectText.innerHTML = project.text;
    projectBtn.href = project.link;

    project.highlights.forEach((highlight) => {
      const element = document.createElement("div");
      element.classList.add("popup__highlight");
      element.innerHTML = highlight;

      highlightsContainer.appendChild(element);
    });

    project.imgs.forEach((img) => {
      const element = document.createElement("div");
      element.classList.add("popup__img");
      element.style.backgroundImage = `url("src/img/projects/${img}")`;

      imgsContainer.appendChild(element);
    });
  }
}

window.addEventListener("load", UI.loadTitles);

window.addEventListener("click", (e) => {
  UI.openPopup(e.target.parentElement.id);

  if (e.target == document.querySelector(`.overlay`)) {
    UI.closePopup();
  }

  if (e.target == document.querySelector(`#overlay-modal`)) {
    UI.closeModal();
  }
});

document.querySelector(".projects").addEventListener("mouseover", (e) => {
  UI.changeBackground(e.target.parentElement.id);
});

document.querySelector(".projects").addEventListener("mouseleave", (e) => {
  UI.resetBackground(e.target.parentElement.id);
});

document
  .querySelector(`#btn-more-projects`)
  .addEventListener("click", UI.openModal);

function createProject(title, img) {
  const grid = document.querySelector(`.modal__grid`);
}
