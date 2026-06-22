function DeviceMockup({ compact = false }) {
  return (
    <div className={'device-shell ' + (compact ? 'device-shell--compact' : '')} aria-label="澳联边缘智能终端设备示意图">
      <div className="device-ambient" />
      <div className="device-body">
        <div className="device-topline" />
        <div className="device-face">
          <div>
            <span className="device-brand">AOLIAN EDGE</span>
            <h3>Edge AI Terminal</h3>
          </div>
          <div className="status-stack" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="device-grid">
          {Array.from({ length: 28 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="device-ports">
          <span className="port port-wide" />
          <span className="port" />
          <span className="port" />
          <span className="port port-green" />
          <span className="port port-wide" />
        </div>
        <div className="device-ribs">
          {Array.from({ length: 8 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>
      <div className="device-base" />
    </div>
  );
}

export default DeviceMockup;
