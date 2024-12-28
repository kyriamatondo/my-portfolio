import Title from "./Title";
import img from "../assets/assets/profil.jpg";
import { Code, Database, Trello } from "lucide-react";

const About = () => {
  const aboutSections = [
    {
      id: 1,
      title: "Développeur Frontend",
      description:
        "Je crée des interfaces modernes et intuitives, offrant une expérience utilisateur fluide et engageante.",
      icon: <Code className="text-secondary scale-150" />,
    },
    {
      id: 2,
      title: "Développeur Backend",
      description:
        "Je conçois des solutions robustes et performantes pour gérer serveurs et bases de données.",
      icon: <Database className="text-secondary scale-150" />,
    },
    {
      id: 3,
      title: "Passionné par l'UI/UX",
      description:
        "Je crée des interfaces intuitives et des expériences utilisateur optimisées pour une interaction fluide et agréable.",
      icon: <Trello className="text-secondary scale-150" />,
    },
  ];

  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title="A propos" />
      <div className="md:h-screen flex justify-center items-center">
        <div className="hidden md:block">
          <img src={img} alt="" className="w-96 object-cover rounded-xl" />
        </div>
        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col md:flex-row items-center bg-base-100 p-5 rounded-xl md:w-96 shadow-xl"
            >
              <div className="mb-2 md:mb-0">{section.icon}</div>
              <div className="md:ml-4 text-center md:text-left">
                <h1 className="text-xl font-bold mb-1">{section.title}</h1>
                <p className="text-sm">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
