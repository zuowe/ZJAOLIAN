import Beams from './Beams.jsx';
import Magnet from './Magnet.jsx';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="opening-curtain" aria-hidden="true">
        <div className="opening-curtain__mark">
          <img src="/aolian-logo.png" alt="" />
          <small>INDUSTRIAL EDGE INTELLIGENCE</small>
        </div>
        <span className="opening-curtain__line" />
      </div>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-beams">
          <Beams
            beamWidth={1.35}
            beamHeight={7.5}
            beamNumber={16}
            lightColor="#0060fe"
            speed={1.65}
            noiseIntensity={1.35}
            scale={0.18}
            rotation={-7}
          />
        </div>
        <span className="mesh mesh-a" />
        <span className="mesh mesh-b" />
        <span className="mesh mesh-c" />
        <div className="circuit-lines" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker hero-anim hero-fade" style={{ animationDelay: '0.08s' }}>澳联边缘智能终端</span>
          <h1>
            <span className="hero-title-line">
              <span className="hero-title-text hero-anim hero-reveal" style={{ animationDelay: '0.2s' }}>让智能计算</span>
            </span>
            <span className="hero-title-line">
              <span className="hero-title-text hero-title-accent hero-anim hero-reveal" style={{ animationDelay: '0.36s' }}>发生在现场</span>
            </span>
          </h1>
          <p className="hero-subtitle hero-anim hero-fade" style={{ animationDelay: '0.55s' }}>
            一台终端，连接设备、算法与云端。
          </p>
          <div className="hero-actions hero-anim hero-fade" style={{ animationDelay: '0.7s' }}>
            <a className="button button-primary" href="#features">
              查看产品能力
            </a>
            <a className="button button-ghost" href="#contact">
              获取解决方案
            </a>
          </div>
          <div className="hero-metrics hero-anim hero-fade" style={{ animationDelay: '0.86s' }} aria-label="产品核心价值">
            <span>
              <strong>本地推理</strong>
            </span>
            <span>
              <strong>云边协同</strong>
            </span>
            <span>
              <strong>工业级部署</strong>
            </span>
          </div>
        </div>

        <div className="hero-visual">
          <Magnet className="hero-device-magnet" padding={130} strength={12}>
            <div className="hero-device-photo hero-product-zoom">
              <img src="/images/edge-terminal-studio.png" alt="澳联工业边缘智能终端产品渲染图" />
              <span className="product-photo-label">AOLIAN EDGE INTELLIGENCE</span>
            </div>
          </Magnet>
          <div className="floating-chip floating-chip-a">
            <small>Latency</small>
            <strong>&lt; 20ms</strong>
          </div>
          <div className="floating-chip floating-chip-b">
            <small>Protocol</small>
            <strong>Multi-Bus</strong>
          </div>
          <div className="floating-chip floating-chip-c">
            <small>Runtime</small>
            <strong>24/7</strong>
          </div>
        </div>
      </div>
      <div className="scroll-hint">向下探索</div>
    </section>
  );
}

export default Hero;
