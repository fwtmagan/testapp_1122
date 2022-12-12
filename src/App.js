import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import Home from './Home';
import Weather from './Weather';
import Dashboard from './Dashboard';
import NotMatch from './NotMatch';
import Footer from './footer';
import Navigation from './nav';
import slideImg1 from "./img/_01s.png";

function App() {
  return (
    <div className="App">
      <img src={slideImg1} className="site-logo" alt="logo" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="weather" element={<Weather />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotMatch />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;