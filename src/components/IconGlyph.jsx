const paths = {
  compute: 'M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 4.2L7.8 9.6v4.8l4.2 2.4 4.2-2.4V9.6L12 7.2zm0 2.3a2.5 2.5 0 110 5 2.5 2.5 0 010-5z',
  protocol: 'M5 7h6v4H5V7zm8 0h6v4h-6V7zM5 13h6v4H5v-4zm8 0h6v4h-6v-4zM8 5V3h8v2h-2V4h-4v1H8zm3 14v2H7v-2h4zm6 0v2h-4v-2h4z',
  latency: 'M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v5.1l3.6 2.1-1 1.7-4.6-2.7V7h2z',
  rugged: 'M6 4h12l3 4v8l-3 4H6l-3-4V8l3-4zm1.2 3L6 8.6v6.8L7.2 17h9.6l1.2-1.6V8.6L16.8 7H7.2zM8 10h8v2H8v-2zm0 3h5v2H8v-2z',
  secure: 'M12 2l7 3v6c0 4.7-2.8 8.7-7 10-4.2-1.3-7-5.3-7-10V5l7-3zm0 5a3 3 0 00-3 3v1H8v6h8v-6h-1v-1a3 3 0 00-3-3zm0 2a1 1 0 011 1v1h-2v-1a1 1 0 011-1z',
  cloud: 'M8.5 18H7a5 5 0 01-.7-10A6.5 6.5 0 0118.8 10 4 4 0 0118 18h-2.2M10 15l2 2 2-2m-2 2V9',
};

function IconGlyph({ name = 'compute' }) {
  return (
    <svg className="icon-glyph" viewBox="0 0 24 24" aria-hidden="true">
      <path d={paths[name] || paths.compute} />
    </svg>
  );
}

export default IconGlyph;
