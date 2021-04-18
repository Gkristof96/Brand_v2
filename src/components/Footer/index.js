import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { footerVariants } from "../../animations/animation";
import { Link } from "react-scroll";

const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  //animation control
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <footer ref={ref}>
        <motion.div
          variants={footerVariants}
          initial="hidden"
          animate={controls}
          className="container"
        >
          <div className="logo">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              className="logo__brand"
            >
              <img src="images/logo_3.png" alt="logo" />
              <h1>Cross Gym</h1>
            </Link>
            <h2>
              If you want to <span>change</span>
            </h2>
          </div>
          <div className="social-icons">
            <AiOutlineFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiOutlineInstagram className="icon" />
            <AiOutlineYoutube className="icon" />
          </div>
          <h1 className="copyright">Copyright © Cross Gym</h1>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
