import { cases } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';
import StackedCaseCard from './StackedCaseCard.jsx';

function Cases() {
  return (
    <SectionReveal className="section cases-section">
      <div className="container">
        <SectionHeader
          eyebrow="Reference Cases"
          title="占位案例：用真实商业官网的方式预留项目展示位"
          text="以下案例为内容占位，后续可替换为真实客户项目、行业标签、实施照片和量化成果。"
        />
        <div className="case-stack">
          {cases.map((item, index) => (
            <StackedCaseCard key={item.title} item={item} index={index} total={cases.length} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Cases;
