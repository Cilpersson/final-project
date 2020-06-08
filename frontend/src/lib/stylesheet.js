import styled from "styled-components/macro";

export const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
`;

export const GridPageTitle = styled.h2`
  margin: 0.8rem 0 0 0;
  color: black;
  text-align: center;
  font-size: 2rem;
`;

export const Greeting = styled.h3`
  padding: 0.8rem 0;
  color: black;
  text-align: center;

  padding: 0.8rem 0;
  color: black;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #084030;
  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: justify;
  line-height: 1.5rem;
`;

export const PasswordInfo = styled.p`
  color: #00000050;
  font-size: 0.7rem;
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 1.5rem;
  margin: 1.5rem;
  position: relative;

  @media (min-width: 668px) {
    width: 70%;
    margin: 1.5rem auto;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 1.5rem auto;
  }
`;

export const RelativeWrapper = styled.div`
  position: relative;
  margin-bottom: -2rem;
`;

export const StyledButton = styled.button`
  background: #84eccf;
  border: 0.2rem solid #1dd19e;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin: 0.2rem 0;
  cursor: pointer;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  padding: 0.8rem 1.6rem;
  margin: 0.4rem auto;
  border-radius: 0.2rem;
  border-color: #1dd19e;
  width: 90%;
  max-width: 20rem;
  background: #ffffff;
`;

export const Legend = styled.legend`
  font-size: 1.2rem;
  padding: 0 0.8rem;
  color: black;

  padding: 0 0.8rem;
  color: black;
  color: black;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  background: #1dd19e30;
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin: 0.2rem 0;
`;

export const Form = styled.form`
  padding: 0.8rem 1.6rem;
  margin: 0.4rem auto;
  border-radius: 0.2rem;
  border-color: #1dd19e;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperGrid = styled.div`
  display: grid;
`;

export const Wrapper = styled.section`
  width: 80%;
  max-width: 20rem;
  margin: auto;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
`;

export const StyledHeader = styled.header`
  background: white;
`;
export const Img = styled.img`
  width: 100%;
  margin: auto;
  max-width: 250px;

  @media (min-width: 1024px) {
    max-width: 350px;
  }
`;

export const LargerGrid = styled(Ul)`
  background: #ffffff99;
  grid-template-columns: repeat( auto-fit, minmax(200px, 1fr) );
  /* grid-template-columns: repeat(3, 1fr); */
  border: 0.1rem solid #1dd19e50;
  border-radius: 0.1rem;
  margin: 2rem;
  background: white;
  padding: 1rem;

  @media (min-width: 668px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-columns: repeat(4, 1fr); */
    padding: 2rem;
    margin: 4rem 8rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat( auto-fit, minmax(350px, 1fr) );
    padding: 2rem;
    margin: 4rem;
    /* &:hover > ${Img} {
      opacity: 0.3;
    }

    &:hover > ${Img}:hover {
      transform: scale(1.3);
      opacity: 1;
    } */
  }
`;

export const GridForm = styled(Form)`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 20rem;
  margin: auto;
`;

export const Submit = styled(StyledButton)`
  width: 100%;
`;
