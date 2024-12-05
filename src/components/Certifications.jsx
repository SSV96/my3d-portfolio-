import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { certifications } from "../constants/index.js";
const CertificationCard = ({
  index,
  name,
  issuedBy,
  skills,
  image,
  link,
  icon,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div
        className="relative w-full h-[230px] cursor-pointer"
        onClick={() => window.open(link, "_blank")}
      >
        <img
          src={image}
          alt="Certificate_Image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center ">
            <img
              src={icon}
              alt="Issued Organization Icon"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">
          Organization :{issuedBy}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <p
            key={`${name}-${skill.name}`}
            className={`text-[14px] ${skill.color}`}
          >
            #{skill.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

const Certications = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My </p>
        <h2 className={`${styles.sectionHeadText}`}>Certifications</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following Certications showcases my skills and experience through
          real-world examples of my work.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certifications.map((project, index) => (
          <CertificationCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certications, "");
