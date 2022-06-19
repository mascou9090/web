import { useState, useEffect } from 'react';
import { SidebarS } from "./style";
import CSS from "../../assets/CSSpng.png";
import js from "../../assets/js.png";
import html from "../../assets/html.png";
import react from "../../assets/react.png";
import styled from "../../assets/styled.png";

export const Sidebar = () => {
  const imagens = [CSS, html, js, react, styled];
  const [tec, setTec] = useState('');
  useEffect(() => {
    let index: number = 0;
    setTec(imagens[index])
    setInterval(() => {
      setTec(imagens[index]);
      index = index + 1;
      if(index === imagens.length) index = 0;
      console.log(index);
    }, 2000);
  },[])
  return (
    <>
      <SidebarS>
        <header>
          <h3>PROGRAMADOR WEB</h3>
        </header>
        <div>
          <p style={{fontSize: '0.9em', fontWeight: 'bold'}}>MARCONDES F PINHEIRO</p>
        </div>
        <div>
          <p>Formado em Analise e desenvolvimento de sistemas</p>
          <p>Experiência em Infraestrutura de redes e em Front End</p>
          <p>Tecnologias</p>
          <img src={tec} alt="Imagens de Tecs"/>
        </div>
      </SidebarS>
    </>
  );
};
export default Sidebar;
