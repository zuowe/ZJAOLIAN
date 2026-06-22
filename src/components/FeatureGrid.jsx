import { features } from '../content.js';
import IconGlyph from './IconGlyph.jsx';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';
import SpotlightCard from './SpotlightCard.jsx';

function FeatureGrid() {
  return (
    <SectionReveal id="features" className="section feature-section">
      <div className="container">
        <SectionHeader
          eyebrow="Product Highlights"
          title="把采集、计算、智能和运维压缩进一台工业终端"
          text="面向工业现场的真实约束设计：靠近设备、即时响应、安全可控、稳定运行。"
        />
        <div className="feature-grid">
          {features.map((feature) => (
            <SpotlightCard className="glass-card feature-card" spotlightColor="rgba(0, 96, 254, 0.3)" key={feature.title}>
              <span className="icon-wrap">
                <IconGlyph name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default FeatureGrid;
