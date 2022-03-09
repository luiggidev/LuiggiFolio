/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Luiggi Bellincanta",
  title: "Hello there, it's me Luiggi!",
  subTitle: emoji(
    "A passionate Software Developer 👨‍💻 Experience in building Web applications with JavaScript / React / PHP / Wordpress and other interesting libraries and frameworks."
  ),
  resumeLink:
    "https://www.linkedin.com/in/luiggi-annes-bellincanta-dev/?locale=en_US", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/luiggidev",
  linkedin: "https://www.linkedin.com/in/luiggi-annes-bellincanta-dev/?locale=en_US",
  gmail: "luiggibellincanta@gmail.com",
  gitlab: "",
  facebook: "",
  instagram: "https://www.instagram.com/luiggiannes/",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/8272670/luiggi-annes",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOFTWARE DEVELOPER OPEN TO EXPLORE NEW STACKS",
  skills: [
    emoji(
      "⚡ Develop interactive Front end / User Interfaces"
    ),
    emoji(
      "⚡ Mainly interested in Javascript frameworks / Libraries"
    ),
    emoji(
      "⚡ Exploring and fixing accessibility issues (WCAG, A11y)"
    ),
    emoji(
      "⚡ Worked with Wordpress theme and plugin development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Accessibility",
      fontAwesomeClassname: "fas fa-universal-access"
    },
    {
      skillName: "Gulp",
      fontAwesomeClassname: "fab fa-gulp"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Ubuntu",
      fontAwesomeClassname: "fab fa-ubuntu"
    },
    {
      skillName: "Terminal",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Univali University",
      logo: require("./assets/images/Logo_Univali.png"),
      subHeader: "Bachelor - Software Analysis and Development",
      duration: "September 2021 - 2024",
      desc: "Operating systems, web applications, multimedia interfaces, databases, system analysis and design paradigms.",
      descBullets: [
        "Using C/C++, C#, SQL to learn and interact with design principles, databases and system analysis",
        "Using HTML, CSS, JavaScript, PHP to program various technological solutions to contribute to the development of organizations."
      ]
    },
    {
      schoolName: "Federal University of Santa Catarina",
      logo: require("./assets/images/vertical_sigla_fundo_claro.png"),
      subHeader: "Bachelor - Economic Science",
      duration: "January 2011 - June 2015",
      desc: "Supported research in financial data analysis while collecting and validating a large number of data sets taken from government and stock market databases.",
      descBullets: ["Conducted research in capital markets, statistics and behaviour economics.", "Used Python, Excel and R to do most of the data processing."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Wordpress Developer",
      company: "Fluidweb",
      companylogo: require("./assets/images/FluidwebLogo.jpg"),
      date: "July 2019 – Present",
      desc: "Developed themes and plugins, converted approved designs to functional, responsive, web applications for the WordPress CMS. Experience in accessibility conversion and plugin support work.",
      descBullets: [
        "Worked with technologies such as Wordpress, Woocommerce, Php, Css, Sass, Gulp, Javascript, ReactJS (Gutemberg Blocks), ACF, Git, Npm, Visual code studio, Click-up and Asana task managers and Linux Os."
      ]
    },
    {
      role: "International Purchase Analyst",
      company: "Eixo Snetor Brasil",
      companylogo: require("./assets/images/eixo_snetor_brasil2.jpg"),
      date: "October 2017 – June 2019",
      desc: "International purchase department for an importing company. Responsible for evaluating a large sample of data to make decisions on purchase, logistics and import procedures necessary to supply the national market of plastic resins.",
      descBullets: [
        "Worked with technologies such as JS, Batch Scripts and Excel."
      ]
    },
    {
      role: "Administrative Assistant at CAMBEL",
      company: "CAMBEL",
      companylogo: require("./assets/images/cambel.png"),
      date: "June 2015 – July 2017",
      desc: "Financial and administrative services in the area of ​​civil construction. Structuring and organizing document files, purchase, issuing invoices, auxiliary inventory control services, carrying out revenue and accounts payable registration activities and analyzing financial reports.",
      descBullets: [
        "Administrative purchase services."
      ]
    },
    {
      role: "Financial Research Intern",
      company: "LABMEC",
      companylogo: require("./assets/images/vertical_sigla_fundo_claro.png"),
      date: "Jan 2013 - Dec 2014",
      desc: "Collection and validation of a large number of data sets taken from government and stock market databases to be used in finance research.",
      descBullets: [
        "Assisted using various statistical tools and proprietary finance software. Worked with Python, R, Gretl, and Excel."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  projects: [
    {
      image: require("./assets/images/portfoliosite.png"),
      projectName: "Personal portfolio site",
      projectDesc: "Site made with ReactJS to display portfolio and work experience",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/luiggidev/LuiggiFolio"
        },
        {
          name: "ReactJS",
        },
        {
          name: "graphql",
        },
        {
          name: "react-twitter-embed",
        },
        {
          name: "react-easy-emoji",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/expensify.png"),
      projectName: "Expensify app",
      projectDesc: "Expenses tracker, User login, Firebase and Redux",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/luiggidev/expensify-app"
        },
        {
          name: "App",
          url: "https://lab-expensify-app.herokuapp.com/"
        },
        {
          name: "ReactJS",
        },
        {
          name: "Redux",
        },
        {
          name: "Firebase",
        },
        {
          name: "Airbnb datepicker",
        },
        {
          name: "Heroku",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/LobsterAnywhere.jpg"),
      projectName: "Lobster Anywhere",
      projectDesc: "Simplified checkout and improved navigation for the online store",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fluidweb.co/portfolio/lobsteranywhere/"
        },
        {
          name: "Custom Shipping step",
        },
        {
          name: "SEO and A11y optimization",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/racineJewels.png"),
      projectName: "Racine Jewels",
      projectDesc: "Refined Webdesign for a Swiss jewellery brand",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fluidweb.co/portfolio/racine-jewels/"
        },
        {
          name: "E Commerce site",
        },
        {
          name: "Custom theme and plugins",
        }
      ]
    },
    {
      image: require("./assets/images/Tattoo-bon.png"),
      projectName: "Tattoo-bon",
      projectDesc: "Conversion optimized website and checkout flow",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fluidweb.co/portfolio/tattoo-bon/"
        },
        {
          name: "WordPress",
        },
        {
          name: "Tattoo vouchers",
        }
      ]
    },
    {
      image: require("./assets/images/rdnarts.png"),
      projectName: "Rdnarts",
      projectDesc: "Ecommerce for curated collection sourced directly from the artists studios",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rdnarts.com/"
        },
        {
          name: "E Commerce site",
        },
        {
          name: "Custom ACF Blocks",
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Smaller projects you have worked on

const smallProjects = {
  title: "Small Projects",
  projects: [
    {
      image: require("./assets/images/prize.png"),
      projectName: "Prize picker",
      projectDesc: "React random prize picker",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/luiggidev/indecision-app-v2"
        }
        ,
        {
          name: "App",
          url: "https://prize-picker.netlify.app/"
        },
        {
          name: "ReactJS",
        },
        {
          name: "react-modal",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mindbell.png"),
      projectName: "React Mindfulness Bell App",
      projectDesc: "Recurrent bell strikes to remain mindful/concentrated on the task at hand.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/luiggidev/mindfulness-bell"
        },
        {
          name: "In progress",
        },
        {
          name: "ReactJS",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/react-calculator2.png"),
      projectName: "React Casio Calculator",
      projectDesc: "React calculator: Add, subtract, multiply, divide, supports decimal values, calculate percentages, invert, reset. ",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/luiggidev/react-calculator"
        },
        {
          name: "App",
          url: "https://casio-calculator.netlify.app/"
        }
        ,
        {
          name: "ReactJS",
        },
        {
          name: "Textfit component",
        },
        {
          name: "react-meta-tags",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/money-3.png"),
      projectName: "JS Exchange rate Calculator",
      projectDesc: "Fetches the latest Exchange rate and calculates the corresponding value",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/luiggidev/Vanilla-JavaScript-projects"
        },
        {
          name: "Vanilla JS",
        },
        {
          name: "Fetch API",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/liftsul.jpg"),
      projectName: "Fork-lift parts supplier Website",
      projectDesc: "A brochure WP website, described all the available part categories and company description",
      footerLink: [
        {
          name: "WordPress",
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/galeriasafull.jpg"),
      projectName: "Art galery Website",
      projectDesc: "A brochure WP website, responsive to all screen sizes",
      footerLink: [
        {
          name: "WordPress",
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Courses and Certifications 📚 "),
  achievementsCards: [
    {
      title: "Product Owner Fundamentals",
      subtitle:
        "In-depth course on PO mindset, skills, responsibilities, and best practices.",
      image: require("./assets/images/PO.png"),
      footerLink: [
        {
          name: "‘Ongoing",
        },
      ]
    },
    {
      title: "Agile Fundamentals: Including Scrum and Kanban - 2021",
      subtitle:
        "Agile principles, values, approaches, & mindset to help organizations make changes faster and with less expense.",
      image: require("./assets/images/agile.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-cc037ca3-fded-4a0b-80de-c1c9fe80dba9/"
        },
      ]
    },
    {
      title: "The Complete React Developer Course (w/ Hooks and Redux)",
      subtitle:
        "React, Redux, React-Router, Webpack, Babel, Testing with Jest, Enzyme App, Debugging App, Deployment, Firebase, Authentication, Git/GitHub, ES6/ES7.",
      image: require("./assets/images/react-course.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-37ce4c34-d753-425c-8195-622b7b71e70f/"
        },
      ]
    },
    {
      title: "Vanilla JS Academy",
      subtitle:
        "Modern JS (ES6+), DOM manipulation and injection, Ajax and Promises, How to work with APIs, async and await, write JavaScript libraries, State-based UI and data reactivity, Web accessibility fundamentals, Array and object destructuring.",
      image: require("./assets/images/VanillaJSAcademy.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://stackoverflow.com/users/story/8272670"
        },
      ]
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      subtitle:
        "Fundamentals of JavaScript, algorithms to manipulate strings, factorialize numbers and Object Oriented Programming (OOP).",
      image: require("./assets/images/JavaScriptAlgorithms.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.freecodecamp.org/certification/luiggiab/javascript-algorithms-and-data-structures"
        }
      ]
    },

    {
      title: "Complete WordPress Theme & Plugin Development Course",
      subtitle: "Build and customize themes and plugins, how WordPress works under the hood, from template files and tags to hooks and internal APIs.",
      image: require("./assets/images/WPdevelopment.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-7a127072-9462-4d7b-b739-9ed6a9e2536e/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blog and Github",
  blogs: [
    {
      url: "https://luiggiannes.me/",
      title: "luiggiannes.me",
      description:
        "The idea behind this blog is registering my programming learning journey and personal projects and experiences."
    },
    {
      url: "https://github.com/luiggidev",
      title: "Github",
      description: "👋 Hi, I’m @luiggidev."
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to say hi?",
  number: "",
  email_address: "luiggibellincanta@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "LuiggiAnnes", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  smallProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
