import { reliabilityItems } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';

function Reliability() {
  return (
    <SectionReveal className="section reliability-section">
      <div className="container reliability-layout">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Safety & Reliability"
            title="工业级可靠性，是边缘智能真正可用的前提"
            text="复杂现场不是展示环境。澳联科技强调长期稳定运行、数据安全、本地自治和远程可维护，让系统在恶劣条件下仍然可信。"
          />
          <a className="button button-primary" href="#contact">
            咨询可靠性方案
          </a>
        </div>
        <div className="reliability-grid">
          {reliabilityItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Reliability;
