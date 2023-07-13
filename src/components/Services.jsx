import React from "react";
import { motion } from "framer-motion";
import { FcGraduationCap } from "react-icons/fc";

import { FaSchool, FaGraduationCap } from "react-icons/fa";

import { GrTechnology } from "react-icons/gr";
import {
  SiChakraui,
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <div id="box1">
        <motion.div
          className="box1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <GrTechnology />
          TECH STACK
          <br />
          <br />
          <div
            className="tech"
            id="tech"
            style={{
              display: "grid",
              gridTemplateRows: "3",
              gridTemplateColumns: "3",
              grid: " auto  / auto auto auto ",
              rowGap: "10px",
              height: "70vh",
            }}
          >
            <button>
              <p>
                <SiReact style={{ color: "rgba(59,130,246,.5)" }} />
              </p>
              ReactsJS
            </button>
            <button>
              <p>
                <SiMongodb style={{ color: "green" }} />
              </p>
              MongoDB
            </button>
            <button>
              <p>
                <DiNodejsSmall />
              </p>
              NodeJS
            </button>
            <button>
              <p>
                <SiChakraui style={{ color: "rgba(59,130,246,.5)" }} />
              </p>
              ChakraUi
            </button>
            <button>
              <p>
                <SiTailwindcss style={{ color: "#38bdf8" }} />
              </p>
              Tailwind css
            </button>
            <button>
              <p>
                <SiJavascript />
              </p>
              Javascript
            </button>
          </div>
        </motion.div>
      </div>
      <div id="education">
        <div id="edu">
          <div id="box2">
            <motion.div
              className="box2"
              whileInView={animations.whileInView}
              initial={animations.twoAndThree}
            >
              <FcGraduationCap />
              <p>B.E Computer Engineering </p>
              <p>
                <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                  "8.86 CGPI"{" "}
                </span>
              </p>
              <p>U.C.O.E</p>
              <p>2020-2024</p>
            </motion.div>
          </div>
          <div id="box3">
            <motion.div
              className="box3"
              whileInView={animations.whileInView}
              initial={animations.twoAndThree}
              transition={{
                delay: 0.2,
              }}
            >
              <FaSchool />
              <p>St.Anthony's High school</p>
              <p style={{ fontWeight: "bold", fontStyle: "italic" }}>
                "89.04%"
              </p>
              <p>2017</p>
            </motion.div>
          </div>
        </div>

        <div id="box4">
          <motion.div
            className="box4"
            whileInView={animations.whileInView}
            initial={animations.four}
          >
            <FaGraduationCap />
            <p>Diploma in Mechanical Engineering </p>
            <p style={{ fontStyle: "italic", fontWeight: "bold" }}>"90.10%"</p>
            <p>Bhausaheb Vartak Polytechnic</p>
            <p>2017-2020</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
