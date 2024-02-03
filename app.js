import theodoros from "./lib.js/Me.js";
import website from "./lib.js/website.js";
import { createElement } from "./lib.js/elementCreator.js";
import { aboutIcon, educationIcon, experienceIcon, skillsIcon, projectsIcon, certificatesIcon, contactIcon, emailIcon, linkedInIcon, githubIcon } from "./lib.js/iconsCreator.js";

// Creation of 'About Me' section
const section_About = createElement('section');
section_About.id = 'about';
const h2_About = createElement('h2');
h2_About.innerHTML = `${aboutIcon.outerHTML} About Me`;

const imgElement_About = createElement('img');
imgElement_About.id = 'profile-picture';
imgElement_About.alt = "Theodoros profile picture";
imgElement_About.src = theodoros.about.profile_picture;

const pElement_About = createElement('p');
pElement_About.textContent = theodoros.about.ambition;

section_About.appendChild(h2_About);
section_About.appendChild(imgElement_About);
section_About.appendChild(pElement_About);
document.querySelector('main').appendChild(section_About);

// Creation of 'Education' section
const section_Education = createElement('section');
section_Education.id = 'education';
const h2_Education = createElement('h2');
h2_Education.innerHTML = `${educationIcon.outerHTML} Education`;

const ulElement_Education = createElement('ul');
const liElement_Education = createElement('li');
const h3Element_Education = createElement('h3');
const pElement_Education = createElement('p');

h3Element_Education.textContent = theodoros.education.degree;
pElement_Education.innerHTML = `${theodoros.education.university}<br>${theodoros.education.duration}<br>${theodoros.education.location}`;

liElement_Education.appendChild(h3Element_Education);
liElement_Education.appendChild(pElement_Education);
ulElement_Education.appendChild(liElement_Education);

section_Education.appendChild(h2_Education);
section_Education.appendChild(ulElement_Education);
document.querySelector('main').appendChild(section_Education);

// Creation of 'Experience' section
const section_Experience = createElement('section');
section_Experience.id = 'experience';
const h2_Experience = createElement('h2');
h2_Experience.innerHTML = `${experienceIcon.outerHTML} Experience`;

const ulElement_Experience = createElement('ul');

for (const info of theodoros.experience.it_department) {
  const liElement = createElement('li');
  const h3Element = createElement('h3');
  const pElements = [];

  h3Element.textContent = info.job;

  const pElement_Job = createElement('p');
  pElement_Job.innerHTML = `@${info.company}<br>${info.duration}<br>${info.location}`;

  const pElement_jobDescription = createElement('p');
  pElement_jobDescription.textContent = info.jobDescription;
  pElements.push(pElement_Job, pElement_jobDescription);
    
  liElement.appendChild(h3Element);

  for (const pElement of pElements) {
    liElement.appendChild(pElement);
  }
  ulElement_Experience.appendChild(liElement);
}

for (const info of theodoros.experience.other) {
  const liElement = createElement('li');
  const h3Element = createElement('h3');
  const pElements = [];

  h3Element.textContent = info.job;

  const pElement_jobDescription = createElement('p');
  pElement_jobDescription.textContent = info.jobDescription;
  pElements.push(pElement_jobDescription);

  liElement.appendChild(h3Element);

  for (const pElement of pElements) {
    liElement.appendChild(pElement);
  }
  ulElement_Experience.appendChild(liElement);
}

section_Experience.appendChild(h2_Experience);
section_Experience.appendChild(ulElement_Experience);
document.querySelector('main').appendChild(section_Experience);

// Creation of 'Skills' section
const section_Skills = createElement('section');
section_Skills.id = 'skills';
const h2_Skills = createElement('h2');
h2_Skills.innerHTML = `${skillsIcon.outerHTML} Skills`;

const ulElement_Skills = createElement('ul');

for (const skill of theodoros.skills.professional) {
  const liElement = createElement('li');
  const h3Element = createElement('h3');
  const pElement = createElement('p');

  h3Element.textContent = skill.name;
  pElement.textContent = skill.description;

  liElement.appendChild(h3Element);
  liElement.appendChild(pElement);
  ulElement_Skills.appendChild(liElement);
}

for (const skill of theodoros.skills.basic) {
  const liElement = createElement('li');
  const h3Element = createElement('h3');
  const pElement = createElement('p');

  h3Element.textContent = skill.name;
  pElement.innerHTML = skill.description + ' <span class="bold">' + skill.basics.join(', ') + '</span>';

  liElement.appendChild(h3Element);
  liElement.appendChild(pElement);
  ulElement_Skills.appendChild(liElement);
}

section_Skills.appendChild(h2_Skills);
section_Skills.appendChild(ulElement_Skills);

document.querySelector('main').appendChild(section_Skills);

// Creation of 'My Projects' section
const section_Projects = createElement('section');
section_Projects.id = 'projects';
const h2_Projects = createElement('h2');
h2_Projects.innerHTML = `${projectsIcon.outerHTML} My Projects`;

const ulElement_Projects = createElement('ul');

for (const info of theodoros.projects.chrome_extension) {
  const liElement = createElement('li');
  const h3Element = createElement('h3');
  const pElements = [];
  
  h3Element.textContent = info.name;
  
  const extension_Icon = createElement('img');
  extension_Icon.classList.add('chromeStore-icon');
  extension_Icon.alt = `${info.name} icon`;
  extension_Icon.src = info.chromeStoreIcon;

  const extension_Link = createElement('a');
  extension_Link.href = info.chromeStoreLink;
  extension_Link.target = '_blank';
  extension_Link.title = `Go to ${info.name} Chrome Web Store page`;
  extension_Link.textContent = info.name;

  const divElement = createElement('div');
  divElement.classList.add('projecstIcon-container');
  divElement.appendChild(extension_Icon);
  divElement.innerHTML += `<p>${info.type}</p>`;

  const pElement_Description = createElement('p');
  pElement_Description.innerHTML = `[${info.accountability}]<br>${info.description}`;

  const pElement_ExtensionLink = createElement('p');
  pElement_ExtensionLink.textContent = 'Chrome Web Store link: ';
  pElement_ExtensionLink.appendChild(extension_Link);

  pElements.push(pElement_Description, pElement_ExtensionLink);

  liElement.appendChild(h3Element);
  liElement.appendChild(divElement);

  for (const pElement of pElements){
    liElement.appendChild(pElement);
  }
  ulElement_Projects.appendChild(liElement);
}

/* Github projects to be added:
for (const info of theodoros.projects.website) {
  const liElement = createElement('li');
  const h3Element = createElement('h3');
  const pElements = [];

  h3Element.textContent = info.name;

  const github_Link = createElement('a');
  github_Link.href = info.githubProjectLink;
  github_Link.target = '_blank';
  github_Link.title = `Go to ${info.name} Github page`;
  github_Link.textContent = info.name;

  const divElement = createElement('div');
  divElement.classList.add('projecstIcon-container');
  divElement.innerHTML = `<p>${info.type}</p>`;

  const pElement_Description = createElement('p');
  pElement_Description.innerHTML = `[${info.accountability}]<br>${info.description}`;

  const pElement_GithubLink = createElement('p');
  pElement_GithubLink.textContent = 'Github project link: ';
  pElement_GithubLink.appendChild(github_Link);

  pElements.push(pElement_Description, pElement_GithubLink);

  liElement.appendChild(h3Element);
  liElement.appendChild(divElement);

  for (const pElement of pElements){
    liElement.appendChild(pElement);
  }
  ulElement_Projects.appendChild(liElement);
}
*/

section_Projects.appendChild(h2_Projects);
section_Projects.appendChild(ulElement_Projects);
document.querySelector('main').appendChild(section_Projects);

// Creation of 'Certificates' section
const section_Certificates = createElement('section');
section_Certificates.id = 'certificates';
const h2_Certificates = createElement('h2');
h2_Certificates.innerHTML = `${certificatesIcon.outerHTML} Certificates`;

const ulElement_Certificates = createElement('ul');

for (const certificate of theodoros.certificates) {
  const liElement = createElement('li');
  const h3Element = createElement('h3');
  const pElement = createElement('p');

  h3Element.textContent = certificate.name;
  pElement.textContent = `${certificate.evaluator}, ${certificate.date}`;

  liElement.appendChild(h3Element);
  liElement.appendChild(pElement);
  ulElement_Certificates.appendChild(liElement);
}

section_Certificates.appendChild(h2_Certificates);
section_Certificates.appendChild(ulElement_Certificates);

document.querySelector('main').appendChild(section_Certificates);

// Creation of 'Contact' section
const section_Contact = createElement('section');
section_Contact.id = 'contact';
const h2_Contact = createElement('h2');
h2_Contact.innerHTML = `${contactIcon.outerHTML} Contact Me`;

const ulElement_Contact = createElement('ul');
const liElement = createElement('li');
const h3Element_Email = createElement('h3');
const h3Element_LinkedIn = createElement('h3');
const h3Element_Github = createElement('h3');

h3Element_Email.innerHTML = `Email: ${theodoros.about._email}`;
h3Element_LinkedIn.innerHTML = `LinkedIn: ${theodoros.about._linkedIn}`;
h3Element_Github.innerHTML = `Github: ${theodoros.about._github}`;

liElement.appendChild(h3Element_Email);
liElement.appendChild(h3Element_LinkedIn);
liElement.appendChild(h3Element_Github);
ulElement_Contact.appendChild(liElement);

section_Contact.appendChild(h2_Contact);
section_Contact.appendChild(ulElement_Contact);

document.querySelector('main').appendChild(section_Contact);

// Default order the sections.id are shown to the page
const defaultOrder = ['about', 'education', 'experience', 'skills', 'projects', 'certificates', 'contact'];

// The buttons that randomize or derandomize the order of the section elements of the <main> page
document.addEventListener('DOMContentLoaded', () => {
  const randomizeButton = document.querySelector('#randomize-button');
  const resetButton = document.querySelector('#reset-button');
  const main = document.querySelector('main');

  randomizeButton.addEventListener('click', () => {
    const sections = Array.from(document.querySelectorAll('main section'));
    const shuffledSections = shuffleArray(sections);

    main.innerHTML = '';

    for (const section of shuffledSections) {
      main.appendChild(section);
    }
  });

  resetButton.addEventListener('click', () => {
    for (const sectionId of defaultOrder) {
      const section = document.querySelector(`#${sectionId}`);
      main.appendChild(section);
    }
  });
});

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

// Smooth scrolling effect for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Footer content dynamically added
const footer_Description = document.getElementById('footer-desc');
footer_Description.textContent = website.information;

const footer_Design = document.getElementById('footer-design');
footer_Design.innerHTML = `<p>Copyright &copy; ${website.yearUpdated} ${theodoros.getFullName()}</p>`;

const emailToIcon = createElement('a');
emailToIcon.href = `mailto:${theodoros.about._email}`;
emailToIcon.title = 'Send direct Email';
emailToIcon.innerHTML = `${emailIcon.outerHTML}`;
footer_Design.appendChild(emailToIcon);

const linkedInToIcon = createElement('a');
linkedInToIcon.href = `${theodoros.about._linkedIn}`;
linkedInToIcon.title = "Open LinkedIn profile to a new page";
linkedInToIcon.innerHTML = `${linkedInIcon.outerHTML}`;
linkedInToIcon.target = '_blank';
footer_Design.appendChild(linkedInToIcon);

const githubToIcon = createElement('a');
githubToIcon.href = `${theodoros.about._github}`;
githubToIcon.title = "Open Github profile to a new page";
githubToIcon.innerHTML = `${githubIcon.outerHTML}`;
githubToIcon.target = '_blank';
footer_Design.appendChild(githubToIcon);

// Scroll to top for arrow link
const arrowToTop = document.getElementById('arrow-to-top');
arrowToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});