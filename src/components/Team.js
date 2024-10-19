import React from "react";
import "../css/Team.css";

const Team = () => {
  return (
    <section id="team">
      <h1>Meet the Team</h1>
      <div className="row">
        {/* Team member 1 */}
        <div className="column">
          <div className="card">
            <img src="img1.jpg" alt="Jane" className="team-img" />
            <div className="container">
              <h2>Mahaboob Pasha Mohammad</h2>
              <p className="title">Website Developer</p>
              <p>
                Masters in Software Engineering at Saint Louis University. I am
                from South India, Hyderabad. I completed my bachelor's in GRIET,
                India. My role in this project is Website Developer.
              </p>
              <p>mahaboobpasha.mohammad@slu.edu</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        {/* Team member 2 */}
        <div className="column">
          <div className="card">
            <img src="img2.jpg" alt="Mike" className="team-img" />
            <div className="container">
              <h2>Ibro Kardasevic</h2>
              <p className="title">Content Validator</p>
              <p>
                Senior here at SLU, and I study computer science. I enjoy being
                outdoors and many different sports. My role in this research
                effort was as a content validator and reporting/delivery lead.
              </p>
              <p>ikardasevic@slu.edu</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        {/* Team member 3 */}
        <div className="column">
          <div className="card">
            <img src="img3.jpg" alt="John" className="team-img" />
            <div className="container">
              <h2>Smridhi Uppala</h2>
              <p className="title">Content Validator</p>
              <p>
                Smridhi Uppala is a junior at Saint Louis University, majoring
                in Computer Science. She has a keen interest in web development
                and data analysis. Her role in this project is content
                validation.
              </p>
              <p>suppala4@slu.edu</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        {/* Team member 4 */}
        <div className="column">
          <div className="card">
            <img src="img3.jpg" alt="John" className="team-img" />
            <div className="container">
              <h2>Gowtham Sai Mukthineni</h2>
              <p className="title">Reporting and Delivery Lead</p>
              <p>
                Gowtham Sai Mukthineni is a senior at Saint Louis University,
                majoring in Computer Science. He has a keen interest in web
                development and data analysis. His role in this project is
                Reporting and Delivery Lead.
              </p>
              <p>gowthamsai2510@gmail.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
