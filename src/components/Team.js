import React from "react";
import { motion } from "framer-motion";
import "../css/Team.css";

const TeamMember = ({ name, title, description, email, img }) => (
  <motion.div
    className="column"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={img} alt={name} className="team-img" />
      <div className="container">
        <h2>{name}</h2>
        <p className="title">{title}</p>
        <p>{description}</p>
        <p>{email}</p>
        <p>
          <motion.button
            className="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Contact
          </motion.button>
        </p>
      </div>
    </motion.div>
  </motion.div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "Mahaboob Pasha Mohammad",
      title: "Website Developer",
      description:
        "Masters in Software Engineering at Saint Louis University. I am from South India, Hyderabad. I completed my bachelor's in GRIET, India. My role in this project is Website Developer.",
      email: "mahaboobpasha.mohammad@slu.edu",
      img: "img1.jpg",
    },
    {
      name: "Ibro Kardasevic",
      title: "Content Validator",
      description:
        "Senior here at SLU, and I study computer science. I enjoy being outdoors and many different sports. My role in this research effort was as a content validator and reporting/delivery lead.",
      email: "ikardasevic@slu.edu",
      img: "img2.jpg",
    },
    {
      name: "Smridhi Uppala",
      title: "Content Validator",
      description:
        "Smridhi Uppala is a junior at Saint Louis University, majoring in Computer Science. She has a keen interest in web development and data analysis. Her role in this project is content validation.",
      email: "suppala4@slu.edu",
      img: "img3.jpg",
    },
    {
      name: "Gowtham Sai Mukthineni",
      title: "Reporting and Delivery Lead",
      description:
        "Gowtham Sai Mukthineni is a senior at Saint Louis University, majoring in Computer Science. He has a keen interest in web development and data analysis. His role in this project is Reporting and Delivery Lead.",
      email: "gowthamsai2510@gmail.com",
      img: "img3.jpg",
    },
  ];

  return (
    <section id="team">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet the Team
      </motion.h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
