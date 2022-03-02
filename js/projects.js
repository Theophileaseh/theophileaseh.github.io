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
    circle: "circle3"
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
    circle: "circle4"
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
    circle: "circle5"
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
    circle: "circle6"
  },
];

const projectsContainer = document.getElementById('projects-container');

const allProjects = projects.map((project) => {
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
              <a href="#" class="main-button">See Project</a>
          </div>
        </div>
      </div>
      <div class="${project.circle}"></div>
  `;
}).join('');


projectsContainer.innerHTML = allProjects;

