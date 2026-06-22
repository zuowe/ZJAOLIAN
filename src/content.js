export const navItems = [
  { label: '首页', href: '#hero' },
  { label: '产品亮点', href: '#features' },
  { label: '核心能力', href: '#capabilities' },
  { label: '应用场景', href: '#scenarios' },
  { label: '技术参数', href: '#specs' },
  { label: '解决方案', href: '#solutions' },
  { label: '关于澳联', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export const trustStats = [
  { value: '2018', suffix: '年', label: '成立于镇江', note: '面向工业智能化与工程落地持续深耕' },
  { value: '高新', suffix: '技术企业', label: '科技企业属性', note: '具备研发创新与技术成果转化能力' },
  { value: '科技型', suffix: '中小企业', label: '创新型组织', note: '聚焦软硬件一体化与智能装备方向' },
  { value: 'IP', suffix: '积累', label: '知识产权基础', note: '拥有专利与软件著作权等技术资产' },
  { value: '多场景', suffix: '适配', label: '工业现场经验', note: '覆盖工控、船舶海工、港口设备与智能装备' },
];

export const features = [
  {
    icon: 'compute',
    title: '高性能边缘计算',
    text: '在设备侧完成实时计算、数据清洗、规则判断与模型推理，减少对远端云平台的依赖。',
  },
  {
    icon: 'protocol',
    title: '多协议设备接入',
    text: '适配 PLC、传感器、控制器与工业设备，承载 Modbus、OPC UA、MQTT 等协议接入需求。',
  },
  {
    icon: 'latency',
    title: '低时延本地响应',
    text: '让告警、联动与控制策略靠近现场执行，支撑毫秒级响应与关键任务连续运行。',
  },
  {
    icon: 'rugged',
    title: '工业级稳定运行',
    text: '面向宽温、振动、电磁干扰与复杂供电环境，满足长期无人值守部署要求。',
  },
  {
    icon: 'secure',
    title: '本地数据安全处理',
    text: '敏感数据可在本地完成分析、脱敏与存储，降低数据外传风险，提升可控性。',
  },
  {
    icon: 'cloud',
    title: '云边端协同管理',
    text: '连接现场设备、本地应用与云端平台，实现远程运维、策略下发、版本升级与统一管理。',
  },
];

export const productHighlights = [
  { label: '工业接口', detail: 'RS485 / CAN / DI / DO / AI / AO 等可扩展接口' },
  { label: '多路通信', detail: '以太网、4G/5G、Wi-Fi 等多链路通信能力' },
  { label: '高效散热', detail: '无风扇金属机身与导热结构，适合连续运行' },
  { label: '模块扩展', detail: '按项目需求扩展采集、控制、通信与算力模块' },
  { label: '灵活安装', detail: '支持 DIN 导轨、机柜、壁挂等工业安装方式' },
  { label: '宽温运行', detail: '适配港口、船舶、厂区与能源站点等复杂环境' },
];

export const capabilities = [
  '数据采集',
  '协议转换',
  '边缘计算',
  'AI 推理',
  '本地告警',
  '设备接入',
  '远程运维',
  '云平台协同',
  '工控系统集成',
];

export const scenarioCards = [
  {
    title: '船舶与海洋工程',
    pain: '设备分散、环境复杂、网络不稳定，关键系统需要本地连续监测。',
    solution: '在船舶设备侧部署边缘终端，实现状态采集、异常识别、本地告警与云端同步。',
    tone: 'ocean',
    image: '/images/industrial-port-ship.png',
  },
  {
    title: '港口设备监测',
    pain: '岸桥、场桥、输送与装卸设备运行强度高，停机成本高。',
    solution: '接入控制系统与传感器数据，完成设备健康监测、预测性维护与远程运维。',
    tone: 'port',
    image: '/images/industrial-port-ship.png',
  },
  {
    title: '智慧工厂',
    pain: '产线设备协议复杂，数据孤岛明显，现场响应依赖人工判断。',
    solution: '统一采集多源数据，在边缘侧实现规则计算、质量追踪与生产可视化。',
    tone: 'factory',
    image: '',
  },
  {
    title: '智能装备控制',
    pain: '装备需要更强本地智能、远程诊断与可复制交付能力。',
    solution: '将边缘计算终端嵌入装备系统，形成数据采集、控制联动与云端管理闭环。',
    tone: 'machine',
    image: '',
  },
  {
    title: '电气工程设备运维',
    pain: '配电、能源与电气设备需要安全、稳定、可追溯的运维体系。',
    solution: '本地接入电气参数、运行状态与告警数据，支撑远程巡检和故障分析。',
    tone: 'power',
    image: '',
  },
  {
    title: '工业现场数据采集',
    pain: '现场设备品牌多、接口多、数据格式不统一，系统集成成本高。',
    solution: '以边缘终端作为统一数据入口，实现协议适配、数据清洗与标准化输出。',
    tone: 'data',
    image: '',
  },
  {
    title: '设备预测性维护',
    pain: '传统定期检修难以及时发现隐患，过度维护与突发故障并存。',
    solution: '在边缘侧持续分析振动、温度、电流等指标，提前识别异常趋势。',
    tone: 'predict',
    image: '',
  },
  {
    title: '园区与能源站点管理',
    pain: '站点分散、无人值守多，网络质量与现场安全要求高。',
    solution: '支持本地自治、断网运行和远程策略下发，提升多站点统一运维效率。',
    tone: 'energy',
    image: '',
  },
];

export const techSpecs = [
  { name: '处理器', value: '工业级多核 CPU / 可选高性能 SoC', tag: '占位' },
  { name: 'AI 算力', value: '可选 NPU / GPU 模块，支持边缘推理', tag: '占位' },
  { name: '存储容量', value: 'eMMC / SSD / TF 扩展，按项目配置', tag: '占位' },
  { name: '网络接口', value: '双千兆以太网 / 4G / 5G / Wi-Fi 可选', tag: '占位' },
  { name: '工业接口', value: 'RS485 / RS232 / CAN / DI / DO / AI / AO', tag: '占位' },
  { name: '支持协议', value: 'Modbus、OPC UA、MQTT、TCP/IP、私有协议适配', tag: '占位' },
  { name: '操作系统', value: 'Linux / RTOS / 容器化边缘运行环境', tag: '占位' },
  { name: '工作温度', value: '-20°C ~ 70°C，可按工业级扩展', tag: '占位' },
  { name: '安装方式', value: 'DIN 导轨 / 机柜 / 壁挂 / 设备内嵌', tag: '占位' },
  { name: '防护等级', value: '工业防护外壳，等级可按场景定制', tag: '占位' },
  { name: '供电方式', value: '宽压 DC 输入 / 工业电源适配', tag: '占位' },
  { name: '远程升级', value: '支持 OTA、配置下发、远程诊断与日志回传', tag: '占位' },
];

export const comparison = [
  {
    name: '传统工业网关',
    label: '连接为主',
    limits: ['协议接入能力较强，但本地计算能力有限', '复杂逻辑和 AI 分析常依赖云端或上位机', '面对多系统集成时扩展弹性不足'],
    advantages: ['澳联终端集连接、计算、规则引擎与本地应用于一体', '可在现场完成数据清洗、告警判断与策略联动'],
  },
  {
    name: '普通工控机',
    label: '通用计算',
    limits: ['体积、功耗与维护复杂度较高', '接口、安装与工业协议适配需要二次集成', '远程运维和云边协同能力通常需要额外开发'],
    advantages: ['澳联终端面向工业现场一体化设计', '更适合嵌入设备、机柜与无人值守场景'],
  },
  {
    name: '纯云端方案',
    label: '中心化平台',
    limits: ['强依赖网络，现场响应存在延迟', '高频数据上云带来带宽和安全压力', '断网时关键告警与控制能力受影响'],
    advantages: ['澳联终端让智能靠近现场', '断网可运行、异常快速响应、数据安全可控'],
  },
];

export const solutions = [
  {
    title: '工业边缘计算解决方案',
    pain: '现场设备多、数据频率高，云端处理延迟和带宽成本明显。',
    method: '通过边缘终端完成本地采集、预处理、规则计算与云端同步。',
    product: '澳联边缘智能终端 + 边缘应用框架',
    value: '降低延迟与带宽压力，提升现场智能化水平。',
  },
  {
    title: '船舶海工设备监测方案',
    pain: '海上网络不稳定，设备安全与连续运行要求高。',
    method: '在船舶关键设备侧部署边缘节点，实现本地告警和离线缓存。',
    product: '工业边缘终端 + 船舶设备数据接入模块',
    value: '提升设备可视化、告警及时性与远程诊断效率。',
  },
  {
    title: '港口设备智能运维方案',
    pain: '大型港机停机损失高，故障预警和运维闭环不足。',
    method: '接入港机运行数据，建立状态监测、异常识别和运维派单链路。',
    product: '边缘终端 + 运维平台 + 预测性维护模型',
    value: '减少突发停机，提升设备利用率。',
  },
  {
    title: '智能装备控制与数据采集方案',
    pain: '装备厂商需要标准化交付远程监测、控制和售后能力。',
    method: '把边缘终端作为装备智能化单元，统一采集、控制与云端连接。',
    product: '嵌入式边缘终端 + 装备控制接口',
    value: '增强装备产品竞争力，形成可复制的数字化能力。',
  },
  {
    title: '工业现场云边协同方案',
    pain: '云平台与现场系统之间缺少安全可靠的协同通道。',
    method: '建设边缘节点、云端管理和本地应用协同架构。',
    product: '边缘终端 + 云边协同管理服务',
    value: '实现统一运维、策略下发、版本升级与数据治理。',
  },
  {
    title: '电气工程设备远程运维方案',
    pain: '站点分散、巡检成本高，故障定位和数据追溯困难。',
    method: '采集电气设备运行数据，在本地完成异常判断并同步云端。',
    product: '边缘终端 + 电气参数采集与告警模块',
    value: '提升巡检效率、响应速度和设备运行安全性。',
  },
];

export const cases = [
  {
    industry: '港口设备',
    title: '某港口设备边缘监测项目',
    background: '大型装卸设备运行数据分散，设备状态依赖人工巡检。',
    pain: '告警滞后、故障定位慢、远程运维缺少统一入口。',
    solution: '部署边缘智能终端接入控制系统和传感器，实现实时监测、异常识别与云端运维。',
    result: ['响应时间缩短 60%', '关键数据本地闭环', '远程诊断效率提升'],
    tone: 'port',
    image: '/images/industrial-port-ship.png',
  },
  {
    industry: '船舶海工',
    title: '某船舶设备工业控制系统项目',
    background: '船舶关键设备需要在复杂环境下稳定运行并具备远程可视化能力。',
    pain: '网络不稳定，传统云端监控难以保障连续性。',
    solution: '以边缘终端承载本地数据处理、告警联动和离线缓存，云端用于管理和追溯。',
    result: ['断网持续运行', '异常本地告警', '运维数据可追溯'],
    tone: 'ocean',
    image: '/images/industrial-port-ship.png',
  },
  {
    industry: '智能装备',
    title: '某智能装备数据采集与远程运维项目',
    background: '装备制造商希望为设备增加远程诊断和售后服务能力。',
    pain: '设备型号多，现场协议复杂，售后响应依赖人工排查。',
    solution: '在装备内部集成边缘终端，标准化采集数据并接入远程运维平台。',
    result: ['交付能力标准化', '售后响应更快', '设备数据资产沉淀'],
    tone: 'machine',
    image: '',
  },
  {
    industry: '工业现场',
    title: '某工业现场边缘计算部署项目',
    background: '现场多条产线需要统一采集数据并对异常进行快速响应。',
    pain: '多源数据难统一，高频数据上云成本高，现场联动不及时。',
    solution: '边缘终端作为数据入口和计算节点，完成协议转换、规则计算与云边协同。',
    result: ['带宽压力降低', '本地策略联动', '数据格式统一'],
    tone: 'factory',
    image: '',
  },
];

export const reliabilityItems = [
  '本地数据处理',
  '数据加密',
  '权限管理',
  '断网可运行',
  '远程升级',
  '故障自恢复',
  '长时间稳定运行',
  '宽温环境适应',
  '复杂工业现场适配',
];

export const aboutPillars = [
  {
    title: '软硬件一体化研发',
    text: '覆盖终端硬件、嵌入式软件、工业协议、边缘应用与管理平台开发。',
  },
  {
    title: '面向工程落地',
    text: '围绕真实工业现场的数据采集、控制联动、环境适应和运维需求设计方案。',
  },
  {
    title: '工业控制与智能装备经验',
    text: '服务船舶海工、港口设备、智能装备、电气工程等对稳定性要求高的场景。',
  },
];
