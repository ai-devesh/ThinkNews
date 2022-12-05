import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  const [progress, setProgress] = useState();
  const keepProgress = (progress) => {
    setProgress(progress)
  }
  let categories = ["business", "entertainment", "health", "science", "sports", "technology"]
    return (
      <div>
        <LoadingBar
          color='#2d49d3'
          height={4}
          shadowStyle={{}}
          progress={progress}
          onLoaderFinished={() => keepProgress(0)}
        />
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<News setProgress={keepProgress} />}></Route>
            <Route path="/business" element={<News setProgress={keepProgress}  category={categories[0]} />} />
            <Route path="/entertainment" element={<News setProgress={keepProgress}  category={categories[1]} />} />
            <Route path="/health" element={<News setProgress={keepProgress}  category={categories[2]} />} />
            <Route path="/science" element={<News setProgress={keepProgress}  category={categories[3]} />} />
            <Route path="/sports" element={<News setProgress={keepProgress}  category={categories[4]} />} />
            <Route path="/technology" element={<News setProgress={keepProgress}  category={categories[5]} />} />
          </Routes>
        </Router>
      </div>
    )
  }