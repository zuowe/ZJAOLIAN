function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="contact-section motion-section" id="contact">
      <div className="contact-bg" aria-hidden="true" />
      <div className="container contact-layout">
        <div className="contact-copy">
          <div className="section-kinetic-mask" aria-hidden="true">
            <div className="section-kinetic-title">Contact Us</div>
          </div>
          <span className="eyebrow">Contact Us</span>
          <h2>让智能计算部署到每一个工业现场</h2>
          <p>获取适合船舶海工、港口设备、智能装备与工业控制场景的边缘智能解决方案。</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:3525984266@qq.com">
              获取解决方案
            </a>
            <a className="button button-ghost" href="tel:+8619707339811">
              联系我们
            </a>
          </div>
          <div className="contact-info">
            <a href="tel:+8619707339811">电话：19707339811</a>
            <a href="mailto:3525984266@qq.com">邮箱：3525984266@qq.com</a>
            <span>地址：镇江高新区南徐大道298号</span>
          </div>
          <div className="qr-placeholder">
            <img src="/aolian-wechat-qr.png" alt="澳联科技微信二维码" />
            <div>
              <strong>微信咨询</strong>
              <p>扫码沟通项目需求</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>提交咨询</h3>
          <label>
            姓名
            <input type="text" name="name" placeholder="请输入姓名" />
          </label>
          <label>
            公司
            <input type="text" name="company" placeholder="请输入公司名称" />
          </label>
          <label>
            电话
            <input type="tel" name="phone" placeholder="请输入联系电话" />
          </label>
          <label>
            需求描述
            <textarea name="message" rows="5" placeholder="请简单描述设备、场景或项目需求" />
          </label>
          <button className="button button-primary" type="submit">
            预约方案沟通
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
