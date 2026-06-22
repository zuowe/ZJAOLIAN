import { trustStats } from '../content.js';
import SectionReveal from './SectionReveal.jsx';

function TrustStats() {
  return (
    <SectionReveal className="section trust-section">
      <div className="container">
        <div className="trust-intro">
          <div className="section-kinetic-mask" aria-hidden="true">
            <div className="section-kinetic-title">Company Credibility</div>
          </div>
          <span className="eyebrow">Company Credibility</span>
          <h2>从工业现场出发的科技型企业</h2>
          <p>
            澳联科技围绕工业控制、智能装备、船舶海工、港口设备与电气工程等场景，沉淀软硬件开发、系统集成与工程落地能力。
          </p>
        </div>
        <div className="trust-grid">
          {trustStats.map((item) => (
            <article className="trust-card" key={item.label}>
              <div className="trust-value">
                {item.value}
                <span>{item.suffix}</span>
              </div>
              <h3>{item.label}</h3>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default TrustStats;
