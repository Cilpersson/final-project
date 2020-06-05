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

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperGrid = styled.div`
  display: grid;
`;
