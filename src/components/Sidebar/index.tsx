import { SidebarS } from "./style";
import { useState, useEffect } from "react";
import CSS from "../../assets/CSSpng.png";
import js from "../../assets/js.png";
import html from "../../assets/html.png";
import typescript from "../../assets/TS.png";
import react from "../../assets/react.png";
import styled from "../../assets/styled.png";
import IMAGEM from '../IMAGEM';
import perfil from '../../assets/Marcou.jpg';
export const Sidebar = () => {
  const imagens = [CSS, html, js, react, typescript, styled];
  const about = [
    'Formado em Analise e Desenvolvimento de Sistemas',
    'Experiência em Infraestrutura de Redes',
    'Familiarizado com o uso de Linux e Windows',
    'Experiência em Desenvolvimento WEB',
    'Noções de uso com Linux e Windows',
    'Breve conhecimentos em Docker e AWS',
    'Tenho inglês intermediario(Falo e ouço com um pouco de dificuldade)',
  ]
  const [from, setForm] = useState("");
  useEffect(() => {
    let index = 0;
    setForm(about[index]);
    setInterval(() => {
      setForm(about[index]);
      index = index + 1;
      if (index === about.length) index = 0;
      clearInterval();
    }, 4000);
  }, []);
  return (
    <>
      <SidebarS>
        <header>
          <IMAGEM perfil={String(perfil)}/>
          <h3>PROGRAMADOR WEB</h3>
        </header>
        <div>
          <h4 style={{ fontSize: "0.9em", fontWeight: "bold" }}>
            MARCONDES F PINHEIRO
          </h4>
        </div>
        <div>
          <p>{from}</p> <br/>
          <div>
            <ul>
              {imagens.map((i,index) => (
                <li key={index}>
                  <img style={{opacity:1}} src={i} alt="Imagens" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SidebarS>
    </>
  );
};
export default Sidebar;
