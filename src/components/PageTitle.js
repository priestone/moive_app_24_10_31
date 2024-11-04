import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | NETFLEX</title>
    </Helmet>
  );
};

export default PageTitle;
