/* =============================================================
   ALESTY GLOBAL — scripts.js (v2)
   -------------------------------------------------------------
   ÍNDICE:
   [J01] ICONOS SVG (incluye snowflake para Carga reefer)
   [J02] MENÚ MÓVIL
   [J03] WHATSAPP FAB COMPACT AL HACER SCROLL
   [J04] REVEAL ANIMATIONS
   [J05] WHY-GRID: línea de progreso al entrar a la vista
   [J06] FORMULARIO → WHATSAPP
   [J07] BANDEJA DEL TELÉFONO (clic en icono → muestra número)
   [J08] AÑO DEL FOOTER
   ============================================================= */


/* =============================================================
   [J01] ICONOS SVG
   ============================================================= */
const icons = {

  /* HERO + cinta + servicios */
  truck:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v10H3zM14 9h4l3 3v4h-7zM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
  clock:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  map:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/></svg>',
  shield:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  user:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21a8 8 0 0 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>',

  /* NOSOTROS */
  handshake:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11l-2-2a2 2 0 1 0-3 3l5 5 5-5a2 2 0 1 0-3-3l-2 2z"/><path d="M2 14l4 4M22 14l-4 4"/></svg>',
  network:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2.2"/><circle cx="19" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M7 6.5l3.5 3.5M17 6.5l-3.5 3.5M7 17.5l3.5-3.5M17 17.5l-3.5-3.5"/></svg>',
  monitor:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M6 10l3 2 2-3 2 2 3-3"/></svg>',
  shieldcheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',
  peru:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>',

  /* SERVICIOS — iconos disponibles (la sección actual no los usa,
     se conservan por si se necesitan en otro lado) */
  warning:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
  warehouse:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21V8l9-5 9 5v13"/><path d="M7 21v-8h10v8M7 17h10"/></svg>',
  package:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12l8.73-5.04M12 22V12"/></svg>',
  forklift:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h8V5H9"/><path d="M13 9h4l2 8M19 17h3M3 17h2"/><circle cx="7" cy="19" r="2"/><circle cx="17" cy="19" r="2"/></svg>',
  route:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19c4 0 6-2 6-7 0-4 1-7 3-7"/></svg>',
  snowflake:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/><path d="M12 2l-2 2.5M12 2l2 2.5M12 22l-2-2.5M12 22l2-2.5M2 12l2.5-2M2 12l2.5 2M22 12l-2.5-2M22 12l-2.5 2"/></svg>',

  check:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',

  /* CONTACTO */
  pin:         '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-7 7-13a7 7 0 1 0-14 0c0 6 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  mail:        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  phone:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',

  /* REDES SOCIALES */
  whatsapp:  '<svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 3C9.4 3 4 8.2 4 14.7c0 2.3.7 4.5 2 6.4L4.7 29l8.1-2.1c1 .3 2.1.5 3.2.5 6.6 0 12-5.2 12-11.7S22.6 3 16 3zm0 21.9c-1 0-2-.2-2.9-.5l-.5-.2-4.8 1.2.8-4.7-.3-.5c-1.2-1.6-1.8-3.5-1.8-5.5 0-5.1 4.3-9.2 9.5-9.2s9.5 4.1 9.5 9.2-4.3 9.2-9.5 9.2zm5.3-6.9c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-1-2.2-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.1-1.3-.1-.2-.3-.2-.6-.4z"/></svg>',
  facebook:  '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07c0 5 3.66 9.16 8.44 9.93v-7.02H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.92 3.78-3.92 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.9h-2.33V22c4.78-.77 8.43-4.93 8.43-9.93z"/></svg>',
  tiktok:    '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.71a8.16 8.16 0 0 0 4.77 1.52V6.78a4.85 4.85 0 0 1-1.84-.09z"/></svg>',
};

/* Inyectar SVG en cada [data-icon] */
document.querySelectorAll('[data-icon]').forEach(el => {
  const name = el.dataset.icon;
  if (icons[name]) el.innerHTML = icons[name];
});


/* =============================================================
   [J02] MENÚ MÓVIL
   ============================================================= */
const menu = document.getElementById('menu');
const nav  = document.getElementById('nav');

menu?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.classList.toggle('active', isOpen);
  menu.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.classList.remove('active');
    menu.setAttribute('aria-expanded', 'false');
  });
});


/* =============================================================
   [J03] WHATSAPP FAB COMPACT AL HACER SCROLL
   ============================================================= */
const wa = document.getElementById('whatsapp');
window.addEventListener('scroll', () => {
  wa?.classList.toggle('compact', window.scrollY > 220);
}, { passive: true });


/* =============================================================
   [J04] REVEAL ANIMATIONS
   ============================================================= */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* =============================================================
   [J05] WHY-GRID: línea de progreso al entrar a la vista
   ============================================================= */
const whyGrid = document.querySelector('.why-grid');
if (whyGrid) {
  const whyObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        whyGrid.classList.add('in-view');
        whyObserver.unobserve(whyGrid);
      }
    });
  }, { threshold: 0.25 });
  whyObserver.observe(whyGrid);
}


/* =============================================================
   [J06] FORMULARIO → WHATSAPP
   ============================================================= */
const PHONE = '51951324134';   // ← número de WhatsApp de la empresa
const form  = document.getElementById('contactForm');
const note  = document.getElementById('formNote');

form?.addEventListener('submit', e => {
  e.preventDefault();

  const data = new FormData(form);
  const nombre   = (data.get('nombre')   || '').toString().trim();
  const telefono = (data.get('telefono') || '').toString().trim();
  const servicio = (data.get('servicio') || '').toString().trim();
  const mensaje  = (data.get('mensaje')  || '').toString().trim();

  if (!nombre || !telefono || !servicio) {
    note.textContent = 'Completa nombre, teléfono y servicio para continuar.';
    note.style.color = '#c0392b';
    return;
  }

  const lines = [
    '*Solicitud de cotización — ALESTY GLOBAL*',
    '',
    `Nombre completo → ${nombre}`,
    `Teléfono → ${telefono}`,
    `Servicio que requiere → ${servicio}`,
  ];
  if (mensaje) lines.push(`Mensaje → ${mensaje}`);
  lines.push('', 'Quedo atento(a) a su respuesta. ¡Gracias!');

  const text = lines.join('\n');
  const url  = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

  note.textContent = 'Mensaje generado correctamente. Se abrirá WhatsApp para enviarlo.';
  note.style.color = '';

  window.open(url, '_blank', 'noopener');
});


/* =============================================================
   [J07] BANDEJA DEL TELÉFONO
   Al hacer clic en el icono "Teléfono" se muestra el número
   debajo (no llama al teléfono). Botón "Copiar" copia al
   portapapeles. Botón "x" cierra la bandeja.
   ============================================================= */
const phoneLink    = document.getElementById('phoneLink');
const phoneDisplay = document.getElementById('phoneDisplay');
const phoneCopy    = document.getElementById('phoneCopy');
const phoneClose   = document.getElementById('phoneClose');

phoneLink?.addEventListener('click', e => {
  e.preventDefault();
  if (!phoneDisplay) return;
  phoneDisplay.hidden = !phoneDisplay.hidden;
});

phoneClose?.addEventListener('click', () => {
  if (phoneDisplay) phoneDisplay.hidden = true;
});

phoneCopy?.addEventListener('click', async () => {
  const number = phoneLink?.dataset.phone || '+51 951 324 134 ';
  try {
    await navigator.clipboard.writeText(number);
    phoneCopy.textContent = '¡Copiado!';
    phoneCopy.classList.add('copied');
    setTimeout(() => {
      phoneCopy.textContent = 'Copiar';
      phoneCopy.classList.remove('copied');
    }, 1800);
  } catch {
    /* Fallback: selección manual */
    const range = document.createRange();
    const sel = window.getSelection();
    const span = phoneDisplay.querySelector('.phone-number');
    if (span && sel) {
      range.selectNode(span);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
});


/* =============================================================
   [J08] AÑO DEL FOOTER
   ============================================================= */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
