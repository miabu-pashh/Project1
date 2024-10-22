import React from "react";
import { motion } from "framer-motion";
import "../css/Home.css";

const Home = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Introduction to WebAssembly
      </motion.h1>

      <article className="content-article">
        <motion.section
          className="article-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>WebAssembly Overview</h2>
          <p>
            WebAssembly (Wasm) has emerged as a revolutionary technology that
            enables high-performance code execution directly in web browsers. It
            was originally designed to complement JavaScript, allowing
            developers to build more efficient web applications by running code
            at near-native speeds. Today, WebAssembly's use has expanded beyond
            web browsers into server-side and edge computing environments,
            becoming a vital technology for modern web architectures.
          </p>
        </motion.section>

        <motion.section
          className="article-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Key Challenges</h2>
          <section className="subsection">
            <h3>Security Vulnerabilities</h3>
            <p>
              Despite its sandboxing model, WebAssembly faces security
              challenges including memory corruption and code injection attacks.
              Applications compiled from C/C++ are particularly vulnerable to
              buffer overflows.
            </p>
          </section>

          <section className="subsection">
            <h3>Tooling and Debugging Limitations</h3>
            <p>
              Developers struggle with inconsistent toolchains and limited
              debugging capabilities, affecting development efficiency and
              optimization potential.
            </p>
          </section>

          <section className="subsection">
            <h3>Performance Overheads</h3>
            <p>
              Complex applications face efficiency challenges, particularly in
              serverless environments where memory constraints and runtime
              optimization become critical.
            </p>
          </section>

          <section className="subsection">
            <h3>Standardization Issues</h3>
            <p>
              Platform-independent execution is hampered by toolchain
              variability and non-standardized interfaces, despite WASI's
              introduction.
            </p>
          </section>

          <section className="subsection">
            <h3>Energy Efficiency Concerns</h3>
            <p>
              JIT compilation in WebAssembly can be energy-intensive, posing
              challenges for battery-operated IoT devices.
            </p>
          </section>
        </motion.section>

        <motion.section
          className="article-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2>Future Research Directions</h2>
          <section className="subsection">
            <h3>Enhanced Security Models</h3>
            <p>
              Development of advanced sandboxing techniques and formal
              verification methods for security vulnerability detection.
            </p>
          </section>

          <section className="subsection">
            <h3>Advanced Tooling Support</h3>
            <p>
              Improving developer experience through better debugging tools and
              standardized toolchains.
            </p>
          </section>

          <section className="subsection">
            <h3>Serverless Optimization</h3>
            <p>
              Optimizing WebAssembly for serverless and edge computing
              environments to handle resource-intensive applications
              efficiently.
            </p>
          </section>

          <section className="subsection">
            <h3>IoT Energy Efficiency</h3>
            <p>
              Developing energy-efficient implementations for IoT devices
              through improved runtime optimization.
            </p>
          </section>

          <section className="subsection">
            <h3>Ecosystem Standardization</h3>
            <p>
              Expanding WASI standards and ensuring consistent behavior across
              different platforms and environments.
            </p>
          </section>

          <section className="subsection">
            <h3>Emerging Technologies</h3>
            <p>
              Integration with blockchain, machine learning, and quantum
              computing while supporting distributed systems.
            </p>
          </section>
        </motion.section>
      </article>
    </motion.section>
  );
};

export default Home;
