import styled from 'styled-components';

export const LayoutS = styled.div`
  display: grid;
  grid-template-columns:auto 1fr;
  grid-template-rows: 1fr 65vh 10vh;
  grid-template-areas: 
                      'header header'
                      'aside main '
                      'footer footer';
`;

export default LayoutS;