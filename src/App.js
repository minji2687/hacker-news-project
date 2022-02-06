import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import News from "./containers/NewsContainer";
import Ask from "./pages/Ask";
import Jobs from "./pages/Jobs";
import Show from "./pages/Show";
import Home from "./pages/Home";
import AskDetailContainer from "./containers/AskDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/show" element={<Show />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/ask/:askId" element={<AskDetailContainer />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
