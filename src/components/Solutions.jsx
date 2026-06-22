import { solutions } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';

function Solutions() {
  return (
    <SectionReveal id="solutions" className="section solutions-section">
      <div className="container">
        <SectionHeader
          eyebrow="Solutions"
          title="不只是硬件，而是可落地的工业智能解决方案"
          text="围绕行业痛点、设备接入、边缘应用和云端管理，澳联科技提供从终端到系统集成的一体化能力。"
        />
        <div className="solution-list">
          {solutions.map((solution, index) => (
            <article className="solution-card" key={solution.title}>
              <div className="solution-index">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <h3>{solution.title}</h3>
                <dl>
                  <div>
                    <dt>行业痛点</dt>
                    <dd>{solution.pain}</dd>
                  </div>
                  <div>
                    <dt>解决思路</dt>
                    <dd>{solution.method}</dd>
                  </div>
                  <div>
                    <dt>核心产品</dt>
                    <dd>{solution.product}</dd>
                  </div>
                  <div>
                    <dt>客户价值</dt>
                    <dd>{solution.value}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Solutions;
