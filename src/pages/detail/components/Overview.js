import styled from "styled-components";
import { NO_IMG, ORIGINAL_URL } from "../../../constant/imgUrl";
import Wrapper from "../../../components/Wrapper";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;
const Bg = styled.div`
  width: 45%;
  height: 800px;
  background-color: lightgray;
`;
const TitleWrap = styled.div`
  width: 50%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  span {
    font-size: 18px;
    font-weight: 300;
  }

  ul {
    list-style: disc;
    margin: 15px 0px 10px 20px;

    li {
      font-size: 18px;
      margin-bottom: 10px;
    }
  }

  p {
    font-size: 18px;
    line-height: 30px;
    margin-top: 50px;
    opacity: 0.7;
    letter-spacing: 0;
  }
`;

const Overview = ({ overData }) => {
  return (
    <Wrapper>
      <Container>
        <Bg
          style={{
            background: `url(${
              overData.poster_path
                ? ORIGINAL_URL + overData.poster_path
                : NO_IMG
            }) no-repeat center / cover`,
          }}
        />
        <TitleWrap>
          <h3>{overData.title}</h3>
          <span>{Math.round(overData.vote_average)}점</span> •{" "}
          <span>{overData.runtime}분</span> •{" "}
          <span>{overData.release_date}</span>
          <ul>
            {overData.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <p>{overData.overview}</p>
        </TitleWrap>
      </Container>
    </Wrapper>
  );
};

export default Overview;
