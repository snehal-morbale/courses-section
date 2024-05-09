import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Courses from "./Sections/Courses";
import Hero from "./components/Hero/Hero";
import Secondary from "./Sections/Secondary";
import Higher from "./Sections/Higher";

const App = () => {
  let heroData = [
    { text1: "Embark on Your Learning Journey: ", text2: "Browse Our Courses" },
    { text1: "Discover Your Passion:", text2: "Explore Our Course Offerings" },
    { text1: "Ignite Your Curiosity:", text2: "Start Exploring Our Courses" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 4000);
  }, []);

  return (
    <Router>
      <div>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
        {/* <Courses /> */}
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/secondary" element={<Secondary />} />
          <Route path="/higher" element={<Higher />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
