# Web de Juan Pablo Monteleone, abogado (borrador)

Sitio estático: HTML, CSS y JS simples, sin frameworks ni dependencias externas (las tipografías están dentro del sitio). Se publica solo en Cloudflare Pages cada vez que se sube un cambio a la rama `main`.

## Estructura

```
/                      index.html          Home: áreas, cómo trabajo, quién soy, preguntas
/sucesiones/           index.html          Sucesión y declaratoria de herederos
/alquileres/           index.html          Alquileres y juicio de desalojo
/siniestros/           index.html          Accidentes de tránsito (la página original, con un bloque sobre aseguradoras)
/cobro-de-deudas/      index.html          Cheques, pagarés y deudas
404.html                                   Página de error
styles.css                                 Todos los estilos (colores al principio)
main.js                                    Menú del celular, armador de mensaje de WhatsApp y listas que se tildan
sitemap.xml, robots.txt                    Para Google
_headers                                   Cache de tipografías e imágenes (Cloudflare)
assets/foto-rect.webp, foto-avatar.webp    Fotos de Juan Pablo
assets/logo/                               Logo en vector (SVG) y su ícono
assets/og/                                 Imágenes que se ven al compartir cada página por WhatsApp o redes
assets/fonts/                              Barlow y Barlow Condensed
docs/                                      Decisiones, pendientes, benchmark y notas del proyecto
```

Cada carpeta tiene su `index.html`, así las direcciones quedan limpias (`/sucesiones/` y no `/sucesiones.html`).

## Cómo cambiar cosas

**Textos.** Abrí el `index.html` de la página y buscá el texto. Cada sección empieza con `<section ... id="...">`. Para editar desde el navegador: en GitHub, abrí el archivo, tocá el lápiz, cambiá y guardá ("Commit changes"). A los minutos está publicado.

**Encabezado, menú y pie.** Se repiten en las 6 páginas. Si cambiás uno, cambialo en todas (buscar y reemplazar en todo el proyecto).

**Datos que faltan.** Están marcados en amarillo como `[COMPLETAR: ...]`. Buscá `COMPLETAR` en todo el proyecto, reemplazá el `<span class="todo">...</span>` entero por el texto final. La lista completa está en `docs/pendientes.md`.

**Teléfono o WhatsApp.** Buscá `5492212011739` en todo el proyecto (también está en `main.js`). Los mensajes precargados van codificados en el link (`%20` es un espacio); lo más fácil es armar el nuevo link en https://wa.me con el texto y pegarlo.

**Fotos.** Reemplazá los archivos de `assets/` manteniendo el nombre. Formato WebP, menos de 100 KB. `foto-rect.webp` es vertical (697 × 1024), `foto-avatar.webp` es cuadrada (192 × 192).

**Colores.** Al principio de `styles.css`, en `:root`. Regla de la marca: el cobre (`--gold`) se usa solo en botones y links de contacto.

**Logo.** `assets/logo/` tiene el escudo solo (`isotipo.svg`), las versiones con nombre para fondo oscuro y claro, las de una tinta y el ícono del navegador (`favicon.svg`). Son vectores: se pueden ampliar sin perder calidad y mandar a una imprenta.

**Agregar una página nueva.** Copiá la carpeta de una página parecida (por ejemplo `cobro-de-deudas/`), renombrala, cambiá título, descripción, `canonical`, `og:url`, el h1 y el contenido. Sumala al menú de todas las páginas y a `sitemap.xml`.

## Antes de publicar en serio

1. Completar todos los `[COMPLETAR: ...]` (ver `docs/pendientes.md`).
2. Que Juan Pablo revise los textos legales (los comentarios `VERIFICAR CON JUANO` en el HTML y la lista de `docs/pendientes.md`).
3. Mandar el borrador al Colegio de Abogados de La Plata para confirmar que la publicidad está bien (ver `docs/decisiones.md`).
4. Si se compra un dominio: reemplazar `https://juanpablomonteleone.pages.dev` por el dominio nuevo en todas las páginas, `sitemap.xml` y `robots.txt`.
5. Sacar la línea `<meta name="robots" content="noindex, nofollow">` de **todas** las páginas (incluida `404.html`). Hasta entonces Google no las muestra.
6. Dar de alta el sitio en Google Search Console y mandar el `sitemap.xml`.

## Publicación (Cloudflare Pages)

1. Cloudflare → Workers & Pages → el proyecto ya está conectado a este repositorio.
2. Build command: vacío. Output directory: `/`.
3. Cada cambio en `main` se publica solo. Cada cambio en otra rama genera una vista previa con su propio link (sirve para probar sin tocar la web principal).

## Para probar en la computadora

Las páginas usan rutas que empiezan con `/`, así que no se ven bien abriendo el archivo con doble clic. Desde la carpeta del proyecto: `python3 -m http.server 8000` y abrir http://localhost:8000.
