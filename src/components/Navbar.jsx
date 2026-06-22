import { useEffect, useState } from 'react';
import { navItems } from '../content.js';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={'site-nav ' + (scrolled ? 'site-nav--scrolled' : '')}>
      <a className="brand" href="#hero" onClick={closeMenu} aria-label="澳联科技首页">
        <img className="brand-logo-img" src="/aolian-logo.png" alt="澳联科技 AoLian Technology" />
      </a>

      <button className="nav-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="打开导航">
        <span />
        <span />
      </button>

      <nav className={open ? 'is-open' : ''}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact" onClick={closeMenu}>
        预约演示
      </a>
    </header>
  );
}

export default Navbar;
