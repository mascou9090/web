import Imagem from "../../assets/desenvolvedor.png";
import { HeaderS, Github, Linkedin, Home, Instagram } from './style';


export const Header = () => {
  return (
    <HeaderS>
      <img
        src={Imagem}
        alt="Imagem personalizada com nome do criador do site"
      />
      <nav>
        <ul>
        <li>
            <a>
              <Home style={{ height: "1.6rem" }} />
            </a>
          </li>
          <li>
            <a>
              <Github style={{ height: "1.6rem" }} />
            </a>
          </li>
          
          <li>
            <a>
              <Instagram style={{ height: "1.6rem" }} />
            </a>
          </li>
          <li>
            <a>
              <Linkedin style={{ height: "1.6rem" }} />
            </a>
          </li>
        </ul>
      </nav>
    </HeaderS>
  );
};
export default Header;