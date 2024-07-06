import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Members from './components/members/Members';
import Scoreboard from './components/scoreboard/Scoreboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      <Footer /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
