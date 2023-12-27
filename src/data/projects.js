// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "omega-messenger",
    category: "Web Application",
    categoryShow: "web-application",
    img: require("@/assets/images/web-project-3.jpg"),
    path: "omegaMessenger",
  },
  {
    id: 2,
    title: "scrum-pocker",
    category: "Web Application",
    categoryShow: "web-application",
    img: require("@/assets/images/web-project-6.jpg"),
    path: "scrumPocker",
  },
  {
    id: 3,
    title: "todo-list",
    category: "Web Application",
    categoryShow: "web-application",
    img: require("@/assets/images/web-project-9.jpg"),
    path: "toDo-List",
  },
];
export default projects;
