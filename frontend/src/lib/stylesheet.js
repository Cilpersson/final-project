import styled from "styled-components/macro";

export const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
`;

export const GridPageTitle = styled.h2`
  margin: 0.8rem 0;
  color: black;
  text-align: center;
  font-size: 2rem;
`;

export const Greeting = styled.h3`
  margin: 0.8rem 0;
  color: black;
  text-align: center;
`;

export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #084030;
`;

export const Paragraph = styled.p`
  text-align: justify;
  padding: 0 1.5rem;
  margin: 0 auto;
  line-height: 1.5rem;

  @media (min-width: 668px) {
    padding: 0;
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 0 auto;
  }
`;

export const StyledButton = styled.button`
  background: #1dd19e50;
  border: 0.2rem solid #1dd19e;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin: 0.2rem;
  cursor: pointer;
  width: 100%;
`;

export const Fieldset = styled.fieldset`
  padding: 0.8rem 1.6rem;
  margin: 0.4rem auto;
  border-radius: 0.2rem;
  border-color: #1dd19e;
  width: 80%;
  max-width: 20rem;
`;

export const Legend = styled.legend`
  font-size: 1.2rem;
  padding: 0 0.8rem;
  color: black;
`;

export const Input = styled.input`
  width: 100%;
  background: #1dd19e30;
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin: 0.2rem;
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
`;
