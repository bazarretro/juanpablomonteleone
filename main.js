/* Juan Pablo Monteleone · Abogado — comportamiento compartido.
   Si cambia el número de WhatsApp, cambialo acá Y en los links de cada página
   (buscá 5492212011739 en todo el sitio). */
(function () {
  var WA = '5492212011739';

  /* 1. Menú en celular */
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('menu');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  /* 2. Armador de mensaje de WhatsApp.
     <form data-composer data-saludo="Hola Juan Pablo," data-cierre="...">
       <fieldset data-default="texto si no elige nada"> opciones con data-msg="..."
     El mensaje = saludo + lo elegido en cada pregunta + cierre. */
  document.querySelectorAll('form[data-composer]').forEach(function (f) {
    var bubble = f.querySelector('.bubble');
    var send = f.querySelector('.js-send');
    var clearWrap = f.querySelector('.clear-wrap');
    var last = {};
    function armar() {
      var parts = [f.getAttribute('data-saludo') || 'Hola Juan Pablo,'];
      f.querySelectorAll('fieldset').forEach(function (fs) {
        var c = fs.querySelector('input:checked');
        var t = c ? c.getAttribute('data-msg') : fs.getAttribute('data-default');
        if (t) parts.push(t);
      });
      var cierre = f.getAttribute('data-cierre');
      if (cierre) parts.push(cierre);
      return parts.join(' ');
    }
    function upd() {
      var m = armar();
      if (clearWrap) clearWrap.hidden = !f.querySelector('input:checked');
      bubble.textContent = m;
      send.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(m);
      bubble.classList.remove('flash'); void bubble.offsetWidth; bubble.classList.add('flash');
    }
    f.addEventListener('submit', function (e) { e.preventDefault(); });
    f.addEventListener('change', upd);
    /* tocar de nuevo una opción ya elegida la desmarca */
    f.addEventListener('click', function (e) {
      var t = e.target;
      if (!t || t.type !== 'radio') return;
      if (last[t.name] === t) { t.checked = false; last[t.name] = null; upd(); }
      else last[t.name] = t;
    });
    var clear = f.querySelector('.clear');
    if (clear) clear.addEventListener('click', function () { f.reset(); last = {}; upd(); });
  });

  /* 3. Listas que se tildan, con contador */
  document.querySelectorAll('[data-checklist]').forEach(function (box) {
    var cs = box.querySelectorAll('.step input');
    var n = box.querySelector('.js-done');
    var bar = box.querySelector('.progress-fill');
    function cuenta() {
      var k = 0;
      cs.forEach(function (c) { if (c.checked) k++; });
      if (n) n.textContent = k;
      if (bar) bar.style.width = (k * 100 / cs.length) + '%';
    }
    cs.forEach(function (c) { c.addEventListener('change', cuenta); });
    cuenta();
  });
})();
