# Web de Juan Pablo Monteleone, abogado (borrador)

Sitio estático de una sola página: HTML, CSS y JS sin dependencias, salvo las fuentes de Google Fonts.

## Estructura
- `index.html`: toda la página (estilos y script adentro).
- `assets/`: fotos (`foto-rect.webp` va en "Cómo trabajamos juntos", `foto-avatar.webp` en el armador de mensaje).
- `docs/`: notas del proyecto (datos confirmados, decisiones, pendientes) y benchmark de la competencia.

## Dónde se cambia cada cosa
- Textos: en `index.html`, dentro de cada `<section>`. Los comentarios `<!-- CONFIRMAR ... -->` y `<!-- FALTA ... -->` marcan lo que falta confirmar con Juan Pablo.
- Colores: variables al principio del `<style>` (`--ink`, `--navy`, `--gold`).
- Teléfono de WhatsApp: se repite en los enlaces `wa.me/5492212011739` y en el script del armador de mensaje. Buscar `5492212011739`.
- Fotos: reemplazar los archivos de `assets/` manteniendo los nombres.

## Estado
Borrador sin publicar. Tiene `noindex` para que Google no lo indexe: sacar esa línea del `<head>` cuando se apruebe.
Pendientes críticos: honorarios y primera consulta, matrícula, dirección u horarios, qué casos toma, reglas de publicidad del colegio.

## Publicación (Cloudflare Pages)
1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git y elegir este repositorio.
2. Build command: vacío. Output directory: `/`.
3. Cada cambio en la rama `main` se publica solo.
4. Mientras sea borrador, proteger la vista previa con Cloudflare Access.
