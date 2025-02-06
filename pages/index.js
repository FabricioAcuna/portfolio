import CardComponent from "@/components/CardComponent";
import { PortfolioContext } from "@/contexts/PortfolioContext";
import { useContext } from "react";

export default function Home() {
  const { techSkills, projects } = useContext(PortfolioContext);
  return (
    <main className="px-20 justify-center flex flex-col ">
      <div className="flex justify-center mt-14 mx-20">
        <div className=" flex gap-20 items-center">
          <h1 className="text-5xl text-cyan-950">
            Hi!, <br />
            My name is <br />
            Fabricio <br />I build things for web.
          </h1>
          <img className=" flex p-20 border border-solid border-black rounded-full"></img>
        </div>
      </div>
      <h1 className="self-center text-5xl m-14 pt-20 text-cyan-950">
        My Tech Stack
      </h1>
      <p className="self-center text-2xl mb-10 opacity-60">
        Technologies i've been working with recently
      </p>
      <div className=" self-center flex gap-10 pt-10">
        {techSkills.map((techSkill) => {
          return <img className=" max-h-16" src={techSkill.src} />;
        })}
      </div>

      <h1 className="self-center text-5xl m-14 pt-10 text-cyan-950">
        Projects
      </h1>
      <p className="self-center text-2xl mb-10 opacity-60">
        Things i've built so far
      </p>
      <div className="grid grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <CardComponent
            key={index}
            title={project.title}
            desc={project.desc}
            imgLink={project.imgLink}
            url={project.url}
          />
        ))}
      </div>
    </main>
  );
}
