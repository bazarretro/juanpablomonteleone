# Web de Juan Pablo Monteleone: datos vigentes, decisiones y pendientes

Última actualización: 18/10/2026 (v5). Fuente única para no reabrir discusiones: si un dato cambia, se corrige acá primero.

## Datos confirmados (con fuente)
- Nombre: Juan Pablo Monteleone, abogado. Fuente: su LinkedIn e Instagram.
- Título: abogado, Universidad Nacional de La Plata. Fuente: LinkedIn.
- Práctica independiente desde junio de 2024 en siniestros, reclamos de terceros y accidentes de tránsito, La Plata y alrededores. Fuente: LinkedIn.
- Más de 7 años de práctica en estudios jurídicos de La Plata (dato conservador: LinkedIn muestra inicio en 2016 y 2017).
- Teléfono 221 201-1739, mail estudiomonteleonejp@gmail.com e Instagram @monteleone.abogado. Fuente: su tarjeta de Instagram.
- Atención online; contacto por WhatsApp o mensaje directo. Fuente: sus posteos de Instagram.
- Frase propia usada en la web: "Un buen asesoramiento empieza por escuchar con atención". Fuente: Instagram.

## Decisiones de diseño y por qué
- Paleta: negro #0C0F14 y dorado #C2902D (posteos), azul #223345 (logo). Es la marca que ya usa.
- Tipografía: Barlow Condensed (títulos, como la señalética vial y las patentes), Barlow (texto) y Newsreader en cursiva solo para su frase. Se dejó de usar la serif de lujo para salir del look genérico de estudio jurídico.
- Foto: recorte rectangular con bordes rectos (el arco se descartó). Va en chico junto al botón y en grande en "Cómo trabajamos juntos".
- Botón principal: armador de mensaje. La persona toca qué pasó, si hubo heridos y si avisó a su seguro; se abre WhatsApp con el mensaje ya escrito. Baja la fricción y le llega el caso con contexto.
- Línea punteada dorada como separador (calzada) y checklist que se tilda en "Qué hacer después de un accidente".
- La web habla a quien consulta, sin recorrido de carrera. Se sacó la línea de tiempo y los nombres de estudios anteriores.
- Una sola página, WhatsApp primero, con mensajes ya armados por situación.
- Sin promesas de resultado, sin reseñas ni casos hasta confirmar las reglas de publicidad del colegio.

## Buenas prácticas tomadas de la competencia (Posca, Velaz, Dikè, Ferrari)
- Situaciones concretas que la persona reconoce (moto o bici, peatón, vehículo sin seguro).
- Guía de qué hacer y qué datos juntar, separada según haya lesiones o solo daños.
- Teléfono y WhatsApp visibles desde el primer pantallazo.
- Información coherente en toda la página (zona, contacto), algo que Velaz no logra.
- Identidad real: nombre y foto de la persona, que casi ninguno muestra.
- Preguntas frecuentes, que ninguno de los cuatro tiene.

## Cosas de la competencia que NO se copian
- Superlativos sin respaldo ("número 1", "+40 años").
- "Solo cobramos si ganás", "podrías ser indemnizado" y "siempre pagan más": promesas de resultado.
- Beneficios que pueden leerse como incentivo (traslado gratis) y disponibilidad "24 hs".
- Texto de relleno con palabras clave de otras áreas.

## Pendientes (se resuelven con el cuestionario por Instagram)
1. De dónde le llegan los clientes y qué lo diferencia de verdad.
2. Primera consulta (gratis o paga, duración), honorarios, horarios. Hoy la web solo dice que lo hablan en la primera consulta.
3. Confirmar que toma casos de moto o bici, peatón y vehículo sin seguro (están en la web, marcados para confirmar).
4. Reglas de publicidad del Colegio de Abogados de La Plata.
5. Matrícula (colegio, tomo y folio), a agregar al pie. Velaz la muestra; sube la confianza.
6. Qué mail va, si el 221 201-1739 es su WhatsApp, zona de atención, dirección si atiende en persona.
7. Si hace solo reclamos extrajudiciales o también va a juicio.
8. Desde cuándo trabaja accidentes de tránsito (dato exacto).
9. Logo original en archivo y una foto de mejor calidad.
10. Dominio y hosting.

## Para ver con Chrome
- Fichas de Google de la competencia: reseñas, fotos, horarios y categorías.
- Posca: blog y páginas por situación, para ver qué posiciona en búsquedas de La Plata.
- Instagram de los competidores: cómo captan consultas.

## Paso 0: reglas de publicidad (v5)
Estado: SUPUESTO A VERIFICAR con el Colegio de Abogados de La Plata. No encontré el reglamento vigente en fuente oficial.
- Fuente secundaria (sentencia de 2005 publicada en casi.com.ar, que cita Ley 5177 art. 60 inc. 7, Normas de Ética del CAPBA art. 18 y Resolución 152/04): permite nombre, domicilio, títulos, horario y materia a la que se dedica. Prohíbe publicidad comercial o engañosa y frases como "atención rápida", "sin cargos", "a porcentaje" y "abogado especializado".
- No tratan expresamente: testimonios, casos previos, promesas de resultado, precios y matrícula. Hay que preguntarlo.
- Aplicado en la web: no hay "especializado", "rápido", "gratis" ni precios; no hay reseñas ni casos.

## Auditoría v4 y qué se hizo en v5
- A. Coherencia: teléfono, mail, Instagram y zona coinciden en todo el archivo (JSON-LD incluido). "Más de 7 años" es dato conservador (LinkedIn muestra 2016 y 2017).
- Error mío corregido: la respuesta sobre honorarios decía "lo hablamos antes de empezar", sin respaldo. Se sacó el ítem hasta que Juan Pablo confirme.
- B. Redundancias: se sacó "Casos que atiendo" (duplicaba las opciones del armador y no estaba confirmado), el ítem "¿Cómo empiezo?" (repetía el paso 1), "extrajudicial" repetido tres veces (queda una, en el hero), los canales de contacto repetidos y los años de práctica repetidos en la bio.
- E. Regla de consistencia: todo botón principal dice "Escribime por WhatsApp" y abre WhatsApp. El único armador de mensaje es el del hero. Hay 4 botones: encabezado, hero (celular), armador y bloque "Qué hacer", más el del contacto.
- F. Espaciado: un solo token (--band-y: 68 px en celular, 100 px en escritorio). No había huecos duplicados.
- G. Celular: sin scroll horizontal en 360, 390, 768, 900 y 1440. Fotos sin deformar. Error corregido: el botón del encabezado se partía en dos líneas a 900 px (69 px de alto).
- Con "reducir movimiento" y sin él, el estado final es visible.

## Pendientes críticos (no los tengo)
Honorarios y primera consulta, matrícula, dirección o si atiende en persona, qué pasa en la primera reunión, qué casos toma de verdad, si va a juicio, reglas del colegio, de dónde le llegan los clientes.
