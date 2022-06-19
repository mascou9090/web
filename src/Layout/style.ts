import styled from 'styled-components';

export const LayoutS = styled.div`
  display: grid;
  grid-template-areas: 
                      'header header'
                      'aside main'
                      'aside footer';
`;

export default LayoutS;