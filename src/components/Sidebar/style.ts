import styled from "styled-components";

export const SidebarS = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  width: 30vw;
  height: 70vh;
  
  p {
    position:absolute;
    margin: 2rem ;
    opacity: 0;
    & {
      transition: opacity 1s ease-in-out;
    }
  }
  img {
    width: 2.3rem;
    & {
      transition: all 0.5s;
      cursor: pointer;
    }
    &:hover {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
  }
  ul {
    position:relative;
    margin-top: 6rem;
    margin-left: 1.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  li {
    padding: 0.3rem;
  }
`;
