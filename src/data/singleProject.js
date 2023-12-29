export function getProject(param) {
  let projects = [
    {
      singleProjectHeader: {
        singleProjectTitle: "omega-messenger",
        singleProjectDate: "omegamessenger-date",
        singleProjectTag: "vue-frontend",
      },
      projectImages: [
        {
          id: 3,
          title: "Omega Messenger",
          img: require("@/assets/images/web-project-5.jpg"),
        },
        {
          id: 1,
          title: "Omega Messenger",
          img: require("@/assets/images/web-project-3.jpg"),
        },
        {
          id: 2,
          title: "Omega Messenger",
          img: require("@/assets/images/web-project-4.jpg"),
        },
      ],
      projectInfo: {
        companyInfos: [
          {
            id: 1,
            title: "name-single-project",
            details: "omega-messenger",
          },
          {
            id: 2,
            title: "category",
            details: "web-application-select",
          },
          {
            id: 3,
            title: "website",
            details: "wwww.omegamessenger.iran.liara.run",
          },
          {
            id: 4,
            title: "programmer",
            details: "name",
          },
        ],
        objectivesDetails: "objective-description-omegamessenger",
        technologies: [
          {
            techs: [
              "HTML",
              "CSS",
              "JavaScript",
              "Vue.js",
              "TailwindCSS",
              "Pinia",
            ],
          },
        ],
        projectDetails: [
          {
            id: 1,
            details: "omegamessenger-challenge-line-1",
          },
          {
            id: 2,
            details: "omegamessenger-challenge-line-2",
          },
          {
            id: 3,
            details: "omegamessenger-challenge-line-3",
          },
          {
            id: 4,
            details: "omegamessenger-challenge-line-4",
          },
        ],
        socialSharingsHeading: "Share This",
        socialSharings: [
          {
            id: 1,
            name: "Website",
            icon: "globe",
            url: "https://omegamessenger.iran.liara.run",
          },
          {
            id: 2,
            name: "GitHub",
            icon: "github",
            url: "https://github.com/SaeedOmega/OmgeaMessenger-Vue.js",
          },
        ],
      },
    },
    {
      singleProjectHeader: {
        singleProjectTitle: "scrum-pocker",
        singleProjectDate: "scrumpocker-date",
        singleProjectTag: "vue-frontend",
      },
      projectImages: [
        {
          id: 3,
          title: "Home",
          img: require("@/assets/images/web-project-6.jpg"),
        },
        {
          id: 1,
          title: "Login",
          img: require("@/assets/images/web-project-7.jpg"),
        },
        {
          id: 2,
          title: "Result",
          img: require("@/assets/images/web-project-8.jpg"),
        },
      ],
      projectInfo: {
        companyInfos: [
          {
            id: 1,
            title: "name-single-project",
            details: "todo-list",
          },
          {
            id: 2,
            title: "category",
            details: "web-application-select",
          },
          {
            id: 3,
            title: "website",
            details: "www.scrumPocker.ir",
          },
          {
            id: 4,
            title: "programmer",
            details: "name",
          },
        ],
        objectivesDetails: "objective-description-scrumpocker",
        technologies: [
          {
            techs: [
              "HTML",
              "CSS",
              "JavaScript",
              "Vue.js",
              "WindiCSS",
              "Telefunc",
              "NodeJs",
            ],
          },
        ],
        projectDetails: [
          {
            id: 1,
            details: "scrumpocker-challenge-line-1",
          },
          {
            id: 2,
            details: "scrumpocker-challenge-line-2",
          },
          {
            id: 3,
            details: "scrumpocker-challenge-line-3",
          },
          {
            id: 4,
            details: "scrumpocker-challenge-line-4",
          },
        ],
        socialSharings: [
          {
            id: 1,
            name: "Website",
            icon: "globe",
            url: "https://github.com/SaeedOmega/scrumPocker",
          },
          {
            id: 2,
            name: "GitHub",
            icon: "github",
            url: "https://github.com/SaeedOmega/scrumPocker",
          },
        ],
      },
    },
    {
      singleProjectHeader: {
        singleProjectTitle: "todo-list",
        singleProjectDate: "todolist-date",
        singleProjectTag: "react-frontend",
      },
      projectImages: [
        {
          id: 3,
          title: "toDo-List",
          img: require("@/assets/images/web-project-9.jpg"),
        },
        {
          id: 1,
          title: "toDo-List",
          img: require("@/assets/images/web-project-10.jpg"),
        },
        {
          id: 2,
          title: "toDo-List",
          img: require("@/assets/images/web-project-11.jpg"),
        },
      ],
      projectInfo: {
        companyInfos: [
          {
            id: 1,
            title: "name-single-project",
            details: "todo-list",
          },
          {
            id: 2,
            title: "category",
            details: "web-application-select",
          },
          {
            id: 3,
            title: "website",
            details: "www.Saeed-ToDo-List.liara.run",
          },
          {
            id: 4,
            title: "programmer",
            details: "name",
          },
        ],
        objectivesDetails: "objective-description-todolist",
        technologies: [
          {
            techs: [
              "HTML",
              "CSS",
              "JavaScript",
              "TailwindCss",
              "ReactJs",
              "Zustand",
            ],
          },
        ],
        projectDetails: [
          {
            id: 1,
            details: "todolist-challenge-line-1",
          },
          {
            id: 2,
            details: "todolist-challenge-line-2",
          },
          {
            id: 3,
            details: "todolist-challenge-line-3",
          },
        ],
        socialSharings: [
          {
            id: 1,
            name: "Website",
            icon: "globe",
            url: "https://saeed-todo-list.liara.run/",
          },
          {
            id: 2,
            name: "GitHub",
            icon: "github",
            url: "https://github.com/SaeedOmega/ToDo-List",
          },
        ],
      },
    },
  ];
  if (param === "omegaMessenger") return projects[0];
  else if (param === "scrumPocker") return projects[1];
  else if (param === "toDo-List") return projects[2];
  return;
}
