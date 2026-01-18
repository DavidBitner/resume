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
    // 1. PROJETOS
    const projectsGrid = document.querySelector(".projects__grid");
    const modalGrid = document.querySelector(".modal__grid");

    projectsGrid.innerHTML = "";
    modalGrid.innerHTML = "";

    data.projects.forEach((proj) => {
      if (proj.highlight) {
        const card = document.createElement("div");
        card.classList.add("project");
        card.id = proj.id;
        card.innerHTML = `
          <div class="project__text">${proj[this.currentLang]?.title || proj.title}</div>
          <img src="src/img/${proj.imgCover}" alt="${proj.title}" class="project__img" />
        `;
        projectsGrid.appendChild(card);
      } else {
        const link = document.createElement("a");
        link.classList.add("modal__project");
        link.target = "_blank";
        link.href = proj.link;
        link.id = proj.id;
        link.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("src/img/${proj.imgCover}")`;
        link.innerHTML = `<div class="modal__project--text">${proj.title}</div>`;
        modalGrid.appendChild(link);
      }
    });

    // Botão More Projects
    const btnMore = document.createElement("button");
    btnMore.className = "projects__btn btn";
    btnMore.id = "btn-more-projects";
    btnMore.textContent = translations[this.currentLang].labels.moreProjects;
    projectsGrid.appendChild(btnMore);

    // 2. ABOUT ME
    const aboutGrid = document.querySelector(".about__grid");
    if (aboutGrid) {
      aboutGrid.innerHTML = data.about[this.currentLang]
        .map((p) => `<p>${p}</p>`)
        .join("");
    }

    // 3. EDUCATION
    const educationGrid = document.querySelector(".education__grid");
    if (educationGrid) {
      educationGrid.innerHTML = data.education
        .map((item) => {
          const content = item[this.currentLang];
          return `
          <div class="education__item">
            <span class="education__period">${item.period}</span>
            <h3 class="education__title">${content.title}</h3>
            <span class="education__where">${item.where}</span>
            <p class="education__text">${content.text}</p>
          </div>`;
        })
        .join("");
    }

    // 4. SKILLS
    const renderList = (id, items) => {
      const list = document.getElementById(id);
      if (list)
        list.innerHTML = items
          .map((i) => `<li class="list__item">${i}</li>`)
          .join("");
    };
    renderList("list-tech", data.skills.tech);
    renderList("list-tools", data.skills.tools);
    renderList("list-soft", data.skills.soft[this.currentLang]);
    renderList("list-lang", data.skills.languages[this.currentLang]);
  }

  // --- LÓGICA DE POPUP ---

  loadProjectPopup(projectId) {
    const project = data.projects.find((p) => p.id === projectId);
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
    imgContainer.scrollLeft = 0;
    imgContainer.innerHTML = project.imgs
      .map(
        (img) =>
          `<div class="popup__img" style="background-image: url('src/img/projects/${img}')"></div>`,
      )
      .join("");

    this.toggleOverlay("#overlay-popup", true);
  }

  changeBackground(elementId) {
    const project = data.projects.find((p) => p.id === elementId);
    if (project && project.color) {
      document.body.style.backgroundColor = project.color;
    }
  }

  resetBackground() {
    // Limpa o inline style para voltar a obedecer o CSS (Azul Dark Slate)
    document.body.style.backgroundColor = "";
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
      } else {
        content.style.transform = "scale(0.8)";
      }
    }
  }

  loadParticles() {
    if (window.particlesJS) {
      // Carrega partículas globais
      window.particlesJS.load("global-particles", "src/js/particles.json");
    }
  }

  initDragToScroll() {
    const slider = document.querySelector(".popup__imgs");
    if (!slider) return;
    let mouseDown = false,
      startX,
      scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      mouseDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => (mouseDown = false));
    slider.addEventListener("mouseup", () => (mouseDown = false));
    slider.addEventListener("mousemove", (e) => {
      if (!mouseDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const scroll = x - startX;
      slider.scrollLeft = scrollLeft - scroll;
    });
  }

  addEventListeners() {
    const langBtn = document.getElementById("change-language");
    if (langBtn)
      langBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleLanguage();
      });

    const projectsGrid = document.querySelector(".projects");
    if (projectsGrid) {
      projectsGrid.addEventListener("click", (e) => {
        const projectCard = e.target.closest(".project");
        if (projectCard) {
          this.loadProjectPopup(projectCard.id);
          return;
        }
        const btnMore = e.target.closest("#btn-more-projects");
        if (btnMore) {
          this.toggleOverlay("#overlay-modal", true);
        }
      });

      projectsGrid.addEventListener("mouseover", (e) => {
        const projectCard = e.target.closest(".project");
        if (projectCard) this.changeBackground(projectCard.id);
      });

      projectsGrid.addEventListener("mouseout", (e) => {
        const projectCard = e.target.closest(".project");
        if (projectCard && !e.relatedTarget?.closest(".project")) {
          this.resetBackground();
        }
      });
    }

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
