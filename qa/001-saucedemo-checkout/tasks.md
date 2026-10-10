# Tareas de automatización — 001-saucedemo-checkout

Criterio común de "Hecho cuando" (aplica a T1–T9): test escrito con el ID del CP en el nombre; pasa o queda como fallo conocido con BUG-NNN; suite estable en 3 pasadas; Estado y Test actualizados en test-cases.md; tarea marcada como hecha. CP-01 ya está automatizado y no se toca.

## T1 — Login con locked_out_user
- [x] Hecha
- CP: CP-02
- REQ: REQ-02
- Archivo: tests/login.spec.ts
- Hecho cuando: verifica que se muestra el error de usuario bloqueado y reemplaza "[por confirmar en la web]" en CP-02 por el texto real; criterio común.

## T2 — Login con credenciales inválidas
- [x] Hecha
- CP: CP-03
- REQ: REQ-03
- Archivo: tests/login.spec.ts
- Hecho cuando: usuario inexistente con cualquier contraseña muestra error; reemplaza "[por confirmar en la web]" en CP-03 por el texto real; criterio común.

## T3 — Agregar 2 productos y verificar contador
- [ ] Hecha
- CP: CP-04
- REQ: REQ-04
- Archivo: tests/cart.spec.ts
- Hecho cuando: con Backpack y Bike Light agregados, el contador del carrito muestra 2; criterio común.

## T4 — El carrito muestra los ítems
- [ ] Hecha
- CP: CP-05
- REQ: REQ-05
- Archivo: tests/cart.spec.ts
- Hecho cuando: el carrito muestra Backpack y Bike Light; criterio común.

## T5 — Quitar un producto del carrito
- [ ] Hecha
- CP: CP-06
- REQ: REQ-05
- Archivo: tests/cart.spec.ts
- Hecho cuando: tras quitar Bike Light, el carrito contiene solo Backpack y el contador marca 1; criterio común.

## T6 — Checkout feliz
- [ ] Hecha
- CP: CP-07
- REQ: REQ-06
- Archivo: tests/checkout.spec.ts
- Hecho cuando: con Backpack y Bike Light y los datos John / Doe / 12345, se llega a "Thank you for your order!"; criterio común.

## T7 — Checkout con campos obligatorios vacíos
- [ ] Hecha
- CP: CP-08
- REQ: REQ-07
- Archivo: tests/checkout.spec.ts
- Hecho cuando: con los tres campos vacíos se muestra un error; reemplaza "[por confirmar en la web]" en CP-08 por el texto real; criterio común.

## T8 — Ordenar por precio de menor a mayor
- [ ] Hecha
- CP: CP-09
- REQ: REQ-08
- Archivo: tests/sorting.spec.ts
- Hecho cuando: tras elegir "Price (low to high)", cada precio es menor o igual al siguiente; criterio común.

## T9 — Viewport móvil en el login
- [ ] Hecha
- CP: CP-10
- REQ: REQ-09
- Archivo: tests/login.spec.ts
- Hecho cuando: con viewport 375x667, usuario, contraseña y botón Login son visibles y no hay scroll horizontal; criterio común.