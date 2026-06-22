import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARD_SELECTOR = [
  '.trust-card',
  '.feature-card',
  '.product-points article',
  '.matrix-cell',
  '.arch-column article',
  '.edge-value-grid span',
  '.scenario-card',
  '.spec-card',
  '.comparison-card',
  '.solution-card',
  '.reliability-grid span',
  '.about-pillars article',
  '.contact-form',
].join(',');

const IMAGE_SELECTOR = [
  '.product-stage-photo',
  '.scenario-image img',
  '.about-visual',
].join(',');

function MotionSystem() {
  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reducedMotion) {
      document.body.classList.remove('opening-active');
      return undefined;
    }

    document.documentElement.classList.add('motion-enabled');
    document.body.classList.add('opening-active');

    const context = gsap.context(() => {
      const curtain = document.querySelector('.opening-curtain');
      const titleLines = gsap.utils.toArray('.hero-title-text');
      const heroPhoto = document.querySelector('.hero-device-photo');
      const heroKicker = document.querySelector('.hero-kicker');
      const heroSubtitle = document.querySelector('.hero-subtitle');
      const heroActions = document.querySelector('.hero-actions');
      const heroMetrics = document.querySelector('.hero-metrics');
      const heroSupport = [heroKicker, heroSubtitle, heroActions, heroMetrics].filter(Boolean);

      gsap.set(titleLines, {
        yPercent: 118,
        scaleX: 0.68,
        skewY: 5,
        transformOrigin: 'left bottom',
      });
      gsap.set(heroSupport, {
        y: 30,
        opacity: 0,
      });
      gsap.set(heroPhoto, {
        clipPath: 'inset(11% 8% 13% 8% round 40px)',
        scale: 1.16,
        opacity: 0,
      });

      const opening = gsap.timeline({
        paused: true,
        defaults: { ease: 'power4.out' },
        onComplete: () => {
          document.body.classList.remove('opening-active');
          ScrollTrigger.refresh();
        },
      });

      if (curtain) {
        opening
          .fromTo(
            '.opening-curtain__mark',
            { opacity: 0, y: 22, scale: 0.92 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9 },
          )
          .fromTo(
            '.opening-curtain__line',
            { scaleX: 0 },
            { scaleX: 1, duration: 0.9, ease: 'expo.inOut' },
            '-=0.4',
          )
          .to('.opening-curtain__mark', { opacity: 0, y: -16, duration: 0.55 }, '+=0.18')
          .to(curtain, { yPercent: -102, duration: 1.15, ease: 'power4.inOut' }, '-=0.18')
          .set(curtain, { display: 'none' });
      }

      opening
        .to(
          titleLines,
          {
            yPercent: 0,
            scaleX: 1,
            skewY: 0,
            duration: 1.35,
            stagger: 0.14,
            ease: 'expo.out',
          },
          curtain ? '-=0.56' : 0,
        )
        .to(heroPhoto, {
          clipPath: 'inset(0% 0% 0% 0% round 38px)',
          scale: 1,
          opacity: 1,
          duration: 1.45,
          ease: 'power4.out',
        }, '-=1.08')
        .to(heroKicker, { y: 0, opacity: 1, duration: 0.8 }, '-=0.92')
        .to(heroSubtitle, { y: 0, opacity: 1, duration: 0.85 }, '-=0.7')
        .to(heroActions, { y: 0, opacity: 1, duration: 0.85 }, '-=0.65')
        .to(heroMetrics, { y: 0, opacity: 1, duration: 0.85 }, '-=0.62');

      // Start only after the full sequence has been assembled. This also keeps
      // React StrictMode's development mount cycle from leaving a partial timeline.
      opening.play(0);

      gsap.utils.toArray('.motion-section').forEach((section) => {
        const kinetic = section.querySelector('.section-kinetic-title');
        const eyebrow = section.querySelector('.eyebrow');
        const heading = section.querySelector('.section-header h2, .trust-intro h2, .contact-copy h2');
        const paragraph = section.querySelector('.section-header p, .trust-intro p, .contact-copy > p');
        const cards = section.querySelectorAll(CARD_SELECTOR);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 76%',
            once: true,
          },
          defaults: {
            ease: 'power4.out',
          },
        });

        if (kinetic) {
          timeline.fromTo(
            kinetic,
            {
              yPercent: 120,
              xPercent: -5,
              scaleX: 0.7,
              skewY: 5,
              opacity: 0,
              transformOrigin: 'left bottom',
            },
            {
              yPercent: 0,
              xPercent: 0,
              scaleX: 1,
              skewY: 0,
              opacity: 1,
              duration: 1.4,
              ease: 'expo.out',
            },
          );
        }

        if (eyebrow) {
          timeline.fromTo(eyebrow, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.72 }, '-=0.9');
        }

        if (heading) {
          timeline.fromTo(
            heading,
            { y: 70, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
            { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 1.15 },
            '-=0.68',
          );
        }

        if (paragraph) {
          timeline.fromTo(paragraph, { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, '-=0.72');
        }

        if (cards.length) {
          timeline.fromTo(
            cards,
            {
              y: 92,
              opacity: 0,
              scale: 0.92,
              rotationX: 8,
              transformOrigin: '50% 100%',
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotationX: 0,
              duration: 1.25,
              stagger: 0.1,
              ease: 'power4.out',
              clearProps: 'rotationX',
            },
            '-=0.5',
          );
        }
      });

      gsap.utils.toArray(IMAGE_SELECTOR).forEach((image) => {
        const trigger = image.parentElement || image;

        gsap.fromTo(
          image,
          {
            clipPath: 'inset(12% 0% 16% 0% round 28px)',
            scale: 1.13,
            opacity: 0.35,
          },
          {
            clipPath: 'inset(0% 0% 0% 0% round 0px)',
            scale: 1,
            opacity: 1,
            duration: 1.45,
            ease: 'power4.out',
            scrollTrigger: {
              trigger,
              start: 'top 82%',
              once: true,
            },
          },
        );

        gsap.fromTo(
          image,
          { yPercent: -3 },
          {
            yPercent: 3,
            ease: 'none',
            scrollTrigger: {
              trigger,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          },
        );
      });

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener('load', refresh, { once: true });
      window.setTimeout(refresh, 480);
    });

    return () => {
      document.body.classList.remove('opening-active');
      document.documentElement.classList.remove('motion-enabled');
      context.revert();
    };
  }, []);

  return null;
}

export default MotionSystem;
