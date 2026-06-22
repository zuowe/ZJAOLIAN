import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function AnimatedCharacter({ character, progress, start, end }) {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);

  return (
    <motion.span className="animated-character" style={{ opacity }} aria-hidden="true">
      {character}
    </motion.span>
  );
}

function AnimatedText({ text, className = '' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.86', 'end 0.24'],
  });
  const characters = Array.from(text);

  return (
    <p ref={ref} className={'animated-text ' + className} aria-label={text}>
      {characters.map((character, index) => {
        const start = index / characters.length;
        const end = Math.min(1, start + 0.12);
        return (
          <AnimatedCharacter
            key={String(index) + character}
            character={character}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

export default AnimatedText;
