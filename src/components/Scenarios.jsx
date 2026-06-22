import { scenarioCards } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';

function Scenarios() {
  return (
    <SectionReveal id="scenarios" className="section scenario-section">
      <div className="container">
        <SectionHeader
          eyebrow="Application Scenarios"
          title="适合高可靠、强现场、重集成的工业场景"
          text="从船舶海工到港口设备，从智能装备到能源站点，边缘智能终端让现场具备持续感知与即时判断能力。"
        />
        <div className="scenario-grid">
          {scenarioCards.map((scenario) => (
            <article className={'scenario-card tone-' + scenario.tone} key={scenario.title}>
              <div className="scenario-image">
                {scenario.image ? (
                  <img src={scenario.image} alt={scenario.title + '应用场景'} loading="lazy" />
                ) : (
                  <span aria-hidden="true" />
                )}
              </div>
              <div className="scenario-content">
                <h3>{scenario.title}</h3>
                <p>
                  <strong>痛点：</strong>
                  {scenario.pain}
                </p>
                <p>
                  <strong>方案：</strong>
                  {scenario.solution}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Scenarios;
