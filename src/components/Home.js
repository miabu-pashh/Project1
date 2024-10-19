import React, { useState } from "react";
import "../css/Home.css";

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showChallenges, setShowChallenges] = useState(false);
  const [showFuture, setShowFuture] = useState(false);

  return (
    <section id="home">
      <h1>Introduction to WebAssembly</h1>

      <div className="dropdown-section">
        <h3
          onClick={() => setShowIntro(!showIntro)}
          className="dropdown-header"
        >
          {showIntro ? "▼" : "▶"} WebAssembly Overview
        </h3>
        {showIntro && (
          <div className="dropdown-content">
            <p>
              WebAssembly (Wasm) has emerged as a revolutionary technology that
              enables high-performance code execution directly in web browsers.
              It was originally designed to complement JavaScript, allowing
              developers to build more efficient web applications by running
              code at near-native speeds. Today, WebAssembly's use has expanded
              beyond web browsers into server-side and edge computing
              environments, becoming a vital technology for modern web
              architectures.
            </p>
          </div>
        )}
      </div>

      <div className="dropdown-section">
        <h3
          onClick={() => setShowChallenges(!showChallenges)}
          className="dropdown-header"
        >
          {showChallenges ? "▼" : "▶"} Challenges and Opportunities
        </h3>
        {showChallenges && (
          <div className="dropdown-content">
            <p>
              Despite its promising capabilities, WebAssembly faces several
              challenges. Performance bottlenecks still exist, especially when
              compared to fully native applications, making it crucial to
              optimize WebAssembly for more demanding tasks. Additionally, the
              security of WebAssembly-based applications remains a significant
              concern, particularly in ensuring the safe execution of untrusted
              code. Integrating WebAssembly with legacy systems and various web
              technologies can also be a complex process, further complicating
              its adoption across different platforms.
            </p>
            <p>
              On the brighter side, WebAssembly continues to evolve, with
              advancements like the WebAssembly System Interface (WASI), which
              enables WebAssembly to interact with operating system resources,
              making it suitable for non-browser environments. Moreover,
              WebAssembly now supports a wide range of programming languages,
              expanding its potential across multiple development ecosystems.
            </p>
          </div>
        )}
      </div>

      <div className="dropdown-section">
        <h3
          onClick={() => setShowFuture(!showFuture)}
          className="dropdown-header"
        >
          {showFuture ? "▼" : "▶"} Looking Forward
        </h3>
        {showFuture && (
          <div className="dropdown-content">
            <p>
              As research and development in WebAssembly progress, exciting
              opportunities lie ahead. Efforts to enhance its performance on
              low-power devices, such as IoT and mobile platforms, are critical
              for its broader adoption. Additionally, ongoing work to strengthen
              security measures and develop better tools for debugging and
              profiling will ensure that WebAssembly becomes even more
              developer-friendly. With its versatility and potential to
              influence everything from web development to serverless and edge
              computing, WebAssembly is poised to play a central role in the
              future of technology.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
