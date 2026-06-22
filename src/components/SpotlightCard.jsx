import { useRef } from 'react';
import './SpotlightCard.css';

function SpotlightCard({ children, className = '', spotlightColor = 'rgba(0, 96, 254, 0.24)' }) {
  const divRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', String(x) + 'px');
    divRef.current.style.setProperty('--mouse-y', String(y) + 'px');
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={'card-spotlight ' + className}>
      {children}
    </div>
  );
}

export default SpotlightCard;
