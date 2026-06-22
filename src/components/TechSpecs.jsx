import { techSpecs } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';

function TechSpecs() {
  return (
    <SectionReveal id="specs" className="section specs-section">
      <div className="container">
        <SectionHeader
          eyebrow="Technical Parameters"
          title="参数可按项目场景灵活配置"
          text="以下为官网占位参数，用于表达产品能力维度。后续可替换为真实型号、接口数量、算力规格和认证信息。"
        />
        <div className="spec-grid">
          {techSpecs.map((spec) => (
            <article className="spec-card" key={spec.name}>
              <div>
                <span>{spec.name}</span>
                <small>{spec.tag}</small>
              </div>
              <strong>{spec.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default TechSpecs;
