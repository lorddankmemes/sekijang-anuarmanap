import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './Pages/Home'
import Biodata from './Pages/Biodata'
import NavbarLayout from './Components/Layout/NavbarLayout';

import ReactGA from 'react-ga'
import Survey from './Pages/Survey';

ReactGA.initialize('UA-248601222-1')

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<Home />} />
          <Route exact path="bio" element={<Biodata />} />
          <Route exact path="kajiselidik-anak-muda-sekijang" element={<Survey />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
