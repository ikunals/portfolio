import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import me from "../assets/kunalportfolio.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="kunal" />

        <h2>Kunal Sawant</h2>
        <p>
          Web developer Enthusiast who wants to keep learning and making stuff
        </p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/kunal-sawant-1855681bb/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/ikunals" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
