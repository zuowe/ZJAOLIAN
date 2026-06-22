import { productHighlights } from '../content.js';
import SectionHeader from './SectionHeader.jsx';
import SectionReveal from './SectionReveal.jsx';

function ProductShowcase() {
  return (
    <SectionReveal className="section product-section">
      <div className="container">
        <SectionHeader
          eyebrow="Hardware Design"
          title="面向工业部署的硬件形态"
          text="接口、散热、安装、通信与扩展能力都围绕复杂现场设计，既像一台硬件产品，也像一个可落地的边缘计算节点。"
        />
        <div className="product-showcase">
          <div className="product-stage">
            <img className="product-stage-photo" src="/images/edge-terminal-studio.png" alt="工业边缘计算终端设备外观展示" />
            <span className="tag-line tag-line-a">工业接口</span>
            <span className="tag-line tag-line-b">多路网络通信</span>
            <span className="tag-line tag-line-c">高效散热结构</span>
            <span className="tag-line tag-line-d">DIN 导轨 / 机柜安装</span>
          </div>
          <div className="product-points">
            {productHighlights.map((point) => (
              <article key={point.label}>
                <span>{point.label}</span>
                <p>{point.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default ProductShowcase;
