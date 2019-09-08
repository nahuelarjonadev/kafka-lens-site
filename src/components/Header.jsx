import React from "react";
import GitHubButton from "react-github-btn";
import { motion } from "framer-motion";
import HeaderStyle from "../styled/HeaderStyle";
import Button from "../styled/Button";
import logo from "../assets/lens-icon.png";

const subtitleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Header = () => {
  return (
    <HeaderStyle>
      <div className="title">
        <img src={logo} alt="" />
        <div id="name">Kafka Lens</div>
      </div>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={subtitleVariants}
        transition={{
          delay: 0.5,
        }}
        className="subtitle"
      >
        Open source Kafka monitor
      </motion.p>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        transition={{
          delay: 1,
          x: { type: "inertia", stiffness: 50 },
          default: { duration: 1 },
        }}
      >
        <div className="title">
          <p>Star us on GitHub!</p>
          <GitHubButton
            className={"githubbtn"}
            href="https://github.com/oslabs-beta/kafka-lens"
            data-icon="octicon-star"
            aria-label="Star ntkme/github-buttons on GitHub"
          >
            Star
          </GitHubButton>
        </div>
        <div className="title">
          <Button
            href="https://kafkalens.s3-us-west-1.amazonaws.com/assets/dist/Kafka+Lens-2.0.0.dmg"
          >
            <div>Download for MacOS</div>
          </Button>
          <Button
            href="https://kafkalens.s3-us-west-1.amazonaws.com/assets/dist/kafka-lens_2.0.1_amd64.snap"
          >
            <div>Download for Linux</div>
          </Button>
        </div>
      </motion.div>
    </HeaderStyle>
  );
};

export default Header;
