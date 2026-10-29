# Web de Juan Pablo Monteleone, abogado (borrador)

Sitio estático: HTML, CSS y JS simples, sin frameworks ni dependencias externas (las tipografías están dentro del sitio). Se publica solo en Cloudflare Pages cada vez que se sube un cambio.

Estética "Atenea": azul noche, bronce y mármol, casco griego como emblema y guarda griega como separador.

## Estructura

| Ruta | Contenido |
|---|---|
| `/` index.html | Home: áreas, mi forma de trabajar (Atenea), cómo trabajo, quién soy, preguntas |
| `/accidentes/` | Accidentes de tránsito |
| `/multas/` | Multas de tránsito |
| `/contratos/` | Contratos de locación (negociación entre las partes) |
| `/gestoria/` | Gestoría de trámites |
| 404.html | Página de error |
| styles.css | Todos los estilos (colores y tipografías al principio, en `:root`) |
| main.js | Menú del celular, animaciones al hacer scroll y listas que se tildan |
| _redirects | Manda las direcciones viejas (/siniestros/, /alquileres/, /sucesiones/, /cobro-de-deudas/) a las nuevas |
| sitemap.xml, robots.txt | Para Google |
| assets/foto-rect.webp | Foto de Juan Pablo (se usa en todas las páginas) |
| assets/logo/ | favicon.svg (emblema) y logo-horizontal.svg |
| assets/fonts/ | Cinzel (títulos), Alegreya Sans (texto) y Alegreya itálica (citas). Licencia OFL |

## Cómo cambiar cosas

- **Textos:** abrí el index.html de la página y buscá el texto. Encabezado, menú y pie se repiten en todas las páginas.
- **Teléfono o WhatsApp:** buscá `5492212011739` en todo el proyecto.
- **Matrícula:** buscá `T° 68 F° 260`.
- **Animaciones:** se apagan solas si el visitante tiene activado "reducir movimiento".

## Antes de publicar en serio

- Que Juan Pablo revise los textos legales.
- Si se compra un dominio: reemplazar `https://juanpablomonteleone.pages.dev` por el dominio nuevo en todas las páginas, sitemap.xml y robots.txt.
- Sacar la línea `<meta name="robots" content="noindex, nofollow">` de todas las páginas.
- Dar de alta el sitio en Google Search Console y mandar el sitemap.xml.
