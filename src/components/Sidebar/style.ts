import styled from 'styled-components';

export const SidebarS = styled.aside`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  background-color:#fff;
  grid-area: aside;

  p {
    margin:0.6rem 2rem;
    font-size: 0.8rem;
  }
  img {
    transition: opacity 1000ms;
    width:4rem;
    margin: 0 auto;
  }
  
`;