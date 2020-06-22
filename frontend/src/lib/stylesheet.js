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

export const StyledGreeting = styled(Greeting)`
  padding: 1.4rem 0 0.8rem;
`;

export const Paragraph = styled.p`
  text-align: justify;
  line-height: 1.5rem;
`;

export const PasswordInfo = styled.p`
  color: #00000050;
  font-size: 0.7rem;
`;

export const ErrorInfo = styled(PasswordInfo)`
  font-size: 0.7rem;
  color: #de3254;
  max-width: 15rem;
  margin: auto;
  font-weight: 500;
`;

// WRAPPERS

export const SiteWrapper = styled.section`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const PageWrapper = styled.section`
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  flex: 1;

  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='88' height='44' viewBox='0 0 88 44'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='0.17' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='2' height='2' patternUnits='userSpaceOnUse'%3E%3Cg stroke='%23ffffff' stroke-width='0.17'%3E%3Crect fill='%23fafafa' width='1' height='1'/%3E%3Crect fill='%23ffffff' width='1' height='1' x='1' y='1'/%3E%3Crect fill='%23f5f5f5' width='1' height='1' y='1'/%3E%3Crect fill='%23f0f0f0' width='1' height='1' x='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='b' width='5' height='11' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23ebebeb'%3E%3Cuse xlink:href='%23s' x='2' y='0'/%3E%3Cuse xlink:href='%23s' x='4' y='1'/%3E%3Cuse xlink:href='%23s' x='1' y='2'/%3E%3Cuse xlink:href='%23s' x='2' y='4'/%3E%3Cuse xlink:href='%23s' x='4' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='8'/%3E%3Cuse xlink:href='%23s' x='3' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='7' height='7' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='3' y='4'/%3E%3Cuse xlink:href='%23s' x='5' y='6'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='11' height='5' patternUnits='userSpaceOnUse'%3E%3Cg fill='%23ffffff'%3E%3Cuse xlink:href='%23s' x='1' y='1'/%3E%3Cuse xlink:href='%23s' x='6' y='3'/%3E%3Cuse xlink:href='%23s' x='8' y='2'/%3E%3Cuse xlink:href='%23s' x='3' y='0'/%3E%3Cuse xlink:href='%23s' x='0' y='3'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse xlink:href='%23s' x='8' y='3'/%3E%3Cuse xlink:href='%23s' x='4' y='2'/%3E%3Cuse xlink:href='%23s' x='5' y='4'/%3E%3Cuse xlink:href='%23s' x='10' y='0'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='23' patternUnits='userSpaceOnUse'%3E%3Cg fill='%231ed6a2'%3E%3Cuse xlink:href='%23s' x='2' y='5'/%3E%3Cuse xlink:href='%23s' x='23' y='13'/%3E%3Cuse xlink:href='%23s' x='4' y='18'/%3E%3Cuse xlink:href='%23s' x='35' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='61' height='31' patternUnits='userSpaceOnUse'%3E%3Cg fill='%231ed6a2'%3E%3Cuse xlink:href='%23s' x='16' y='0'/%3E%3Cuse xlink:href='%23s' x='13' y='22'/%3E%3Cuse xlink:href='%23s' x='44' y='15'/%3E%3Cuse xlink:href='%23s' x='12' y='11'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='88' height='44'/%3E%3Crect fill='url(%23b)' width='88' height='44'/%3E%3Crect fill='url(%23c)' width='88' height='44'/%3E%3Crect fill='url(%23d)' width='88' height='44'/%3E%3Crect fill='url(%23e)' width='88' height='44'/%3E%3Crect fill='url(%23f)' width='88' height='44'/%3E%3C/svg%3E")
    no-repeat center center fixed;
  background-size: 100%;
  background-size: cover;
  padding-bottom: 1.3rem;

  @media (max-width: 668px) {
    background-color: #ffffff;
    background-image: linear-gradient(
      225deg,
      #ffffff 0%,
      #e5e5e5 31%,
      #84eccf 100%
    );
  }
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const WrapperCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.margin};
`;

export const WrapperGrid = styled.div`
  display: grid;
`;

export const Wrapper = styled.section`
  width: 80%;
  max-width: 20rem;
  margin: auto;
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

// BUTTONS
export const ButtonText = styled.h5`
  font-size: 1rem;
  font-weight: 500;
  color: #084030;
  text-align: center;
`;
export const StyledButton = styled.button`
  border-radius: 0.2rem;
  border: 0.1rem solid #84eccf;
  padding: 0.4rem;
  margin: 0.2rem 0;
  cursor: pointer;
  width: 100%;
  max-width: 15rem;
  min-width: 10rem;
  transition: all 0.5s;
  background-color: #84eccf;
  background-size: 200%;
  background-image: linear-gradient(to left, #ffffff, #84eccf);

  &:hover {
    background-position: right;
  }
`;

export const StyledSubmit = styled(StyledButton)`
  width: fit-content;
  min-width: 0;
`;

export const StyledDeleteButton = styled(StyledButton)`
  background: #ff91ab;

  width: 10.7rem;
  margin: 0.7rem auto 0;
  border: 0.1rem solid #fe2256;
  background-size: 200%;
  background-image: linear-gradient(to left, #fe2256, #ff91ab, #fff 99%);

  &:hover ${ButtonText} {
    color: #fff;
  }
`;
//FORMS
export const Fieldset = styled.fieldset`
  padding: 1rem;
  margin: 0.4rem auto;
  border-radius: 0.2rem;
  border: 0.2rem solid #84eccf;
  width: 90%;
  max-width: 20rem;
  background: #ffffff;
`;

export const SmallFieldset = styled(Fieldset)`
  margin: 0 auto;
  width: 100%;
  margin-top: 1.5rem;
  max-width: 20rem;
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
  background: #84eccf50;
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
  border-color: #84eccf;
`;

export const Signup = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;
export const Label = styled.label`
  margin-bottom: 0.6rem;
  max-width: 15rem;
  width: 100%;
`;

// LISTS
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

export const Li = styled.li`
  list-style: none;
  min-height: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//Grid for share and copy button
export const ShareGridUl = styled(Ul)`
  justify-items: center;

  @media (min-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

//HEADER
export const StyledHeader = styled.header`
  background: white;
`;

export const HeaderSectionWrapper = styled.section`
  background: #fff;
  width: 100%;
  padding: 1rem 0.1rem;

  border-top: 0.2rem solid #84eccf;

  @media (min-width: 668px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 1rem 4rem;
  }
`;

// IMAGE
export const Img = styled.img`
  width: 100%;
  margin: auto;
  max-width: 250px;

  @media (min-width: 1024px) {
    max-width: 350px;
  }
`;
//GRID
export const LargerGrid = styled(Ul)`
  background: #ffffff99;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border: 0.1rem solid #84eccf50;
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
  border: 0.2rem solid #84eccf;
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

  border-bottom: 0.2rem solid #84eccf;
  border-top: 0.2rem solid #84eccf;
  padding: 0.5rem 0.3rem;

  background-color: #ffffff;
  background-image: linear-gradient(
    45deg,
    #ffffff 0%,
    #e5e5e5 31%,
    #84eccf 100%
  );
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 35rem;
  margin: auto;

  @media (max-width: 668px) {
    justify-content: space-evenly;
  }
`;

export const ListFooter = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const ListItem = styled.li`
  display: inline;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    /* font-weight: bold; */
    transform: scale(1.1);
  }
`;

// LINKS/ICONS

export const StyledLinks = styled.a`
  font-size: 2rem;
  color: #84eccf;

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

// SLIDER

export const StyledSlider = styled.input`
  appearance: none;
  width: 20%;
  height: 0.7rem;
  background: #d3d3d3;
  outline: none;

  background: #84eccf;
  border: 0.1rem solid #84eccf;
  border-radius: 0.2rem;
  margin: 0.2rem 0;
  cursor: pointer;

  width: 15rem;

  background-color: #84eccf;

  background-image: linear-gradient(to right, #ffffff, #84eccf);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #c3c3c3;
    border: 0.1rem solid #08403070;
    background: radial-gradient(#fff, #84eccf);
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
  }
`;

// COMMENT SECTION

export const Comment = styled.div`
  background: #84eccf;
  color: #084030;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 0.2rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 4rem;
  max-width: 30rem;

  @media (max-width: 668px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CommentForm = styled.form`
  width: 100%;
`;

export const CommentText = styled.p`
  text-align: left;
  word-break: break-all;
`;

export const WrittenBy = styled.p`
  text-align: right;
  font-size: 0.7rem;
  margin: 0;
  opacity: 0.5;
`;

export const GuestBook = styled.section`
  background: #fff;

  border-radius: 0.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin: 1.5rem 1.5rem 0;
  width: 100%;

  @media (min-width: 668px) {
    width: 70%;
    margin: 1.5rem auto 0;
  }

  @media (min-width: 1024px) {
    width: 50%;
    margin: 1.5rem auto 0;
  }
`;

export const CommentLabel = styled.label`
  width: 70%;
  min-height: 6rem;
  max-width: 30rem;

  margin: 0.4rem auto;
  border-radius: 0.4rem;
  border: 0.2rem solid #84eccf;

  background: #ffffff;
  display: flex;
  flex-direction: column;

  &:focus-within {
    border: 0.2rem solid #1dd19e;
  }
  @media (max-width: 668px) {
    width: 100%;
  }
`;
export const Textarea = styled.textarea`
  padding: 0.4rem;
  border: none;
  min-height: 6rem;
  width: 100%;
  background: #ffffff;
  resize: none;

  &::-webkit-input-placeholder {
    text-align: center;
  }
  &:focus {
    outline: none;
  }
`;
