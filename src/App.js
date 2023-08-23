import React from 'react';
import './App.scss';
import Layout from './Layout';
import PomodoroClock from './components/PomodoroClock';
import ErrorPage from "./error-page";
import Home from './components/Home';
import LotteryNumbers from './components/LotteryNumbers';
import Timer from './components/Timer';
import WordCounter from './components/WordCounter';
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home to="/home" />} />
        <Route path="/pomodoro" element={<PomodoroClock />} />
        <Route path="/lottery" element={<LotteryNumbers />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/wordcounter" element={<WordCounter />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
