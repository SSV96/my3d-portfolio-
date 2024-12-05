import React, { Suspense } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
const TechCard = ({ name, icon, index }) => (
  <div className="mt-1">
    <div className="mt-7 flex justify-between items-center gap-1">
      <div className="flex-1 justify-center  items-center flex flex-col">
        {name}
        <img
          src={icon}
          alt={`feedback_by-${name}`}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  </div>
);

const Tech = () => {
  return (
    <>
      <p className={styles.sectionSubText}>My</p>
      <h2 className={styles.sectionHeadText}>Skills</h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={technology.name}>
            <Suspense fallback={<div>Loading...</div>}>
              <TechCard key={index} index={index} {...technology} />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
