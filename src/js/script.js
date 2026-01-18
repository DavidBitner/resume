import { data } from "./data.js";
import { translations } from "./translations.js";

class App {
  constructor() {
    this.currentLang = "en";
    this.init();
  }

  init() {
    this.renderStaticTexts();
    this.renderDynamicContent();
    this.loadParticles();
    this.addEventListeners();
    this.initDragToScroll();
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === "en" ? "pt" : "en";

    const flag = document.querySelector("#change-language img");
    flag.src =
      this.currentLang === "en"
        ? "src/img/brazil.png"
        : "src/img/unitedStates.png";
    flag.alt =
      this.currentLang === "en" ? "Mudar para Português" : "Switch to English";

    this.renderStaticTexts();
    this.renderDynamicContent();
  }

  renderStaticTexts() {
    const t = translations[this.currentLang];

    document.querySelector("#title1 .title__text").textContent =
      t.titles.projects;
    document.querySelector("#title2 .title__text").textContent = t.titles.about;
    document.querySelector("#title3 .title__text").textContent =
      t.titles.education;
    document.querySelector("#title4 .title__text").textContent =
      t.titles.skills;

    document.querySelector("#btn-more-projects").textContent =
      t.labels.moreProjects;
    document.querySelector(".github__btn").textContent = t.labels.github;
    document.querySelector(".popup__btn").textContent = t.labels.popupBtn;
    document.querySelector(".footer__text").textContent = t.labels.footer;

    const skillTitles = document.querySelectorAll(".skills__title");
    if (skillTitles.length >= 4) {
      skillTitles[0].textContent = t.labels.techTitle;
      skillTitles[1].textContent = t.labels.toolsTitle;
      skillTitles[2].textContent = t.labels.softTitle;
      skillTitles[3].textContent = t.labels.langTitle;
    }
  }

  renderDynamicContent() {
    // 1. Projects
    Object.values(data.projects).forEach((proj) => {
      const card = document.getElementById(proj.id);
      if (card) {
        card.querySelector(".project__text").textContent =
          proj[this.currentLang].title;
      }
    });

    // 2. About
    const aboutContainer = document.querySelector(".about__grid");
    if (aboutContainer && data.about) {
      aboutContainer.innerHTML = data.about[this.currentLang]
        .map((p) => `<div class="about__paragraph">${p}</div>`)
        .join("");
    }

    // 3. Education
    const eduContainer = document.querySelector(".education__grid");
    if (eduContainer && data.education) {
      eduContainer.innerHTML = data.education
        .map(
          (item) => `
            <div class="education__item">
                <div class="education__where">${item.where}</div>
                <div class="education__title">${item[this.currentLang].title}</div>
                <div class="education__period">${item.period}</div>
                <div class="education__text">${item[this.currentLang].text}</div>
            </div>`,
        )
        .join("");
    }

    // 4. Skills
    const techList = document.getElementById("list-tech");
    const toolsList = document.getElementById("list-tools");
    const softList = document.getElementById("list-soft");
    const langList = document.getElementById("list-lang");

    if (techList)
      techList.innerHTML = data.skills.tech
        .map((s) => `<li class="list__item">${s}</li>`)
        .join("");

    if (toolsList)
      toolsList.innerHTML = data.skills.tools
        .map((s) => `<li class="list__item">${s}</li>`)
        .join("");

    if (softList)
      softList.innerHTML = data.skills.soft[this.currentLang]
        .map((s) => `<li class="list__item">${s}</li>`)
        .join("");

    if (langList)
      langList.innerHTML = data.skills.languages[this.currentLang]
        .map((l) => `<li class="list__item">${l}</li>`)
        .join("");
  }

  loadProjectPopup(projectId) {
    const project = data.projects[projectId];
    if (!project) return;

    const langData = project[this.currentLang];
    const popup = document.querySelector(".popup");

    popup.querySelector(".popup__icon").style.backgroundImage =
      `url("src/img/projects/${project.icon}")`;
    popup.querySelector(".popup__title").textContent = langData.title;
    popup.querySelector(".popup__subtitle").textContent = langData.subtitle;
    popup.querySelector(".popup__text").textContent = langData.text;
    popup.querySelector(".popup__btn").href = project.link;

    const hlContainer = popup.querySelector(".popup__highlights");
    hlContainer.innerHTML = langData.highlights
      .map((h) => `<div class="popup__highlight">${h}</div>`)
      .join("");

    const imgContainer = popup.querySelector(".popup__imgs");
    imgContainer.innerHTML = project.imgs
      .map(
        (img) =>
          `<div class="popup__img" style="background-image: url('src/img/projects/${img}')"></div>`,
      )
      .join("");

    this.toggleOverlay("#overlay-popup", true);
  }

  changeBackground(elementId) {
    const project = data.projects[elementId];
    if (project && project.color) {
      document.body.style.backgroundColor = project.color;
    }
  }

  resetBackground() {
    document.body.style.backgroundColor = "#7d7d7d";
  }

  toggleOverlay(selector, show) {
    const overlay = document.querySelector(selector);
    const content = overlay.firstElementChild;

    if (show) {
      overlay.style.visibility = "visible";
      overlay.style.opacity = "1";
      if (content.classList.contains("popup")) {
        content.style.transform = "translateY(0)";
        document.body.style.overflow = "hidden";
      } else {
        content.style.transform = "scale(1)";
      }
    } else {
      overlay.style.visibility = "hidden";
      overlay.style.opacity = "0";
      if (content.classList.contains("popup")) {
        content.style.transform = "translateY(100rem)";
        document.body.style.overflow = "visible";
        content.scrollTop = 0;
      } else {
        content.style.transform = "scale(0.8)";
      }
    }
  }

  loadParticles() {
    if (window.particlesJS) {
      for (let i = 1; i <= 5; i++) {
        window.particlesJS.load(`title${i}`, "src/js/particles.json");
      }
    }
  }

  initDragToScroll() {
    const slider = document.querySelector(".popup__imgs");
    let mouseDown = false;
    let startX, scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      mouseDown = false;
    });
    slider.addEventListener("mouseup", () => {
      mouseDown = false;
    });

    slider.addEventListener("mousemove", (e) => {
      if (!mouseDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });
  }

  addEventListeners() {
    document
      .getElementById("change-language")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });

    const projectsGrid = document.querySelector(".projects");
    projectsGrid.addEventListener("click", (e) => {
      const projectCard = e.target.closest(".project");
      if (projectCard) this.loadProjectPopup(projectCard.id);

      if (e.target.id === "btn-more-projects")
        this.toggleOverlay("#overlay-modal", true);
    });

    projectsGrid.addEventListener("mouseover", (e) => {
      const projectCard = e.target.closest(".project");
      if (projectCard) this.changeBackground(projectCard.id);
    });

    projectsGrid.addEventListener("mouseout", (e) => {
      if (
        e.target.closest(".project") &&
        !e.relatedTarget?.closest(".project")
      ) {
        this.resetBackground();
      }
    });

    window.addEventListener("click", (e) => {
      if (e.target.id === "overlay-popup")
        this.toggleOverlay("#overlay-popup", false);
      if (e.target.id === "overlay-modal")
        this.toggleOverlay("#overlay-modal", false);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new App();
});
