import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import News from "./containers/NewsContainer";
import Ask from "./pages/Ask";
import Job from "./pages/Job";
import Show from "./pages/Show";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/show" element={<Show />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/jobs" element={<Job />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
