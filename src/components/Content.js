import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faCogs,
  faLightbulb,
  faSearch,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import "../css/Content.css";

const Content = () => {
  const [showProblemDomains, setShowProblemDomains] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [showMethodologies, setShowMethodologies] = useState(false);
  const [showFindings, setShowFindings] = useState(false);

    const [animate, setAnimate] = useState(false);

     useEffect(() => {
       setAnimate(true);
     }, []);

     const sectionVariants = {
       hidden: { opacity: 0, y: 20 },
       visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
     };

     const contentVariants = {
       hidden: { opacity: 0, height: 0 },
       visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
     };

     const DropdownSection = ({ title, icon, isOpen, setIsOpen, children }) => (
       <motion.div
         className="dropdown"
         variants={sectionVariants}
         initial="hidden"
         animate="visible"
       >
         <button
           onClick={() => setIsOpen(!isOpen)}
           className={`dropdown-btn ${isOpen ? "active" : ""}`}
         >
           <FontAwesomeIcon icon={icon} className="icon" /> {title}
           <span className="arrow">
             <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
           </span>
         </button>
         <AnimatePresence>
           {isOpen && (
             <motion.div
               className="dropdown-content"
               variants={contentVariants}
               initial="hidden"
               animate="visible"
               exit="hidden"
             >
               {children}
             </motion.div>
           )}
         </AnimatePresence>
       </motion.div>
     );


  return (
    <motion.section
      id="content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Summarized Findings from the Survey Papers
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our survey on WebAssembly covered a variety of important topics across
        performance optimization, security, serverless computing, tooling, and
        applications in emerging technologies. Below is a summary of the key
        findings:
      </motion.p>

      <DropdownSection
        title="Performance Optimization"
        icon={faCogs}
        isOpen={showProblemDomains}
        setIsOpen={setShowProblemDomains}
      >
        <ul>
          <li>
            <FontAwesomeIcon icon={faLightbulb} className="icon" /> One of the
            most significant advantages of WebAssembly is its ability to
            optimize performance, particularly in web applications that require
            near-native speeds for tasks such as 3D rendering and scientific
            simulations. Key studies highlight: Herrera et al. (2018)
            demonstrated that WebAssembly can drastically improve the
            performance of computationally intensive tasks by bypassing the
            limitations of JavaScript. Yan et al. (2021) reported performance
            improvements of 2x to 10x in comparison to JavaScript, particularly
            for high-load scenarios, making WebAssembly an ideal choice for web
            applications requiring substantial computational power. Jangda et
            al. (2019) further explored the gap between WebAssembly and native
            code, showing that WebAssembly performs better than JavaScript for
            CPU-bound tasks, though it still has some overhead when compared to
            fully compiled native code.
          </li>
         
        </ul>
      </DropdownSection>

      {/* Solutions */}
      <DropdownSection
        title="Security in WebAssembly"
        icon={faLightbulb}
        isOpen={showSolutions}
        setIsOpen={setShowSolutions}
      >
        <ul>
          <li>
            <FontAwesomeIcon icon={faCogs} className="icon" /> While WebAssembly
            provides excellent performance, security remains a critical
            challenge. Several studies have pointed out vulnerabilities related
            to memory management, cryptojacking, and code injection: Lehmann et
            al. (2020) identified that WebAssembly's performance can be
            exploited by malicious actors for cryptojacking, where unauthorized
            cryptocurrency mining occurs in the user's browser without their
            knowledge. Xia et al. (2023) addressed the issue of memory
            corruption in WebAssembly, specifically in applications compiled
            from memory-unsafe languages such as C and C++. Their work suggests
            that better security frameworks are needed to prevent
            vulnerabilities like buffer overflows. Dejaeghere et al. (2023)
            examined how WebAssembly compares to other secure computing
            environments like eBPF, concluding that while WebAssembly has
            strengths, there are still areas for improvement in security
            protocols.
          </li>
         
        </ul>
      </DropdownSection>

      {/* Methodologies */}
      <DropdownSection
        title="Serverless and Edge Computing"
        icon={faSearch}
        isOpen={showMethodologies}
        setIsOpen={setShowMethodologies}
      >
        <ul>
          <li>
            <FontAwesomeIcon icon={faSearch} className="icon" /> WebAssembly’s
            portability and small binary size make it particularly useful in
            serverless and edge computing environments. Research in this area
            explores how WebAssembly can be used for lightweight and efficient
            execution on resource-constrained devices: Ray (2023) demonstrated
            WebAssembly's utility in energy-efficient IoT devices, showcasing
            how it can reduce the computational overhead while maintaining
            performance. Kjorveziroski et al. (2023) explored the application of
            WebAssembly in Function-as-a-Service (FaaS) platforms, noting that
            it allows for faster execution and reduced memory overhead when
            compared to traditional methods. Mendki (2020) evaluated
            WebAssembly's role in edge computing, where real-time analytics and
            high performance are essential. The study found that WebAssembly
            improves performance for tasks like data processing in IoT devices,
            but still faces challenges in optimizing for more complex functions.
          </li>
         
        </ul>
      </DropdownSection>

      {/* Key Findings */}
      <DropdownSection
        title="Tooling and Development"
        icon={faChartBar}
        isOpen={showFindings}
        setIsOpen={setShowFindings}
      >
        <ul>
          <li>
            <FontAwesomeIcon icon={faChartBar} className="icon" /> Despite its
            growing adoption, WebAssembly still faces challenges in terms of
            tooling and system integration. Several studies have focused on
            improving the development experience and performance optimization
            through better tooling: Waseem et al. (2023) identified key
            challenges developers face when integrating WebAssembly into
            development pipelines. The study used reinforcement learning to
            optimize compilation and runtime behavior. Wallentowitz et al.
            (2022) examined WebAssembly’s potential in embedded systems and
            found that cross-platform performance and consistency can still be
            problematic due to tooling inconsistencies across platforms like
            Rust and Emscripten. Zhang et al. (2024) provided a comprehensive
            survey on WebAssembly runtimes and discussed the need for better
            standardization of toolchains to reduce developer friction and
            ensure consistent performance across platforms.
          </li>
        </ul>
      </DropdownSection>
      <DropdownSection
        title="Emerging Technology Applications"
        icon={faChartBar}
        isOpen={showFindings}
        setIsOpen={setShowFindings}
      >
        <ul>
          <li>
            <FontAwesomeIcon icon={faChartBar} className="icon" /> Finally,
            WebAssembly is beginning to show promise in various emerging
            technologies, particularly in areas like serverless computing,
            blockchain, and machine learning: Li et al. (2022) explored
            WebAssembly’s potential in emerging technologies through data mining
            and patent analysis. Their work suggests that WebAssembly can play a
            significant role in the future of serverless functions, distributed
            computing, and other innovative fields.
          </li>
        </ul>
      </DropdownSection>
    </motion.section>
  );
};

export default Content;
