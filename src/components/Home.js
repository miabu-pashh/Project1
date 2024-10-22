import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../css/Home.css";

const DropdownSection = ({ title, content, isOpen, onToggle, index }) => {
  return (
    <motion.div
      className="dropdown-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        className={`section-header ${isOpen ? "active" : ""}`}
        onClick={onToggle}
      >
        <h3>{title}</h3>
        <span className="toggle-icon">{isOpen ? "−" : "+"}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="section-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Home = () => {
  const [openSections, setOpenSections] = useState({});
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  const toggleSection = (section, index) => {
    setOpenSections((prev) => ({
      ...prev,
      [`${section}-${index}`]: !prev[`${section}-${index}`],
    }));
  };

  // Overview Content
  const overview = {
    title: "WebAssembly Overview",
    content: (
      <p>
        WebAssembly (Wasm) has emerged as a revolutionary technology that
        enables high-performance code execution directly in web browsers. It was
        originally designed to complement JavaScript, allowing developers to
        build more efficient web applications by running code at near-native
        speeds. Today, WebAssembly's use has expanded beyond web browsers into
        server-side and edge computing environments, becoming a vital technology
        for modern web architectures.
      </p>
    ),
  };

  // Challenges Content
  const challenges = [
    {
      title: "1. Security Vulnerabilities",
      content: (
        <p>
          One of the most critical challenges WebAssembly faces is security.
          Despite its sandboxing model, which isolates WebAssembly modules from
          the host environment, it is still vulnerable to security issues like
          memory corruption and code injection attacks. Lehmann et al. [4]
          identified how malicious actors can exploit vulnerabilities to perform
          cryptojacking, where unauthorized cryptocurrency mining occurs within
          the user's browser...
        </p>

      ),
    },
    // ... your existing challenges
  ];

  // Future Research Content
  const futureResearch = [
    {
      title: "1. Enhanced Security Models",
      content: (
        <p>
          As WebAssembly continues to expand beyond web applications into more
          sensitive areas like IoT and cloud computing, security becomes
          paramount. Researchers must explore new ways to enhance sandboxing
          techniques to prevent exploits like cryptojacking and buffer overflow
          attacks. Formal verification methods could be employed to rigorously
          check WebAssembly applications for security vulnerabilities before
          deployment...
        </p>
      ),
    },
    {
      title: "2. Advanced Tooling and Debugging Support",
      content: (
        <p>
          Developers need better tools for building, testing, and debugging
          WebAssembly applications. Future research should focus on creating
          standardized toolchains that work consistently across platforms and
          improve WebAssembly's integration with development environments...
        </p>
      ),
    },
    {
      title: "3. Optimization for Serverless and Edge Computing",
      content: (
        <p>
          In serverless and edge computing environments, where lightweight,
          efficient execution is paramount, WebAssembly shows great potential.
          However, more research is needed to optimize Wasm for large-scale
          applications that require sub- stantial computational resources.
          Future efforts should focus on minimizing the memory overhead and
          improving runtime performance for complex applications.
        </p>
      ),
    },
    {
      title: "4. Energy-Efficient Implementations for IoT Devices",
      content: (
        <p>
          Energy efficiency will be a critical factor in determining
          WebAssembly’s success in IoT devices and other low-power environments.
          Researchers must explore new runtime opti- mization techniques that
          reduce energy consumption while maintaining performance. Techniques
          such as Just-in-Time (JIT) compilation could be improved, or
          alternative energy- efficient models like Ahead-of-Time (AOT)
          compilation may offer better results.
        </p>
      ),
    },
    {
      title: "5. Standardization and Ecosystem Growth",
      content: (
        <p>
          The ongoing development of WASI and other cross-platform standards
          will be essential for the growth of WebAssembly. Future research
          should focus on extending WASI to cover a broader range of system
          interactions, ensuring WebAssembly can operate efficiently across
          platforms like IoT devices, embedded systems, and cloud environments.
          Additionally, toolchain standardization must continue to ensure
          consistent and predictable behavior across development platforms
        </p>
      ),
    },
    {
      title: "6. Future of WebAssembly in Emerging Technologies",
      content: (
        <p>
          As WebAssembly’s adoption increases, future research should explore
          how Wasm can support emerging technologies, such as blockchain,
          machine learning, and quantum comput- ing. Li et al.Explored the
          use of data mining and patent analysis to track emerging trends in
          technology, providing insight into how WebAssembly could fit into
          these growing fields. Researchers should also investigate how
          WebAssembly can integrate with other computing paradigms like
          serverless functions and distributed systems.
        </p>
      ),
    },
    // ... Add remaining future research points
  ];

  return (
    <section id="home">
      <motion.h1
        className={`main-title ${animateHeader ? "animate" : ""}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Introduction to WebAssembly
      </motion.h1>

      {/* Overview Section */}
      <div className="section-group">
        <DropdownSection
          title={overview.title}
          content={overview.content}
          isOpen={openSections["overview-0"]}
          onToggle={() => toggleSection("overview", 0)}
          index={0}
        />
      </div>
      <motion.div
        className="section-group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2>Key Challenges</h2>
        <p>
          WebAssembly (Wasm) is rapidly transforming the landscape of web and
          cloud-based applications, offering near-native performance and
          cross-platform compatibility. However, as this technology evolves,
          several challenges must be overcome for its widespread adoption and
          optimized use:
        </p>
        <h3>Security Vulnerabilities</h3>
        <p>
          Despite its secure sandboxing model, Wasm is still susceptible to security
          threats such as memory corruption and code injection attacks. Issues like
          cryptojacking, where unauthorized cryptocurrency mining occurs, have been
          identified in some applications. Ensuring robust security mechanisms is
          crucial for its safe deployment, particularly when compiled from
          memory-unsafe languages like C and C++.
        </p>
        <h3>Tooling and Debugging Limitations</h3>
        <p>
          WebAssembly's development ecosystem is still maturing, leading to
          difficulties with toolchain consistency and debugging support. Developers
          face challenges in analyzing performance bottlenecks and addressing
          security vulnerabilities, limiting the ability to optimize
          WebAssembly-based applications.
        </p>
        <h3>Performance Overheads in Complex Applications</h3>
        <p>
          While Wasm delivers excellent performance for lightweight applications, it
          may struggle with more complex tasks requiring significant computational
          power or memory. In serverless computing environments, performance overhead
          becomes particularly challenging, impacting the speed and efficiency of
          large-scale applications.
        </p>
        <h3>Standardization Across Platforms</h3>
        <p>
          The lack of uniform standards across different platforms complicates the
          consistent behavior of Wasm. Although the introduction of the WebAssembly
          System Interface (WASI) aims to address these issues, more work is needed
          to ensure smooth interoperability and performance across all platforms.
        </p>
        <h3>Energy Efficiency for IoT Devices</h3>
        <p>
          In resource-constrained environments like IoT, energy efficiency remains a
          concern. Just-in-Time (JIT) compilation, while beneficial for performance,
          can be energy-intensive. To support IoT growth, WebAssembly must reduce its
          energy consumption while maintaining optimal performance in
          battery-powered devices.
        </p>
     
        {/* {challenges.map((challenge, index) => (
          <DropdownSection
            key={index}
            title={challenge.title}
            content={challenge.content}
            isOpen={openSections[`challenges-${index}`]}
            onToggle={() => toggleSection("challenges", index)}
            index={index}
          />
        ))} */}
      </motion.div>

      <motion.div
        className="section-group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2>Future Research Directions</h2>
        {futureResearch.map((research, index) => (
          <DropdownSection
            key={index}
            title={research.title}
            content={research.content}
            isOpen={openSections[`future-${index}`]}
            onToggle={() => toggleSection("future", index)}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Home;
