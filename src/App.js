import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from './components/Card';
import PageContainer from "./containers/PageContainer";
import { useSelector } from "react-redux";


function App() {
  const {drawer} = useSelector(state => state.drawer)
  return (
    <div className="App">
    <PageContainer>
      <BrowserRouter>
       <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
        {drawer && <Card /> }
        <Footer></Footer>
      </BrowserRouter>
      </PageContainer>
    </div>
  );
}

export default App;
