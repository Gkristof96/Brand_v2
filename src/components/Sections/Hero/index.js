import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { header, button, text } from "../../../animations/animation";

const Hero = () => {
  return (
    <>
      <section className="hero section" id="hero">
        <div className="container">
          <motion.h1 variants={header} initial="hidden" animate="visible">
            Cross gym
          </motion.h1>
          <motion.h2 variants={text} initial="hidden" animate="visible">
            Where the <span>yourney</span> begins
          </motion.h2>
          <motion.div
            className="btn-container"
            variants={button}
            initial="hidden"
            animate="visible"
          >
            <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              See more
            </Link>
          </motion.div>
        </div>
        <img className="triangle" src="images/vector_2.svg" alt="vector" />
      </section>
    </>
  );
};

export default Hero;
