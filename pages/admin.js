import { PortfolioContext } from "@/contexts/PortfolioContext";
import { useContext, useState } from "react";

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { projects, setProjects, techSkills, setTechSkills } =
    useContext(PortfolioContext);

  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectUrlSite, setProjectUrlSite] = useState("");

  const [techSkillImage, setTechSkillImage] = useState("");

  function handleLogin() {
    if (username === "admin" && password === "123") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  }

  function handleCreateProject() {
    if (
      projectName &&
      projectDescription &&
      projectImage &&
      projectUrl &&
      projectUrlSite
    ) {
      const newProject = {
        title: projectName,
        desc: projectDescription,
        imgLink: projectImage,
        url: projectUrl,
        url: projectUrlSite,
      };

      setProjects([...projects, newProject]);
      setProjectName("");
      setProjectDescription("");
      setProjectImage("");
      setProjectUrl("");
      setProjectUrlSite("");
    }
  }

  function handleCreateTechSkill() {
    if (techSkillImage) {
      const newTechSkill = {
        src: techSkillImage,
      };

      setTechSkills([...techSkills, newTechSkill]);
      setTechSkillImage("");
    }
  }

  function updateDesciption(text, index) {
    const updatedProjects = projects.map((project, i) => {
      if (i === index) {
        return {
          ...project,
          desc: text,
        };
      }
      return project;
    });
    setProjects(updatedProjects);
  }

  function handleDeleteProject(index) {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  }
  function handleDeleteSkill(index) {
    const updatedSkills = techSkills.filter((_, i) => i !== index);
    setTechSkills(updatedSkills);
  }

  if (!loggedIn) {
    return (
      <div>
        <input
          className="border border-solid border-black"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border border-solid border-black"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Logga in</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <h2>Projekt</h2>
      <div className="grid grid-cols-2 w-80 gap-2 mb-2">
        <label>Namn</label>
        <input
          className="border border-solid border-black"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <label>Beskrivning</label>
        <textarea
          className="border border-solid border-black"
          type="text"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <label>Bild</label>
        <input
          className="border border-solid border-black"
          value={projectImage}
          onChange={(e) => setProjectImage(e.target.value)}
        />
        <label>URL Github</label>
        <input
          className="border border-solid border-black"
          value={projectUrl}
          onChange={(e) => setProjectUrl(e.target.value)}
        />
        <label>URL Site</label>
        <input
          className="border border-solid border-black"
          value={projectUrlSite}
          onChange={(e) => setProjectUrlSite(e.target.value)}
        />
      </div>
      <button
        className="border border-solid border-black"
        onClick={handleCreateProject}
      >
        Skapa projekt
      </button>
      <h2>Tech Skills</h2>
      <div className="grid grid-cols-2 w-80 gap-2 mb-2">
        <label>Image URL</label>
        <input
          className="border border-solid border-black"
          value={techSkillImage}
          onChange={(e) => setTechSkillImage(e.target.value)}
        />
      </div>
      <button
        className="border border-solid border-black"
        onClick={handleCreateTechSkill}
      >
        Add Tech Skill
      </button>

      {techSkills.map((techSkill, index) => (
        <div className="flex flex-col items-center" key={techSkill.src}>
          <img src={techSkill.src} alt={`Tech skill ${index}`} />
          <button
            className="mt-2 border border-solid border-black"
            onClick={() => handleDeleteSkill(index)}
          >
            Delete
          </button>
        </div>
      ))}
      {projects.map((project, index) => (
        <div className="flex flex-col items-center" key={project.name}>
          <h3>{project.title}</h3>
          <p>
            <input
              className="border border-solid border-black"
              type="text"
              value={project.desc}
              onChange={(e) => updateDesciption(e.target.value, index)}
            />
          </p>
          <img src={project.imgLink} alt={project.title} />
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Länk
          </a>
          <button
            className="mt-2 border border-solid border-black"
            onClick={() => handleDeleteProject(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
