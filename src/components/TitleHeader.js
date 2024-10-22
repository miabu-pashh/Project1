import React from "react";
import { motion } from "framer-motion";
import "../css/TitleHeader.css";

export default function TitleHeader() {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const teamVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1.2 },
    },
  };

  return (
    <motion.div
      className="titleHeader"
      initial="hidden"
      animate="visible"
      variants={titleVariants}
    >
      <motion.h2 variants={titleVariants}>
        {[
          "A",
          "Survey",
          "on",
          "the",
          "Role",
          "of",
          "WebAssembly",
          "in",
          "Modern",
          "Web",
          "Architectures:",
        ].map((word, index) => (
          <motion.span key={index} className="word" variants={wordVariants}>
            {word}{" "}
          </motion.span>
        ))}
        <br />
        {["Performance,", "Security,", "and", "Emerging", "Use", "Cases"].map(
          (word, index) => (
            <motion.span key={index} className="word" variants={wordVariants}>
              {word}{" "}
            </motion.span>
          )
        )}
      </motion.h2>
      <motion.h3 className="team-number" variants={teamVariants}>
        Team 9
      </motion.h3>
    </motion.div>
  );
}
