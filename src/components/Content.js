import React, { useState } from "react";
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

  return (
    <section id="content">
      <h2>Summarized Findings from the Survey Papers</h2>
      <p>
        The review of multiple research papers on WebAssembly (Wasm) has
        provided valuable insights into its capabilities, challenges, and
        evolving applications in modern computing. This summary captures key
        findings from the literature, covering various problem domains,
        solutions, methodologies, and important takeaways.{" "}
      </p>

      {/* Problem Domains */}
      <div className="dropdown">
        <button
          onClick={() => setShowProblemDomains(!showProblemDomains)}
          className="dropdown-btn"
        >
          <FontAwesomeIcon icon={faCogs} className="icon" /> Problem Domains
          <span className="arrow">
            <FontAwesomeIcon
              icon={showProblemDomains ? faChevronUp : faChevronDown}
            />
          </span>
        </button>
        {showProblemDomains && (
          <div className="dropdown-content">
            <ul>
              <li>
                <FontAwesomeIcon icon={faLightbulb} className="icon" /> One of
                the recurring themes across the papers is the challenge of
                optimizing performance and security when using WebAssembly.
                While WebAssembly excels in certain areas, like reducing cold
                start latency in serverless functions (Kjorveziroski et al.,
                2022), it still faces performance bottlenecks in
                compute-intensive tasks (Mendki, 2020), particularly when
                compared to native applications. Another key issue is the
                complexity of integrating WebAssembly with legacy technologies
                and platforms, which can lead to unexpected behaviors and bugs
                (Waseem et al., 2023).
              </li>
              <li>
                <FontAwesomeIcon icon={faLightbulb} className="icon" /> In
                addition to performance, security remains a central challenge
                for WebAssembly. As highlighted in the paper by Waseem et al.
                (2023), the most common issues in Wasm-based applications relate
                to error handling, security vulnerabilities, and memory
                management. These problems affect the reliability and stability
                of WebAssembly in real-world applications.
              </li>
              <li>
                <FontAwesomeIcon icon={faLightbulb} className="icon" />{" "}
                Interoperability between languages and execution environments.
              </li>
              <li>
                <FontAwesomeIcon icon={faLightbulb} className="icon" />{" "}
                Resource-constrained environments such as mobile and IoT
                devices.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Solutions */}
      <div className="dropdown">
        <button
          onClick={() => setShowSolutions(!showSolutions)}
          className="dropdown-btn"
        >
          <FontAwesomeIcon icon={faLightbulb} className="icon" /> Solutions
          Proposed
          <span className="arrow">
            <FontAwesomeIcon
              icon={showSolutions ? faChevronUp : faChevronDown}
            />
          </span>
        </button>
        {showSolutions && (
          <div className="dropdown-content">
            <ul>
              <li>
                <FontAwesomeIcon icon={faCogs} className="icon" /> The solutions
                proposed in the surveyed papers demonstrate how WebAssembly can
                be leveraged to address some of these challenges. In the context
                of serverless computing, Kjorveziroski et al. (2022) showed that
                using WebAssembly as an alternative to containers can
                significantly reduce startup latency, making it more suitable
                for time-sensitive applications at the edge. Similarly, Mendki
                (2020) emphasized the role of WebAssembly in serverless edge
                computing, although performance improvements are still necessary
                for compute-intensive tasks.
              </li>
              <li>
                <FontAwesomeIcon icon={faCogs} className="icon" /> Another key
                solution discussed is the Wasimoff framework by Semjonov et al.
                (2024), which presents an innovative approach to distributed
                computation offloading using WebAssembly in the browser. By
                allowing device owners to securely share their CPU resources via
                a browser, Wasimoff reduces the need for dedicated software
                installations, simplifying distributed computation.
              </li>
              <li>
                <FontAwesomeIcon icon={faCogs} className="icon" /> Security
                models leveraging WebAssembly's sandboxing capabilities.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Methodologies */}
      <div className="dropdown">
        <button
          onClick={() => setShowMethodologies(!showMethodologies)}
          className="dropdown-btn"
        >
          <FontAwesomeIcon icon={faSearch} className="icon" /> Methodologies
          <span className="arrow">
            <FontAwesomeIcon
              icon={showMethodologies ? faChevronUp : faChevronDown}
            />
          </span>
        </button>
        {showMethodologies && (
          <div className="dropdown-content">
            <ul>
              <li>
                <FontAwesomeIcon icon={faSearch} className="icon" /> In terms of
                methodology, several papers evaluated WebAssembly’s performance
                through rigorous benchmark testing. Herrera et al. (2018)
                conducted an in-depth comparison of WebAssembly and JavaScript,
                showing that while WebAssembly often outperforms JavaScript for
                larger and more complex calculations, it still lags behind
                native C code in
              </li>
              <li>
                <FontAwesomeIcon icon={faSearch} className="icon" /> Simulation
                of real-world applications for efficiency measurements.
              </li>
              <li>
                <FontAwesomeIcon icon={faSearch} className="icon" /> Security
                vulnerability analysis of WebAssembly’s sandboxing mechanisms.
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Key Findings */}
      <div className="dropdown">
        <button
          onClick={() => setShowFindings(!showFindings)}
          className="dropdown-btn"
        >
          <FontAwesomeIcon icon={faChartBar} className="icon" /> Key Findings
          <span className="arrow">
            <FontAwesomeIcon
              icon={showFindings ? faChevronUp : faChevronDown}
            />
          </span>
        </button>
        {showFindings && (
          <div className="dropdown-content">
            <ul>
              <li>
                <FontAwesomeIcon icon={faChartBar} className="icon" /> Across
                the papers, a consensus has emerged regarding WebAssembly's
                potential for the future of web and edge computing. Semjonov et
                al. (2024) found that WebAssembly provides a practical solution
                for distributed computation in volunteer computing networks,
                while Mendki (2020) identified the need for improved execution
                optimization on ARM architectures. The findings suggest that
                while WebAssembly is well-suited for serverless and distributed
                computing, there is still room for growth, especially in terms
                of performance on low-power devices and further integration with
                existing web technologies.
              </li>
              <li>
                <FontAwesomeIcon icon={faChartBar} className="icon" /> Moreover,
                research by Yan et al. (2021) demonstrated that WebAssembly’s
                memory usage is higher compared to JavaScript due to the linear
                memory model employed by Wasm. This highlights an important
                trade-off between performance and memory efficiency, a challenge
                that will need to be addressed as WebAssembly becomes more
                widely used.
              </li>
              <li>
                <FontAwesomeIcon icon={faChartBar} className="icon" /> Future
                research should focus on improving WebAssembly’s performance in
                resource-constrained environments like IoT and mobile platforms.
                Additionally, better tools for profiling, debugging, and
                optimizing WebAssembly applications are necessary to make Wasm
                more developer-friendly. Advancements like the WebAssembly
                System Interface (WASI), discussed in papers like Kjorveziroski
                et al. (2022), are already paving the way for WebAssembly’s
                broader use beyond the browser, but much work remains to ensure
                its full potential is realized.
              </li>
              <li>
                <FontAwesomeIcon icon={faChartBar} className="icon" /> Broader
                adoption of WebAssembly is expected in non-browser environments
                like cloud and edge computing.
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Content;
