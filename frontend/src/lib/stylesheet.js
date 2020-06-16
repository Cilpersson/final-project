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

export const SectionWrapperLottie = styled(SectionWrapper)`
  height: fit-content;
`;

export const RelativeWrapper = styled.div`
  position: relative;
  margin-bottom: -2rem;
`;
export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #084030;
  text-align: center;
`;
export const StyledButton = styled.button`
  background: #84eccf;
  border: 0.2rem solid #1dd19e;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin: 0.2rem 0;
  cursor: pointer;
  width: 100%;
  max-width: 15rem;
  min-width: 10rem;
  transition: all 0.2s;

  &:hover {
    background: #1dd19e;
    border: 0.2rem solid #84eccf;
  }

  &:hover ${ButtonText} {
    color: #ddf7ec;
  }
`;

export const Fieldset = styled.fieldset`
  padding: 1rem;
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
  width: 100%;
  max-width: 15rem;
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
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;

  @media (min-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledHeader = styled.header`
  background: white;
`;

export const HeaderSectionWrapper = styled.section`
  background: #fff;
  width: 100%;
  padding: 1rem 0.1rem;

  border-top: 0.2rem solid #1dd19e;

  @media (min-width: 668px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border: 0.1rem solid #1dd19e50;
  border-radius: 0.1rem;
  margin: 2rem;
  background: white;
  padding: 1rem;

  @media (min-width: 668px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding: 2rem;
    margin: 4rem 8rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    padding: 2rem;
    margin: 4rem;
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

export const StyledATag = styled.a`
  background: #84eccf;
  border: 0.2rem solid #1dd19e;
  border-radius: 0.2rem;
  padding: 0.4rem;
  margin: 0.2rem 0.1rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// STYLING FOR GRID

export const PhotoGrid = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(5px, 1fr));
  grid-auto-rows: 5px;
  width: 90%;
  background: white;
  padding: 1.5rem;
  margin: 1.5rem auto;
  grid-auto-flow: dense;

  @media (min-width: 668px) {
    grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
    grid-auto-rows: 20px;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
    /* width: 50%; */
  }
`;
export const Card = styled.div`
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 100%;
  width: 100%;
  border-radius: 0.2rem;

  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  grid-row: span 4 / auto;
  grid-column: span 4 / auto;

  cursor: pointer;

  @media (min-width: 668px) {
  }
`;

export const CardTall = styled(Card)`
  grid-row: span 6 / auto;
  grid-column: span 4 / auto;

  @media (min-width: 668px) {
    grid-row: span 8 / auto;
    grid-column: span 6 / auto;
  }
`;

export const CardTinyTall = styled(Card)`
  grid-row: span 5 / auto;
  grid-column: span 3 / auto;

  @media (min-width: 668px) {
    grid-row: span 4 / auto;
    grid-column: span 3 / auto;
  }
`;

export const CardWide = styled(Card)`
  grid-column: span 5 / auto;
  grid-row: span 3 / auto;

  @media (min-width: 668px) {
    grid-column: span 7 / auto;
    grid-row: span 5 / auto;
  }
`;

export const CardTinyWide = styled(Card)`
  grid-column: span 4 / auto;
  grid-row: span 3 / auto;

  @media (min-width: 668px) {
    grid-column: span 4 / auto;
    grid-row: span 3 / auto;
  }
`;

// NAV

export const Nav = styled.nav`
  background: #84eccf;

  border-bottom: 0.2rem solid #1dd19e;
  border-top: 0.2rem solid #1dd19e;
  padding: 0.5rem 0.3rem;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 35rem;
  margin: auto;
`;

export const ListFooter = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ListItem = styled.li`
  display: inline;
  text-decoration: none;
`;

// LINKS/ICONS

export const StyledLinks = styled.a`
  font-size: 2rem;
  color: #1dd19e;

  font-size: 1rem;
  border-radius: 0.2rem;
  display: block;
  margin: 0 0.4rem;

  transition: 0.3s;

  &:hover {
    color: #148867;
    transform: scale(1.2);
  }
`;
