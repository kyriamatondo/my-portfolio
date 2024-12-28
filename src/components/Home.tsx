import { Mail } from "lucide-react";
import img from "../assets/assets/profil.jpg";

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:my-32 my-10" id="Home">
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, <br />
          je suis <span className="text-secondary">Kyria MATONDO</span>
        </h1>
        <p className="my-4 text-md text-center md:text-left">
          Développeur web fullstack passionné, <br />
          je crée des solutions numériques performantes <br /> et adaptées aux
          besoins spécifiques pour chaque projet.
        </p>

        <a
          href="mailto:krmatondo@gmail.com"
          className="btn btn-secondary md:w-fit"
        >
          <Mail className="w-5 h-5" />
          Ecrivez-moi
        </a>
      </div>

      <div className="md:ml-60 flex justify-center">
        <img
          src={img}
          alt="Image de profil"
          className="w-96 h-96 border-8 border-secondary shadow-xl rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
