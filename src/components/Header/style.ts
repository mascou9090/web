import styled from 'styled-components';
import { AiFillGithub, AiFillHome, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export const HeaderS = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  grid-area: 'header';

  img {
    margin-left: 1.5rem;
    width: 10rem;
    height: 100%;
  }
  nav {
    margin: 0;
    padding: 0;
    margin-right: 1rem;
  }
  ul {
    display: flex;
    margin-right: 1rem;
    margin-top:0;
    padding-bottom:3rem;
  }
  li {
    list-style: none;
    width: 3.5rem;
  }
  a {
    cursor: pointer;
  }
  
`;
export const Github = styled(AiFillGithub)`
  &{
    transition: all 0.5s;
    cursor: pointer;
  }
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;
export const Home = styled(AiFillHome)`
  &{
    transition: all 0.5s;
    cursor: pointer;
  }
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;
export const Instagram = styled(AiFillInstagram)`
  &{
    transition: all 0.5s;
    cursor: pointer;
  }
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;
export const Linkedin = styled(AiFillLinkedin)`
  &{
    transition: all 0.5s;
    cursor: pointer;
  }
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
`;

