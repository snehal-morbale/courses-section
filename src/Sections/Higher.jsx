// Higher.js

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//import "./Higher.css"; // Importing the CSS file
import { data3 } from "./data3";
import CourseCard from "../components/CourseCard";

const Higher = () => {
  return (
    <section id="higher">
      <div className="highest">
        <h1 className="heading">
          <span className="text-black">Courses </span>
        </h1>

        {/* Navigation */}
        <div className="Navigator-div">
          <Link to="/" className="names-btn">
            Primary
          </Link>
          <Link to="/secondary" className="names-btn">
            Secondary
          </Link>
          <Link to="/higher" className="names-btn">
            Higher
          </Link>
        </div>
      </div>

      <div className="title">
        <motion.h2
          animate={{ x: 40, scale: 1 }}
          transition={{ delay: 0.3 }}
          initial={{ scale: 0 }}
        >
          Our Higher School Courses
        </motion.h2>
        <motion.p
          animate={{ x: 40, scale: 1 }}
          transition={{ delay: 0.5 }}
          initial={{ scale: 0 }}
        >
          In our higher school, we offer a diverse range of advanced courses
          tailored to meet the needs and aspirations of our students as they
          prepare for college and beyond.
        </motion.p>
      </div>

      <motion.div
        animate={{ y: -130, scale: 1 }}
        transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
        initial={{ scale: 0 }}
      >
        <div className="container courses_container">
          {data3.map((item) => (
            <CourseCard key={item.imgURL} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Higher;
