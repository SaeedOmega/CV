// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "Omega Messenger",
    category: "Web Application",
    img: require("@/assets/images/web-project-3.jpg"),
    path: "omegaMessenger",
  },
  {
    id: 2,
    title: "Scrum Pocker",
    category: "Web Application",
    img: require("@/assets/images/web-project-6.jpg"),
    path: "scrumPocker",
  },
];

export default projects;