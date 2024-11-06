import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail, reviewMovie, similarMovie } from "../../api";
import Loading from "../../components/Loading";
import PageTitle from "../../components/PageTitle";
import Overview from "./components/Overview";
import useScroolTop from "../../lib/useScrollTop";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  const [similar, setSimilar] = useState();
  useScroolTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        const similarData = await similarMovie(id);
        setData(detailData);
        setIsloading(false);
        setSimilar(similarData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log(similar);
  console.log(data);

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <>
          <PageTitle title={data.title} />
          <Overview overData={data} />
        </>
      )}
    </>
  );
};

export default Detail;
