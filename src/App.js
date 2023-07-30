import React from 'react';
import './App.scss';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import Layout from './Layout';
import PomodoroClock from './components/PomodoroClock';
import ErrorPage from "./error-page";
import Home from './components/Home';
import LotteryNumbers from './components/LotteryNumbers';
import Timer from './components/Timer';
import WordCounter from './components/WordCounter';
import { Route, Routes } from 'react-router-dom'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Home />
//     ),
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/pomodoro",
//         element: <PomodoroClock />,
//       },
//       {
//         path: "/lotto",
//         element: <LotteryNumbers />,
//       },
//     ]
//   },
// ])

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home to="/home" />} />
        <Route path="/pomodoro" element={<PomodoroClock />} />
        <Route path="/lottery" element={<LotteryNumbers />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/wordcounter" element={<WordCounter />} />
        <Route path="*" errorElement={<ErrorPage />} />
      </Routes>
      {/* <RouterProvider router={router} ></RouterProvider> */}
    </Layout>
  );
}

export default App;
