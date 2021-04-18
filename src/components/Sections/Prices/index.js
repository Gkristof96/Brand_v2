import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PriceCard from "./PriceCard";
import SectionText from "../../SectionText";
import { priceData } from "../../../data/priceData";
import { containerVariants } from "../../../animations/animation";

const Prices = ({ data }) => {
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
      <section ref={ref} className="prices section" id="prices">
        <div className="container">
          <div className="texts">
            <SectionText data={data} controls={controls} />
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="price-cards"
          >
            {priceData.map((data, i) => (
              <PriceCard
                key={i}
                price={data.price}
                name={data.title}
                description={data.description}
                image={data.image}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Prices;
