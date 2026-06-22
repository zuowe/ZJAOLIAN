import { navItems } from '../content.js';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-layout">
        <div>
          <a className="brand footer-brand" href="#hero">
            <img className="brand-logo-img brand-logo-img--footer" src="/aolian-logo.png" alt="澳联科技 AoLian Technology" />
          </a>
          <p>边缘智能终端、工业控制系统、软硬件开发与智能装备解决方案。</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>产品导航</h4>
            <a href="#features">产品亮点</a>
            <a href="#capabilities">核心能力</a>
            <a href="#specs">技术参数</a>
          </div>
          <div>
            <h4>解决方案</h4>
            <a href="#solutions">工业边缘计算</a>
            <a href="#scenarios">应用场景</a>
            <a href="#contact">获取方案</a>
          </div>
          <div>
            <h4>关于我们</h4>
            {navItems.slice(6).map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div>
            <h4>联系方式</h4>
            <a href="tel:+8619707339811">电话：19707339811</a>
            <a href="mailto:3525984266@qq.com">邮箱：3525984266@qq.com</a>
            <span>镇江高新区南徐大道298号</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 镇江澳联科技开发有限公司. All rights reserved.</span>
        <span>Industrial Edge Intelligence Website</span>
      </div>
    </footer>
  );
}

export default Footer;
