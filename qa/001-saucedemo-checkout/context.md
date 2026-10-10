# Contexto QA — 001-saucedemo-checkout

## Objetivo
Armar evidencia de QA (contexto, estrategia, plan, casos, automatización, defectos e informe de cierre) para un portfolio, sobre el flujo de compra de Sauce Demo.

## Qué se prueba
Sauce Demo (https://www.saucedemo.com), e-commerce público de demostración: login, catálogo, carrito y checkout. Nivel UI/E2E, sin API.

## Fuente de los requisitos
qa/001-saucedemo-checkout/brief.md (alcance, decisiones y requisitos confirmados por el usuario).

## Stack
- Playwright con TypeScript, ya instalado en el repo.
- Chrome desktop. Un único caso con viewport móvil 375x667 en el login.
- baseURL: https://www.saucedemo.com

## Cómo ejecutar los tests
- Comando exacto: npx playwright test
- Cobertura: no aplica.
- Dónde viven los tests: tests/. Ya existe tests/login.spec.ts con CP-01 (automatizado, pasa).
- Convenciones: un test por intención, con el ID del CP en el nombre. Agrupación por funcionalidad: login.spec.ts, cart.spec.ts, checkout.spec.ts, sorting.spec.ts.

## Entornos y accesos
- Producción de la demo pública, Chrome desktop.
- Usuarios publicados en la página de login: standard_user y locked_out_user. La contraseña es la que publica el propio demo. No se guardan secretos propios.

## Dependencias externas y datos
- Acceso a internet y disponibilidad del sitio de terceros.
- Productos para CP-04 a CP-07: Sauce Labs Backpack y Sauce Labs Bike Light.
- Datos del checkout: nombre John, apellido Doe, código postal 12345.
- Cada test corre en un contexto limpio de Playwright, sin estado compartido.

## Restricciones y supuestos
- Es un sitio de terceros: puede cambiar sin aviso y no se puede reiniciar su estado.
- Fuera de alcance: performance, seguridad ofensiva, accesibilidad profunda, pagos reales, visual_user como suite completa, otros usuarios (problem_user, error_user, performance_glitch_user) y otros navegadores.
- Criterio de salida: todos los CP P1 ejecutados; GO solo si no hay defectos S1/S2 abiertos.
- Los defectos se reportan en qa/001-saucedemo-checkout/bugs/ y la aplicación no se modifica.

## Requisitos
| ID     | Descripción | Origen | ¿Testeable? | Notas |
|--------|-------------|--------|-------------|-------|
| REQ-01 | Login válido con standard_user | brief | Sí | CP-01, P1. Automatizado. Esperado: URL inventario y título "Products" |
| REQ-02 | locked_out_user ve error de usuario bloqueado | brief | Sí | CP-02, P1. Texto esperado por confirmar en la web |
| REQ-03 | Credenciales inválidas muestran error | brief | Sí | CP-03, P1. Texto esperado por confirmar en la web |
| REQ-04 | Agregar 2 productos, el contador del carrito marca 2 | brief | Sí | CP-04, P2 |
| REQ-05 | El carrito muestra los ítems y permite quitar 1 | brief | Sí | CP-05 y CP-06, P2 |
| REQ-06 | Checkout feliz hasta "Thank you for your order!" | brief | Sí | CP-07, P1 |
| REQ-07 | Checkout con campos obligatorios vacíos muestra error | brief | Sí | CP-08, P1. Texto por confirmar en la web |
| REQ-08 | Ordenar por precio de menor a mayor | brief | Sí | CP-09, P3. Opción "Price (low to high)", verificar precios ascendentes |
| REQ-09 | Viewport móvil 375x667 en el login | brief | Sí | CP-10, P2 |

## Preguntas abiertas
1. ¿Solo Chrome desktop? — Respuesta: sí, otros navegadores fuera de alcance.
2. ¿Performance y seguridad? — Respuesta: fuera de alcance.
3. ¿Qué validar en CP-09? — Respuesta: seleccionar "Price (low to high)" y verificar que los precios queden en orden ascendente. Un solo caso, P3.
4. ¿Prioridad del viewport móvil? — Respuesta: P2, un único caso en el login.
5. ¿Cómo agrupar los tests? — Respuesta: por funcionalidad, en los 4 archivos indicados.