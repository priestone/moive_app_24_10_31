import styled from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Container = styled.section`
  padding: 100px ${mainStyle.pcPadding};
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
