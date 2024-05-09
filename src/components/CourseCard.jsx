import React, { useState } from "react";
import "../Sections/style.css";
import { motion } from "framer-motion";
import users from "/images/userlogo.jpg";
import duration from "/images/durationicon.png";

const CourseCard = ({ imgURL, title, prof, students, des }) => {
  const [rotate, setRotate] = useState(false);
  return (
    <div className="courses_card">
      <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        transition={{ delay: 0.5 }}
        onClick={() => {
          setRotate(!rotate);
        }}
        className="courses_img"
      >
        <img src={imgURL} alt={title} />
      </motion.div>

      <div className="courses_card-info">
        <h4>{title}</h4>
        <h5>{prof}</h5>
        <p>{des}</p>
        <div className="courses_card-row">
          <div>
            <span className="courses_card-icon">
              <motion.img
                animate={{ rotate: [0, 200, 200, 0] }}
                transition={{ repeat: 2, duration: 1 }}
                src={users}
                alt=""
              ></motion.img>
              {students}
            </span>
          </div>
          <div>
            <span className="courses_card-icon">
              <motion.img
                animate={{ rotate: [0, 200, 200, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                src={duration}
                alt=""
              ></motion.img>
              6 Months
            </span>
          </div>
          <div className="courses_card.price">$99.00</div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
