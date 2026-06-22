import { useEffect, useRef, useState } from 'react';

function Magnet({
  children,
  className = '',
  padding = 110,
  strength = 5,
  activeTransition = 'transform 0.28s ease-out',
  inactiveTransition = 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)',
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left - padding &&
        event.clientX <= rect.right + padding &&
        event.clientY >= rect.top - padding &&
        event.clientY <= rect.bottom + padding;

      if (!inside) {
        setActive(false);
        setOffset({ x: 0, y: 0 });
        return;
      }

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setActive(true);
      setOffset({
        x: (event.clientX - centerX) / strength,
        y: (event.clientY - centerY) / strength,
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={'magnet ' + className}
      style={{
        transform: 'translate3d(' + offset.x + 'px,' + offset.y + 'px,0)',
        transition: active ? activeTransition : inactiveTransition,
      }}
    >
      {children}
    </div>
  );
}

export default Magnet;
