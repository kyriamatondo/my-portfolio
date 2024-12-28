import { Laptop } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-xl">
        <Laptop className="mr-2" />
        KY<span className="text-secondary">DEV</span>
      </a>

      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost">
            Accueil
          </a>
        </li>
        <li>
          <a href="#About" className="btn btn-sm btn-ghost">
            A propos
          </a>
        </li>
        <li>
          <a href="#Techno" className="btn btn-sm btn-ghost">
            Technologies
          </a>
        </li>
        <li>
          <a href="#Projects" className="btn btn-sm btn-ghost">
            Mes projets
          </a>
        </li>
        <li>
          <a href="#" className="btn btn-sm btn-ghost">
            Télécharger mon CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
