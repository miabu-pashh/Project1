import React from "react";
import "../css/Taxonomy.css";

const Taxonomy = () => {
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
              <th>Paper Citation</th>
              <th>Problem Domain</th>
              <th>Solution Approach</th>
              <th>Web Architecture Type</th>
              <th>Evaluation Methodology</th>
              <th>Application Domain</th>
              <th>Security Mechanism</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hyttinen, Boris (2023)</td>
              <td>Interactive Web Development</td>
              <td>System Integration with WebAssembly</td>
              <td>Browser-Based Architecture</td>
              <td>Case Study using .NET</td>
              <td>Web Applications</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Herrera, David, et al. (2018)</td>
              <td>Numerical Program Performance</td>
              <td>Benchmark Analysis</td>
              <td>Client-Side and Server-Side</td>
              <td>Empirical Testing via Ostrich Benchmark</td>
              <td>Healthcare Monitoring</td>
              <td>Secure Communication Protocols</td>
            </tr>
            <tr>
              <td>Waseem, Muhammad, et al. (2023)</td>
              <td>Issues in WebAssembly Development</td>
              <td>Categorization of Development Issues</td>
              <td>Distributed Systems</td>
              <td>Empirical Analysis of GitHub Data</td>
              <td>Web Development</td>
              <td>Memory Safety, Error Handling</td>
            </tr>
            <tr>
              <td>Wallentowitz, Stefan, et al. (2022)</td>
              <td>Embedded Systems for IoT</td>
              <td>Portability and Runtime Optimization</td>
              <td>Decentralized Edge Computing</td>
              <td>Case Study on IoT Use Cases</td>
              <td>IoT and Embedded Systems</td>
              <td>Homomorphic Encryption</td>
            </tr>
            <tr>
              <td>Yan, Yutian, et al. (2021)</td>
              <td>WebAssembly Runtime Efficiency</td>
              <td>Performance Optimization Strategies</td>
              <td>Cross-Browser Evaluation</td>
              <td>Experimental Analysis Across Browsers</td>
              <td>Web Applications</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Semjonov, Anton, et al. (2024)</td>
              <td>Distributed Computation Offloading</td>
              <td>WebAssembly for Browser-Based Offloading</td>
              <td>Browser-Based and Cloud-Edge</td>
              <td>Benchmarking with Rust and TSP Problem</td>
              <td>Distributed Computing</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Kjorveziroski, Vojdan, et al. (2022)</td>
              <td>Cold Start Latency in Serverless Computing</td>
              <td>Multi-Runtime Environment Combining WebAssembly</td>
              <td>Cloud and Edge Platforms</td>
              <td>Empirical Testing on Serverless Functions</td>
              <td>Cloud-Edge Computing</td>
              <td>Federated Identity Management</td>
            </tr>
            <tr>
              <td>Mendki, Pankaj (2020)</td>
              <td>Serverless Edge Computing</td>
              <td>WebAssembly vs. Container Benchmarks</td>
              <td>Edge Computing</td>
              <td>Benchmark Testing on ARM Architecture</td>
              <td>Edge Computing</td>
              <td>N/A</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Taxonomy;
