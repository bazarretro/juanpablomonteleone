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

  // Botón fijo de WhatsApp: aparece al pasar el primer bloque y se oculta ante el cierre
  var fijo = document.querySelector('[data-wa-fijo]');
  if (fijo && 'IntersectionObserver' in window) {
    var visibles = 0, vigilados = document.querySelectorAll('.hero-acciones, .cta-final');
    var ioFijo = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) { visibles += e.isIntersecting ? 1 : -1; });
      visibles = Math.max(0, visibles);
      fijo.classList.toggle('visible', visibles === 0 && window.scrollY > 200);
    });
    vigilados.forEach(function (el) { ioFijo.observe(el); });
    window.addEventListener('scroll', function () {
      fijo.classList.toggle('visible', visibles === 0 && window.scrollY > 200);
    }, { passive: true });
  }

  // Selector de situación (accidentes): arma el mensaje de WhatsApp
  var sit = document.getElementById('situacion');
  if (sit) {
    var QUE = { choque: 'tuve un choque.', moto: 'iba en moto o bici y tuve un accidente.', atropello: 'me atropellaron.', sinseguro: 'tuve un choque y el otro no tenía seguro.', otra: 'tuve un accidente de tránsito.' };
    var HER = { si: 'Hubo heridos.', no: 'No hubo heridos.', nose: 'Todavía no sé si hay lesiones.' };
    var CUA = { hoy: 'Fue hoy.', semana: 'Fue esta semana.', mes: 'Fue este mes.', mas: 'Fue hace más de un mes.' };
    var enlaces = document.querySelectorAll('[data-wa-acc]');
    var base = 'Hola Juan Pablo, tuve un accidente de tránsito. Quiero consultar por el reclamo.';
    var msg = document.getElementById('sit-msg'), borrar = document.getElementById('sit-borrar');
    var previo = {};
    var armar = function () {
      var v = function (n) { var c = sit.querySelector('input[name="' + n + '"]:checked'); return c ? c.value : null; };
      var q = v('que'), h = v('her'), c = v('cua');
      var texto = base;
      if (q || h || c) {
        texto = 'Hola Juan Pablo, ' + (q ? QUE[q] : 'tuve un accidente de tránsito.') + (h ? ' ' + HER[h] : '') + (c ? ' ' + CUA[c] : '') + ' Quiero consultar por el reclamo.';
      }
      var url = 'https://wa.me/5492212011739?text=' + encodeURIComponent(texto);
      enlaces.forEach(function (a) { a.href = url; });
      msg.hidden = borrar.hidden = !(q || h || c);
      msg.textContent = 'Tu mensaje: ' + texto;
    };
    sit.addEventListener('click', function (e) {
      var i = e.target;
      if (!i || i.type !== 'radio') return;
      if (previo[i.name] === i.value) { i.checked = false; previo[i.name] = null; }
      else { previo[i.name] = i.value; }
      armar();
    });
    borrar.addEventListener('click', function () {
      sit.querySelectorAll('input:checked').forEach(function (i) { i.checked = false; });
      previo = {}; armar();
    });
  }
})();
