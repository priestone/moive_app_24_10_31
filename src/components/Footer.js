import styled from "styled-components";

const Container = styled.footer`
  /* position: absolute;
  bottom: 0;
  left: 0; */
  margin-top: auto;
  width: 100%;
  height: 100px;
  background-color: white;
  h2 {
    color: #1d1d1d;
  }
`;

const Footer = () => {
  return (
    <Container>
      <h2>여기는 푸터입니다</h2>
    </Container>
  );
};

export default Footer;
