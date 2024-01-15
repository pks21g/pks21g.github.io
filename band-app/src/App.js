import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Live from "./pages/Live";
import Home from "./pages/Home";
import { Store } from "./pages/Store";
import Nav from "./components/Nav";
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path='/' index element={<Home />} />
          <Route path="/live" element={<Live />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
