import { capabilities } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';

function Capabilities() {
  return (
    <SectionReveal id="capabilities" className="section capabilities-section">
      <div className="container capability-layout">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Core Capabilities"
            title="从设备接入到云端管理，形成现场智能闭环"
            text="澳联边缘智能终端不是单一网关，而是连接工业设备、本地应用、AI 算法与云端平台的边缘计算底座。"
          />
          <div className="capability-copy">
            <p>
              它可以把现场数据在本地转化为可执行的判断：何时告警、何时联动、何时上云、何时离线缓存，让工业系统在网络不稳定、设备复杂和响应要求高的场景下依然可靠运转。
            </p>
          </div>
        </div>
        <div className="capability-matrix">
          {capabilities.map((item, index) => (
            <article className="matrix-cell" key={item} style={{ '--delay': String(index * 55) + 'ms' }}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item}</strong>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Capabilities;
