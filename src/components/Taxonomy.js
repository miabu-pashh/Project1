import React, { useEffect } from "react";
import "../css/Taxonomy.css";
const Taxonomy = () => {
  useEffect(() => {
    // Wait for the DOM to be fully loaded
    const rows = document.querySelectorAll("table tbody tr");
    // Loop over each row and add the 'loaded' class with a delay for staggered animation
    rows.forEach((row, index) => {
      setTimeout(() => {
        row.classList.add("loaded"); // Add the 'loaded' class to each row
      }, index * 200); // Delay between each row animation (200ms)
    });
    // Cleanup if necessary
    return () => {
      rows.forEach((row) => {
        row.classList.remove("loaded");
      });
    };
  }, []);
  return (
    <section id="taxonomy">
      <h2>Paper Classification</h2>
      <p>
        A table summarizing the classifications of reviewed papers is shown
        below:
      </p>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Group</th>
              <th>Papers</th>
              <th>Key Papers</th>
              <th>Problem Domain</th>
              <th>Solution Approach</th>
              <th>Methodology</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Performance Optimization</td>
              <td>[1, 2, 3, 17, 19]</td>
              <td>
                Herrera et al. (2018), Yan et al. (2021), Jangda et al. (2019),
                van Hasselt et al. (2022)
              </td>
              <td>WebAssembly performance analysis and enhancement</td>
              <td>Measurement studies, empirical analysis</td>
              <td>Simulations, real-world testing</td>
            </tr>
            <tr>
              <td>Security in WebAssembly</td>
              <td>[4, 5, 6, 16]</td>
              <td>
                Lehmann et al. (2020), Dejaeghere et al. (2023), Xia et al.
                (2023), Harnes et al. (2024)
              </td>
              <td>Security vulnerabilities in WebAssembly</td>
              <td>
                Encryption, authentication protocols, ML-based anomaly detection
              </td>
              <td>
                Systematic reviews, security framework analysis, case studies
              </td>
            </tr>
            <tr>
              <td>Serverless and Edge Computing</td>
              <td>[7, 8, 9, 15, 20]</td>
              <td>
                Ray (2023), Kjorveziroski et al. (2023), Mendki (2020), Semjonov
                et al. (2024), Kjorveziroski et al. (2022)
              </td>
              <td>Serverless computing, edge computing</td>
              <td>Optimization theory, control theory</td>
              <td>Experimental implementations, simulations</td>
            </tr>
            <tr>
              <td>Tooling and Development</td>
              <td>[10, 11, 12, 14]</td>
              <td>
                Waseem et al. (2023), Wallentowitz et al. (2022), Zhang et al.
                (2024), Hyttinen (2023)
              </td>
              <td>Tooling challenges, system integration</td>
              <td>Reinforcement learning, system implementations</td>
              <td>Theoretical analysis, development and validation</td>
            </tr>
            <tr>
              <td>Emerging Tech Applications</td>
              <td>[13]</td>
              <td>Li et al. (2022)</td>
              <td>Trend analysis in emerging technologies</td>
              <td>Data mining, patent analysis</td>
              <td>Empirical analysis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Taxonomy;
