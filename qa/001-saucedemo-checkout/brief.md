# Brief — 001-saucedemo-checkout

Producto: Sauce Demo — https://www.saucedemo.com
Carpeta del caso: qa/001-saucedemo-checkout
Objetivo: armar evidencia de QA (contexto, estrategia, plan, casos, automatización, bugs, informe de cierre) para un CV, sobre un e-commerce de demo público.

Alcance DENTRO:
- Login: usuario válido, locked_out_user, credenciales inválidas
- Catálogo: agregar 2 productos al carrito
- Carrito: ver ítems, quitar 1 producto
- Checkout: flujo feliz hasta confirmación, y checkout con campos obligatorios vacíos
- Un caso de ordenamiento de precios (si entra en el tope de 10 tareas)

Alcance FUERA:
- Performance, seguridad ofensiva, accesibilidad profunda, pagos reales, visual_user como suite completa

Decisiones ya tomadas:
- Niveles: UI/E2E. Sin API (esta app no expone una para este caso).
- Automatización: Playwright (TypeScript) en este repo.
- Entorno: producción de demo pública, Chrome desktop. Un único CP de viewport móvil (375x667) en el login, no toda la suite.
- Datos: usuarios oficiales de la página de login (standard_user, locked_out_user). Password el publicado en el propio demo. No guardar secretos inventados.
- Prioridad de riesgo: autenticación y checkout (P1). Catálogo/carrito P2. Ordenamiento P3 si hay cupo.
- Criterio de salida: todos los CP P1 ejecutados; GO solo si no hay S1/S2 abiertos.
- No corrijas la aplicación: los defectos se reportan en qa/001-saucedemo-checkout/bugs/.

## Estado del repo
- Playwright (TypeScript) ya está instalado en este repo. Comando de tests: npx playwright test. Tests en tests/. baseURL configurado.
- Ya existe tests/login.spec.ts con CP-01 (login exitoso) y pasa. No duplicar ni rehacer.

## Requisitos confirmados (el planner debe usarlos tal cual; los textos de error se confirman en la web)
REQ-01 Login válido con standard_user | CP-01 | P1
REQ-02 locked_out_user ve error de usuario bloqueado | CP-02 | P1
REQ-03 Credenciales inválidas muestran error | CP-03 | P1
REQ-04 Agregar 2 productos, el contador del carrito marca 2 | CP-04 | P2
REQ-05 El carrito muestra los ítems y permite quitar 1 | CP-05, CP-06 | P2
REQ-06 Checkout feliz hasta "Thank you for your order!" | CP-07 | P1
REQ-07 Checkout con campos obligatorios vacíos muestra error | CP-08 | P1
REQ-08 Ordenar por precio de menor a mayor | CP-09 | P3
REQ-09 Viewport móvil 375x667 en el login | CP-10 | P2

Tareas de automatización: máximo 10, una intención por test, el ID del CP en el nombre del test. No incluir casos fuera del alcance de este brief.

## Aclaraciones
- CP-01 ya está automatizado (tests/login.spec.ts): márcalo como Automatizado en test-cases.md. Las tareas de automatización cubren CP-02 a CP-10.
- Productos para CP-04 a CP-07: Sauce Labs Backpack y Sauce Labs Bike Light.
- Datos del checkout: nombre John, apellido Doe, código postal 12345.
- Otros usuarios (problem_user, error_user, performance_glitch_user) quedan fuera de alcance.
- Si no se encuentran defectos, el informe debe decirlo. No se inventan bugs.

