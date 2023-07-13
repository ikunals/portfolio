import React from "react";
import vg from "../assets/vg.png";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form {...animations.form}>
          <h2>Contact Me</h2>
          <div style={{ display: "flex" }}>
            <AiOutlineMail style={{ marginTop: 10 }} />
            <a
              href="mailto:kunalwork412@gmail.com"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              <h1>kunalwork412@gmail.com</h1>
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <AiOutlineWhatsApp style={{ marginTop: 10 }} />
            <a
              href="mailto:kunalwork412@gmail.com"
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "10px",
              }}
            >
              <h1>+91 9673766486</h1>
            </a>
          </div>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
