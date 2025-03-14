import { createContext, useState, useEffect } from "react";

export const PortfolioContext = createContext();

export default function PortfolioProvider({ children }) {
  const [techSkills, setTechSkills] = useState([
    { src: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg" },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    { src: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
    },
    { src: "https://pngimg.com/d/github_PNG40.png" },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
    },
  ]);
  const [projects, setProjects] = useState([
    {
      title: "Radio-player",
      desc: "A live radio player for all swedish radio channels.",
      imgLink:
        "https://cdn.shopify.com/app-store/listing_images/a945bf3256cae35ab1d34f921b3fc3b0/icon/CKvOqav0lu8CEAE=.jpg",
      urlGit: "https://github.com/FabricioAcuna/Radio-Player",
      url: "https://radio-player-bice.vercel.app/",
    },
    {
      title: "Quiz-Game",
      desc: "A fun quiz that can be updated by admin to update,add and delete questions.",
      imgLink:
        "https://cdn.prod.website-files.com/6073f7c353a8cacf0ffaa7a4/63c6858ea03468858e28eba4_Quiz%20huvudbild.jpg",
      urlGit: "https://github.com/FabricioAcuna/quiz-group-task",
      url: "https://quiz-group-task.vercel.app/",
    },
    {
      title: "News-site",
      desc: "A news site with live updated news from around the world, with the option to bookmark.",
      imgLink:
        "https://www.interhacktives.com/wp-content/uploads/2019/03/43017.png",
      urlGit: "https://github.com/FabricioAcuna/nyhetssida-group-task",
      url: "https://nyhetssida-group-task.vercel.app/",
    },
  ]);

  // useEffect(() => {
  //   const savedTechSkills = JSON.parse(localStorage.getItem("techSkills"));
  //   const savedProjects = JSON.parse(localStorage.getItem("projects"));

  //   if (savedTechSkills) {
  //     setTechSkills(savedTechSkills);
  //   }
  //   if (savedProjects) {
  //     setProjects(savedProjects);
  //   }
  // }, []);

  // useEffect(() => {
  //   const skills = JSON.parse(localStorage.getItem("techSkills"));
  //   if (skills) setTechSkills(skills);

  //   const proj = JSON.parse(localStorage.getItem("projects"));

  //   if (proj) setProjects(proj);
  // }, []);

  // useEffect(() => {
  //   if (techSkills.length > 0)
  //     localStorage.setItem("techSkills", JSON.stringify(techSkills));

  //   if (projects.length > 0)
  //     localStorage.setItem("projects", JSON.stringify(projects));
  // }, [techSkills, projects]);

  return (
    <PortfolioContext.Provider
      value={{ techSkills, setTechSkills, projects, setProjects }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

// första försök
// import { createContext, useState, useEffect } from "react";

// export const PortfolioContext = createContext();

// export default function PortfolioProvider({ children }) {
//   const [techSkills, setTechSkills] = useState([
//     {
//       src: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
//     },
//     {
//       src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s",
//     },
//     {
//       src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
//     },
//     { src: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" },
//     {
//       src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png",
//     },
//     { src: "https://pngimg.com/d/github_PNG40.png" },
//     {
//       src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png",
//     },
//   ]);

//   const [projects, setProjects] = useState([
//     {
//       title: "Title 1",
//       desc: "Description of project 1",
//       imgLink:
//         "https://img.freepik.com/free-vector/geometric-blue-background-desktop-wallpaper-vector_53876-135927.jpg?ga=GA1.1.1667245943.1733688417&semt=ais_hybrid",
//       url: "https://www.google.com",
//     },
//     {
//       title: "Title 2",
//       desc: "Description of project 2",
//       imgLink:
//         "https://img.freepik.com/free-vector/geometric-blue-background-desktop-wallpaper-vector_53876-135927.jpg?ga=GA1.1.1667245943.1733688417&semt=ais_hybrid",
//       url: "https://www.example.com",
//     },
//     {
//       title: "Title 3",
//       desc: "Description of project 3",
//       imgLink:
//         "https://img.freepik.com/free-vector/geometric-blue-background-desktop-wallpaper-vector_53876-135927.jpg?ga=GA1.1.1667245943.1733688417&semt=ais_hybrid",
//       url: "https://www.example.com",
//     },
//     {
//       title: "Title 4",
//       desc: "Description of project 4",
//       imgLink:
//         "https://img.freepik.com/free-vector/geometric-blue-background-desktop-wallpaper-vector_53876-135927.jpg?ga=GA1.1.1667245943.1733688417&semt=ais_hybrid",
//       url: "https://www.example.com",
//     },
//     {
//       title: "Title 5",
//       desc: "Description of project 5",
//       imgLink:
//         "https://img.freepik.com/free-vector/geometric-blue-background-desktop-wallpaper-vector_53876-135927.jpg?ga=GA1.1.1667245943.1733688417&semt=ais_hybrid",
//       url: "https://www.example.com",
//     },
//     {
//       title: "Title 6",
//       desc: "Description of project 6",
//       imgLink:
//         "https://img.freepik.com/free-vector/geometric-blue-background-desktop-wallpaper-vector_53876-135927.jpg?ga=GA1.1.1667245943.1733688417&semt=ais_hybrid",
//       url: "https://www.example.com",
//     },
//   ]);

//   return (
//     <PortfolioContext.Provider
//       value={{ techSkills, setTechSkills, projects, setProjects }}
//     >
//       {children}
//     </PortfolioContext.Provider>
//   );
// }
