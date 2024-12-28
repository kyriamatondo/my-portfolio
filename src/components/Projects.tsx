import Title from "./Title";

import img1 from "../assets/assets/projects/dep.jpg";
import img2 from "../assets/assets/projects/portfolio.png";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Plateforme de géolocalisation des services de depannage automobile",
    description:
      "Une application web permettant aux utilisateurs de trouver rapidement des services de dépannage automobile proches grâce à la géolocalisation.",
    technologies: ["React", "Springboot", "Bootstrap"],
    repoLink: "#",
    image: img1,
  },
  {
    id: 2,
    title: "Mon portfolio",
    description:
      "Un site web mettant en avant mes compétences, projets et services, avec un design moderne et intuitif.",
    technologies: ["ReactJs"],
    repoLink: "#",
    image: img2,
  },
];

const Projects = () => {
  return (
    <div className="mt-10" id="Projects">
      <Title title="Mes Projets" />
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-300 p-5 h-fit rounded-xl shadow-lg "
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-xl h-56 object-cover"
            />
            <div>
              <h1 className="my-2 font-bold">{project.title}</h1>
              <p className="text-sm">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech) => (
                <span className="badge badge-secondary badge-sm">{tech}</span>
              ))}
            </div>
            <div className="flex">
              <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                Visit repo <Github className="w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
