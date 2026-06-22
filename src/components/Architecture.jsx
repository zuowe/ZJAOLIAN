import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';

const edgeValues = ['降低现场响应延迟', '减少带宽压力', '本地智能分析', '数据安全可控', '断网场景仍可运行', '异常快速响应'];

function Architecture() {
  return (
    <SectionReveal className="section architecture-section">
      <div className="container">
        <SectionHeader
          eyebrow="Cloud · Edge · Device"
          title="云边端协同架构"
          text="边缘终端位于现场设备和云平台之间，把实时性、安全性和管理效率同时拉近。"
        />

        <div className="architecture-map" aria-label="云边端协同架构图">
          <div className="arch-column">
            <span className="arch-label">工业现场</span>
            <article>传感器</article>
            <article>PLC / 控制系统</article>
            <article>工业设备</article>
          </div>

          <div className="arch-connector">
            <span />
            <span />
            <span />
          </div>

          <div className="arch-edge">
            <span className="arch-label">边缘计算核心</span>
            <div className="edge-core">
              <small>AUSTRALIAN LINK TECH</small>
              <strong>澳联边缘智能终端</strong>
              <p>采集 · 协议 · 计算 · AI · 告警 · 协同</p>
            </div>
          </div>

          <div className="arch-connector arch-connector--right">
            <span />
            <span />
            <span />
          </div>

          <div className="arch-column arch-column--right">
            <span className="arch-label">应用与平台</span>
            <article>本地应用 / AI 推理</article>
            <article>数据处理 / 告警联动</article>
            <article>云平台 / 运维平台</article>
          </div>
        </div>

        <div className="edge-value-grid">
          {edgeValues.map((value) => (
            <span key={value}>{value}</span>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Architecture;
