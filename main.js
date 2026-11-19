(function () {
  var doc = document.documentElement;
  var reducir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Revelado al hacer scroll (solo si hay soporte y no se pidió reducir movimiento)
  if ('IntersectionObserver' in window && !reducir) {
    doc.classList.add('js');
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.rv, .atenea').forEach(function (el) { io.observe(el); });
    // Escalonado automático dentro de grillas
    document.querySelectorAll('[data-escalonar]').forEach(function (grupo) {
      Array.prototype.forEach.call(grupo.children, function (hijo, i) {
        hijo.classList.add('rv');
        hijo.style.setProperty('--d', (i * 0.09).toFixed(2) + 's');
        io.observe(hijo);
      });
    });
  } else {
    doc.classList.add('sin-anim');
  }

  // Cabecera con borde al bajar
  var cab = document.querySelector('.cabecera');
  if (cab) {
    var marcar = function () { cab.classList.toggle('con-sombra', window.scrollY > 12); };
    window.addEventListener('scroll', marcar, { passive: true });
    marcar();
  }

  // Menú en celular
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var abierto = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!abierto));
      nav.classList.toggle('abierto', !abierto);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { btn.setAttribute('aria-expanded', 'false'); nav.classList.remove('abierto'); }
    });
  }

  // Listas de pasos tildables
  document.querySelectorAll('[data-checklist]').forEach(function (lista) {
    var cajas = lista.querySelectorAll('input[type="checkbox"]');
    var cont = lista.querySelector('[data-contador]');
    var actualizar = function () {
      var n = 0; cajas.forEach(function (c) { if (c.checked) n++; });
      if (cont) cont.textContent = n + ' de ' + cajas.length + ' listos';
    };
    cajas.forEach(function (c) { c.addEventListener('change', actualizar); });
    actualizar();
  });
})();
