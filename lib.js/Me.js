// Personal info object
const theodoros = {
  about: {
    _fname : 'Theodoros',
    _lname : 'Kogiomtzis',
    _email : 'teo.kogiom@gmail.com',
    _linkedIn: 'https://www.linkedin.com/in/theodoros-kogiomtzis/',
    _github: 'https://github.com/TheoKogi',
    profile_picture: '/Images/Theodoros-Profile-Picture.jpg',
    ambition: "Hello, my name is Theodoros Kogiomtzis and I am a recent graduate of International Hellenic University of Kavala with a Bachelor's degree in Computer Software Engineering. I am passionate about front-end development, graphic design, and product promotion. I have experience with HTML, CSS, and JavaScript. I am excited to create visually appealing and user-friendly web applications."
  },
  getFullName() {
    return `${this.about._fname} ${this.about._lname}`;
  },

  education: {
    degree: "Bachelor's degree - Computer Software Engineering",
    university: 'International Hellenic University',
    duration: '2018 - 2023',
    location: 'Kavala, Eastern Macedonia and Thrace, Greece'
  },

  experience: {
    it_department: [
      {
        job: 'Software Quality Assurance Tester [Internship]',
        company: 'Dataverse Ltd',
        duration: 'May 2022 - Oct 2022',
        location: 'Thessaloniki, Central Macedonia, Greece',
        jobDescription: "Software review, bugs highlighting, UI/UX and workflow test, Network activity analysis, User Manuals and program's documentation writing, document templates creation. Reports made with the use of project management and issue tracking software tool."
      }
  ],
  other: [
      {
        job: "Waiter",
        jobDescription: "Season work as a waiter A and B in cafe-bar-reastaurants. Cooperative work, customer-centric    approach."
      }
    ]
  },

  skills: {
    professional: [      
      {
        name: 'HTML, CSS, JavaScript',
        description: 'Experience in creating Website applications and Chrome Extensions.'
      },
      {
        name: 'Web Accessibility',
        description: 'Experience in creating accessible web apps.'
      },
      {
        name: 'Quality Assurance - Software Testing',
        description: "Experience in assuring the quality of a web app product. Reviewing the product's use with Chrome Developer tools."
      },
      {
        name: 'UI Design - Graphics',
        description: "Experience with the software 'Canva'."
      },
      {
        name: 'Git - Github',
        description: "Experience with 'Github' and 'Git' for software development."
      },
      {
        name: 'Unity - AR development',
        description: "Personal experience with 'Unity' on working with AR apps. Use of AR development tools: 'AR Foundation' and 'Vuforia'."
      },
      {
        name: 'Microsoft Word - Microsoft Excel',
        description: "Personal experience with writing formal content on 'Microsoft Word' (User Manuals, Program documentation, Thesis publication). Personal experience with data entry management in 'Microsoft Excel'."
      }
    ],
    basic: [
      {
        name: 'Basic knowledge and fundamentals',
        description: 'Ιntroductory experience with the technologies:',
        basics: ['SQL', 'Adobe Photoshop']
      }
    ]
  },

  projects: {
    chrome_extension: [
      {
        name: 'Accessio for Accessibility',
        type: 'Chrome Acessibility Extension',
        accountability: 'University project',
        description: "Thesis: Web access support software. Designed and developed a Chrome browser extension that enhances web accessibility for users. The extension features a popup UI, a screen reader and a settings page. Available for free in Chrome Web Store.",
        chromeStoreLink: 'https://chromewebstore.google.com/detail/accessio-for-accessibilit/nlbfpkjigdndiodmbopfnmonahjfpdib?hl=el',
        chromeStoreIcon: '/Images/Accessio_128_background.png'
      }
    ]
    /* Github projects to be added:
    website: [
      {
        name: 'Test Website',
        type: 'Browser Website',
        accountability: 'Personal project',
        description: "A website about test. Made with HTML, CSS and JavaScript.",
        githubProjectLink: 'https://github.com/TheoKogi/repo/...'
      }
    ]
    */
  },

  certificates: [
    {
      name: 'Certificate of Proficiency in English (ECPE Level C2)',
      evaluator: 'Michigan Language Assessment',
      date: '2015'
    }
  ]
}

export default theodoros;