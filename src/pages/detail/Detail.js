import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieDetail } from "../../api";
import styled from "styled-components";
import { mainStyle } from "../../GlobalStyled";
import { ORIGINAL_URL, W500_URL } from "../../constant/imgUrl";
import Loading from "../../components/Loading";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle";
import Overview from "./components/Overview";
import useScroolTop from "../../lib/useScrollTop";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);
  useScroolTop();

  useEffect(() => {
    (async () => {
      try {
        const detailData = await movieDetail(id);
        setData(detailData);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // console.log(data);

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
