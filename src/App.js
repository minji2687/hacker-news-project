import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import News from "./containers/NewsContainer";
import Ask from "./pages/Ask";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/show" element={<Home />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/jobs" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
