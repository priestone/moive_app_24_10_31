import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Detail from "./pages/detail/Detail";
import PageNotFound from "./pages/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Ham from "./pages/home/Ham";

const Router = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/ham" element={<Ham></Ham>}></Route>
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
