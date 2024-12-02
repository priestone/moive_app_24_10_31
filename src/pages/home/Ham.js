import { useEffect, useState } from "react";
import { nowPlaying } from "../../api";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

const Banner = styled.div`
  height: 80vh;
  background-color: gray;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  padding: 100px;
`;

const Con = styled.div``;

const Ham = () => {
  const [movieData, setMovieData] = useState();
  const [resultData, setResultData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const result = await nowPlaying(1);
        setMovieData(result.results);
        setResultData(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const fetchData = async () => {
    try {
      let page = (resultData.page += 1);
      if (resultData.page <= resultData.total_pages) {
        const { results } = await nowPlaying(page);
        setMovieData(movieData.concat(results));
      }
      console.log(page);
    } catch (error) {}
  };

  console.log(movieData);
  return (
    <div>
      <div>
        {movieData && (
          <>
            <Banner>영화 배너 섹션</Banner>

            <Container>
              <InfiniteScroll
                dataLength={movieData.length}
                next={fetchData}
                hasMore={true}
              >
                <div>
                  {movieData.map((data) => (
                    <Con key={data.id}>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
                        alt={data.title}
                      />
                    </Con>
                  ))}
                </div>
              </InfiniteScroll>
            </Container>
          </>
        )}
      </div>
    </div>
  );
};

export default Ham;
