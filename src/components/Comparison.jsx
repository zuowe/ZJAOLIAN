import { comparison } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';

function Comparison() {
  return (
    <SectionReveal className="section comparison-section">
      <div className="container">
        <SectionHeader
          eyebrow="Why Edge AI Terminal"
          title="相比传统网关、工控机和纯云平台，更贴近现场智能化"
          text="它不是替代所有系统，而是把现场实时性、本地计算能力和远程管理能力整合到一个更适合工业落地的位置。"
        />
        <div className="comparison-grid">
          {comparison.map((item) => (
            <article className="comparison-card" key={item.name}>
              <span className="comparison-tag">{item.label}</span>
              <h3>{item.name}</h3>
              <div>
                <h4>传统限制</h4>
                <ul>
                  {item.limits.map((limit) => (
                    <li key={limit}>{limit}</li>
                  ))}
                </ul>
              </div>
              <div className="comparison-advantage">
                <h4>澳联边缘智能终端</h4>
                <ul>
                  {item.advantages.map((advantage) => (
                    <li key={advantage}>{advantage}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Comparison;
