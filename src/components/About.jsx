import { aboutPillars } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';
import AnimatedText from './AnimatedText.jsx';

function About() {
  return (
    <SectionReveal id="about" className="section about-section">
      <div className="container about-layout">
        <div className="about-visual">
          <div className="lab-card lab-card-main">
            <span>R&D LAB</span>
            <strong>Edge Intelligence</strong>
          </div>
          <div className="lab-card lab-card-small">
            <span>Industrial Control</span>
          </div>
          <div className="lab-grid" />
        </div>
        <div>
          <SectionHeader align="left" eyebrow="About Aolian" title="关于澳联科技" />
          <div className="about-copy">
            <AnimatedText text="澳联科技聚焦工业智能化、边缘计算、智能装备、船舶海工与工业控制系统，围绕工业现场的数据采集、智能分析、设备控制和远程运维需求，提供软硬件一体化产品与解决方案。" />
            <AnimatedText text="公司坚持以工程落地为导向，融合软硬件开发、工业控制、智能装备和边缘智能能力，帮助客户提升设备智能化水平、运维效率和现场响应能力。" />
          </div>
          <div className="about-pillars">
            {aboutPillars.map((pillar) => (
              <article key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default About;
