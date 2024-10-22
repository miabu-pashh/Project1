import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Team.css";

// Import images as before
import maibu from "../images/maibu.png";
import Ibro from "../images/Ibro.png";
import smridhi from "../images/smridhi.png";
import gowtham from "../images/gowtham.jpeg";

const Modal = ({ isOpen, onClose, member }) => (
  <AnimatePresence>
    {isOpen && member && (
      <>
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <img src={member.img} alt={member.name} className="modal-img" />
            <h2>{member.name}</h2>
            <p className="title">{member.title}</p>
            <p>{member.email}</p>
            <p>{member.description}</p>

            <motion.button
              className="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const TeamMember = ({ member, onShowDetails }) => (
  <motion.div
    className="column"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img src={member.img} alt={member.name} className="team-img" />
      <div className="container">
        <h2>{member.name}</h2>
        <p className="short-bio">{member.title}</p>
        <motion.button
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onShowDetails(member)}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Mahaboob Pasha",
      title: "Website Developer",
      description:
        "Masters in Software Engineering at Saint Louis University. I am from South India, Hyderabad. I completed my bachelor's in GRIET, India. My role in this project is Website Developer.",
      email: "mahaboobpasha.mohammad@slu.edu",
      img: maibu,
    },
    {
      name: "Ibro Kardasevic",
      title: "Content Validator",
      description:
        "Senior here at SLU, and I study computer science. I enjoy being outdoors and many different sports. My role in this research effort was as a content validator and reporting/delivery lead.",
      email: "ikardasevic@slu.edu",
      img: Ibro,
    },
    {
      name: "Smridhi Uppala",
      title: "Website Developer",
      description:
        "Smridhi Uppala is a junior at Saint Louis University, majoring in Computer Science. She has a keen interest in web development and data analysis. Her role in this project is content validation.",
      email: "suppala4@slu.edu",
      img: smridhi,
    },
    {
      name: "Gowtham Sai ",
      title: "Reporting and Delivery Lead",
      description:
        "Gowtham Sai Mukthineni is a senior at Saint Louis University, majoring in Computer Science. He has a keen interest in web development and data analysis. His role in this project is Reporting and Delivery Lead.",
      email: "gowthamsai2510@gmail.com",
      img: gowtham,
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
          <TeamMember
            key={index}
            member={member}
            onShowDetails={(member) => setSelectedMember(member)}
          />
        ))}
      </div>
      <Modal
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />
    </section>
  );
};

export default Team;
