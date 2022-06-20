import styled from "styled-components";
const ImagemS = styled.img`
  width: 4rem;
`;
interface ImagenProps {
  perfil: string | any;
}

const IMAGEM: React.FC<ImagenProps> = ({perfil}) => {
  return (
    <>
      <ImagemS>
        <img src={perfil} alt="Imagem de perfil" />
      </ImagemS>
    </>
  );
};

export default IMAGEM;
