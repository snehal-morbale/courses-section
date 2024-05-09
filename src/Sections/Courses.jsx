import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Courses.css";
import { data } from "./data";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <section id="courses">
      <div className="host">
        <h1 className="heading">
          <span className="text-black">Courses </span>
        </h1>

        {/* Navigation  */}

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
          Our Primary School Courses
        </motion.h2>
        <motion.p
          animate={{ x: 40, scale: 1 }}
          transition={{ delay: 0.5 }}
          initial={{ scale: 0 }}
        >
          At our primary school, we offer a diverse range of courses designed to
          cater to the holistic development of our young learners.
        </motion.p>
      </div>
      <motion.div
        animate={{ y: -130, scale: 1 }}
        transition={{ type: "tween", duration: 0.8, delay: 0.5 }}
        initial={{ scale: 0 }}
      >
        <div className="container  courses_container">
          {data.map((item) => (
            <CourseCard key={item.imgURL} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Courses;
