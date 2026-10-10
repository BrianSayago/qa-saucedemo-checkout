# Plan de pruebas — 001-saucedemo-checkout

## Alcance
- Dentro: 
  - Login: usuario válido, locked_out_user, credenciales inválidas
  - Catálogo: agregar 2 productos al carrito
  - Carrito: ver ítems, quitar 1 producto
  - Checkout: flujo feliz hasta confirmación, y checkout con campos obligatorios vacíos
  - Un caso de ordenamiento de precios por precio ascendente
  - Un caso de viewport móvil (375x667) solo en el login
- Fuera: 
  - Performance, seguridad ofensiva, accesibilidad profunda, pagos reales, visual_user como suite completa
  - Otros usuarios (problem_user, error_user, performance_glitch_user) y otros navegadores

## Estrategia
| Nivel          | Qué cubre | Herramienta | Automatizable |
|----------------|-----------|-------------|---------------|
| Unitaria       | No aplica |             |               |
| Integración    | No aplica |             |               |
| API            | No aplica (la app no expone una para este caso) |             |               |
| UI / E2E       | Pruebas de interfaz, navegación y flujo completo | Playwright (TypeScript) | Sí |
| Exploratoria   |           |             | No            |

Pruebas no funcionales (rendimiento, seguridad, accesibilidad): fuera de alcance.

## Técnicas aplicadas
- Partición de equivalencias en credenciales de login (REQ-01, REQ-02, REQ-03)
- Valores límite en cantidad de ítems del carrito de 2 a 1 (CP-04, CP-06; 0 ítems fuera de alcance; REQ-04, REQ-05)
- Pruebas basadas en riesgo en autenticación y checkout (REQ-01, REQ-02, REQ-03, REQ-06, REQ-07)

## Datos de prueba
- Usuarios oficiales de la página de login: standard_user, locked_out_user
- Password: el publicado en el propio demo
- Productos para CP-04 a CP-07: Sauce Labs Backpack y Sauce Labs Bike Light
- Datos del checkout: nombre John, apellido Doe, código postal 12345

## Entornos
- Ambiente de ejecución: Producción de la demo pública
- Navegador: Chrome desktop (otros navegadores fuera de alcance)
- Viewport para CP-10: 375x667 en el login

## Riesgos y prioridad
| Riesgo | Probabilidad | Impacto | Mitigación (CP) | Prioridad |
|--------|--------------|---------|-----------------|-----------|
| Falla en autenticación | Alta | Alta | CP-01, CP-02, CP-03 | Alta |
| Fallo en flujo de checkout | Alta | Alta | CP-07, CP-08 | Alta |
| Problemas en carrito o catálogo | Media | Media | CP-04, CP-05, CP-06 | Media |
| Fallo en ordenamiento de precios | Baja | Baja | CP-09 | Baja |
| Viewport móvil rompe el login | Baja | Media | CP-10 | Media |
| El sitio de terceros cambia o no está disponible | Media | Alta | Ninguna (riesgo aceptado; se reporta en el informe de cierre) | Media |

## Criterios de entrada
- Tests preparados y ejecutables 
- Acceso a la aplicación demo en producción
- Credenciales válidas disponibles

## Criterios de salida
- Todos los CP P1 ejecutados y sin S1 ni S2 abiertos.
- Suite de test estable, ejecutada en 3 pasadas

## Pruebas manuales
Ninguna. Todos los casos son automatizables (CP-10 en T9).