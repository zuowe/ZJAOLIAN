import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function StackedCaseCard({ item, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.88', 'end 0.18'],
  });
  const targetScale = 1 - (total - 1 - index) * 0.028;
  const scale = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, targetScale]);
  const y = useTransform(scrollYProgress, [0, 1], [22, 0]);

  return (
    <div ref={ref} className="case-stack-slot">
      <motion.article
        className={'case-card case-card--stacked tone-' + item.tone}
        style={{
          scale,
          y,
          top: 96 + index * 18,
          transformOrigin: 'top center',
        }}
      >
        <div className="case-media">
          {item.image && <img src={item.image} alt={item.title} loading="lazy" />}
          <span>{item.industry}</span>
        </div>
        <div className="case-body">
          <div className="case-heading-row">
            <span className="case-number">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
          </div>
          <p>{item.background}</p>
          <p>
            <strong>客户痛点：</strong>
            {item.pain}
          </p>
          <p>
            <strong>解决方案：</strong>
            {item.solution}
          </p>
          <div className="case-results">
            {item.result.map((result) => (
              <span key={result}>{result}</span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default StackedCaseCard;
