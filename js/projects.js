const projects = [
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featured_image: 'img.webp',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live_link: '#',
    source_link: '#',
    circle: 'circle3',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featured_image: 'img.webp',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live_link: '#',
    source_link: '#',
    circle: 'circle4',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featured_image: 'img.webp',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live_link: '#',
    source_link: '#',
    circle: 'circle5',
  },
  {
    id: 1,
    name: 'Multi-Post Stories',
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. ",
    featured_image: 'img.webp',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    live_link: '#',
    source_link: '#',
    circle: 'circle6',
  },
];

const projectsContainer = document.getElementById('projects-container');
const modal = document.getElementById('project-modal');

const allProjects = projects
  .map((project) => {
    return `
        <div class="work1">
        <div class="img1">
          <img src="images/${
            project.featured_image
          }" class="image" alt="software-portfolio">
        </div>
        <div class="info1">
          <h2 class="sub1">${project.name}</h2>
          <p class="desc1">
            ${project.description}
          </p>
          <ul class="main-works">
            ${project.technologies
              .map((technology) => {
                return `<li class="works">${technology}</li>`;
              })
              .join('')}
          </ul>
          <div class="button">
              <button onclick="showModal(${project.id})" class="main-button">See Project</button>
          </div>
        </div>
      </div>
      <div class="${project.circle}"></div>
  `;
  })
  .join('');

projectsContainer.innerHTML = allProjects;

const showModal = (projectId) => {
  const modalData = projects.find((element) => {
    if(projectId === element.id) {
      return true;
    }
  });

  modal.innerHTML = modalTemplate(modalData);

};

const modalTemplate = (project) => {
  return `
      <div class="modal-container">
        <div class="modal-head">
          <h2 class="modal-title">${project.name}</h2>
          <button id="modal-close" onclick="modalClose()" class="modal-close">
            <img
              src="images/Icon-Cancel.svg"
              alt="Close button"
              class="modal-close-icon"
            />
          </buttton>
        </div>
        <div class="modal-body">
          <img
            src="images/${project.featured_image}"
            alt="${project.name}"
            class="detail-img"
          />
          <p class="modal-desc">
            ${project.description}
          </p>
          <ul class="technologies">
            ${
              project.technologies.map((technology) => {
                return `<li class="technology">${technology}</li>`; 
              })
            }
          </ul>
        </div>
      </div>

  `;
}

const modalClose = (source) => {
  modal.innerHTML = ""; 
}