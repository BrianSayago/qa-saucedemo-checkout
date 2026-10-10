# QA Sauce Demo: flujo de compra

![Playwright Tests](https://github.com/BrianSayago/qa-saucedemo-checkout/actions/workflows/playwright.yml/badge.svg)

Caso de QA de punta a punta sobre [Sauce Demo](https://www.saucedemo.com), un e-commerce público de demostración: contexto, estrategia, plan de pruebas, casos, automatización con Playwright (TypeScript) e informe de cierre.

**Resultado:** veredicto **GO**. 10 casos de prueba automatizados, 30 ejecuciones pasadas (`--repeat-each=3`) y ningún defecto S1/S2 abierto.

## Alcance

| Área | Qué se probó |
|---|---|
| Login | usuario válido, `locked_out_user`, credenciales inválidas |
| Catálogo y carrito | agregar 2 productos, ver ítems, quitar 1 |
| Checkout | flujo feliz hasta la confirmación y campos obligatorios vacíos |
| Ordenamiento | precios de menor a mayor |
| Responsive | login en viewport móvil 375x667 |

**Fuera de alcance:** performance, seguridad ofensiva, accesibilidad profunda, pagos reales, otros usuarios de la demo y otros navegadores.

## Casos de prueba

| CP | Descripción | Prioridad | Archivo |
|---|---|---|---|
| CP-01 | Login válido con standard_user | P1 | tests/login.spec.ts |
| CP-02 | locked_out_user ve error de usuario bloqueado | P1 | tests/login.spec.ts |
| CP-03 | Credenciales inválidas muestran error | P1 | tests/login.spec.ts |
| CP-04 | Agregar 2 productos, el contador marca 2 | P2 | tests/cart.spec.ts |
| CP-05 | El carrito muestra los ítems | P2 | tests/cart.spec.ts |
| CP-06 | Quitar 1 producto del carrito | P2 | tests/cart.spec.ts |
| CP-07 | Checkout feliz hasta "Thank you for your order!" | P1 | tests/checkout.spec.ts |
| CP-08 | Checkout con campos obligatorios vacíos | P1 | tests/checkout.spec.ts |
| CP-09 | Ordenar por precio de menor a mayor | P3 | tests/sorting.spec.ts |
| CP-10 | Login en viewport móvil 375x667 | P2 | tests/login.spec.ts |

## Documentación del caso

En [`qa/001-saucedemo-checkout/`](qa/001-saucedemo-checkout/):
`brief.md` (alcance y decisiones), `context.md`, `test-plan.md`, `test-cases.md` (con matriz de trazabilidad REQ → CP), `tasks.md` y `report.md` (informe de cierre).

## Cómo ejecutarlo
```bash
    npm install
    npx playwright install chromium
    npx playwright test
```

## Proceso

El caso se desarrolló en fases con aprobación humana en cada una: contexto, revisión de estrategia, plan y casos, automatización tarea por tarea, auditoría y cierre. Usé agentes de IA (coordinador, planificador, automatizador y revisor) sobre modelos locales como apoyo. Cada entregable lo revisé y corregí yo, y verifiqué las ejecuciones con `git diff` y con la suite completa.

## Limitaciones

- La demo es un sitio de terceros: puede cambiar sin aviso.
- Solo se ejecutó en Chrome desktop.
- Los selectores y los textos de error dependen de la versión actual de la demo.

## Autor

<Brian Sayago> · <https://www.linkedin.com/in/briansayago>