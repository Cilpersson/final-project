import styled from "styled-components/macro";

export const Title = styled.h1`
  font-size: 2.8rem;
  margin: 0;
`;

export const Greeting = styled.h3`
  margin: 0.8rem 0;
  color: black;
  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: justify;
  padding: 0 1.5rem;
  margin: 0.5rem auto;
  line-height: 1.5rem;

  @media (min-width: 668px) {
    padding: 0 5rem;
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
  cursor: pointer;
  margin: 0.4rem 0;
`;

export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #084030;
`;

export const Input = styled.input`
  width: 100%;
  background: #1dd19e30;
  border: none;
  border-radius: 0.2rem;
  padding: 0.4rem;
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
