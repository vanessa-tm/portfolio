
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import Header from "./components/Header/Header.tsx";


function App() {

  return (
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/about" element={ <About/>} />
        <Route path="/work" element={ <Projects />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
