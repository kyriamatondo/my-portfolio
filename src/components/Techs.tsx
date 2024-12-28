import Title from "./Title";
import imgHTML from "../assets/assets/techno/html.png";
import imgCSS from "../assets/assets/techno/css.png";
import imgJS from "../assets/assets/techno/js.png";
import imgREACT from "../assets/assets/techno/react.png";
import imgNODE from "../assets/assets/techno/node-js.png";
import imgTAILWIND from "../assets/assets/techno/tailwind.png";
import imgBOOTSTRAP from "../assets/assets/techno/bootstrap.webp";
import imgTYPE from "../assets/assets/techno/typescript.svg";
import imgSPRING from "../assets/assets/techno/spring.webp";

const Techs = () => {
  const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "Bootstrap", image: imgBOOTSTRAP },
    { id: 8, name: "TypeScript", image: imgTYPE },
    { id: 9, name: "Springboot", image: imgSPRING },
  ];

  return (
    <div id="Techno">
      <Title title="Technologies" />
      <div>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="flex justify-center items-center flex-col"
            >
              <div className="w-24 h-24 p-2 rounded-full border-2 border-secondary">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <span className="mt-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Techs;
