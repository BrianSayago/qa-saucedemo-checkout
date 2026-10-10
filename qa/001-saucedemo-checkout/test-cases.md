# Casos de prueba — 001-saucedemo-checkout

## Índice
| CP    | Título | REQ    | Tipo     | Prioridad | Estado    |
|-------|--------|--------|----------|-----------|-----------|
| CP-01 | Login válido con standard_user | REQ-01 | Positivo | P1        | Automatizado |
| CP-02 | locked_out_user ve error de usuario bloqueado | REQ-02 | Negativo | P1        | Automatizado |
| CP-03 | Credenciales inválidas muestran error | REQ-03 | Negativo | P1        | Automatizado |
| CP-04 | Agregar 2 productos, el contador del carrito marca 2 | REQ-04 | Positivo | P2        | Automatizado |
| CP-05 | El carrito muestra los ítems | REQ-05 | Positivo | P2        | Automatizado |
| CP-06 | Permite quitar 1 producto del carrito | REQ-05 | Positivo | P2        | Automatizado |
| CP-07 | Checkout feliz hasta "Thank you for your order!" | REQ-06 | Positivo | Alta        | Automatizado |
| CP-08 | Checkout con campos obligatorios vacíos muestra error | REQ-07 | Negativo | P1        | Automatizado |
| CP-09 | Ordenar por precio de menor a mayor | REQ-08 | Positivo | P3        | Pendiente |
| CP-10 | Viewport móvil 375x667 en el login | REQ-09 | Límite | Alta        | Pendiente |

## Detalle

### CP-01 — Login válido con standard_user

- Requisito: REQ-01
- Tipo / Prioridad: Positivo / P1
- Automatizable: Sí
- Precondiciones: Acceso a la aplicación de demostración
- Datos: usuario standard_user, password correcto
- Pasos:
  1. Ir a la página de login
  2. Ingresar usuario standard_user
  3. Ingresar contraseña correcta
  4. Hacer clic en el botón de login
- Resultado esperado: Redirección al inventario con título "Products"
- Estado: Automatizado
- Test: tests/login.spec.ts::CP-01 Login válido con standard_user

### CP-02 — locked_out_user ve error de usuario bloqueado
- Requisito: REQ-02
- Tipo / Prioridad: Negativo / P1
- Automatizable: Sí
- Precondiciones: Acceso a la aplicación de demostración
- Datos: usuario locked_out_user, password correcto
- Pasos:
  1. Ir a la página de login
  2. Ingresar usuario locked_out_user
  3. Ingresar contraseña correcta
  4. Hacer clic en el botón de login
- Resultado esperado: Mensaje de error indicando usuario bloqueado: "Epic sadface: Sorry, this user has been locked out."
- Estado: Automatizado
- Test: tests/login.spec.ts::CP-02 locked_out_user ve error de usuario bloqueado 

### CP-03 — Credenciales inválidas muestran error
- Requisito: REQ-03
- Tipo / Prioridad: Negativo / P1
- Automatizable: Sí
- Precondiciones: Acceso a la aplicación de demostración
- Datos: usuario usuario_inexistente, contraseña incorrecta
- Pasos:
  1. Ir a la página de login
  2. Ingresar usuario usuario_inexistente y una contraseña incorrecta
  3. Hacer clic en el botón de login
- Resultado esperado: Mensaje de error indicando credenciales inválidas: "Epic sadface: Username and password do not match any user in this service"
- Estado: Automatizado
- Test: tests/login.spec.ts::CP-03 Credenciales inválidas muestran error

### CP-04 — Agregar 2 productos, el contador del carrito marca 2
- Requisito: REQ-04
- Tipo / Prioridad: Positivo / P2
- Automatizable: Sí
- Precondiciones: Login exitoso con standard_user con standard_user, acceso al catálogo
- Datos: Productos Sauce Labs Backpack y Sauce Labs Bike Light
- Pasos:
  1. Login exitoso con standard_user con standard_user
  2. Ir al catálogo
  3. Agregar Sauce Labs Backpack al carrito
  4. Agregar Sauce Labs Bike Light al carrito
  5. Verificar contador del carrito
- Resultado esperado: El contador del carrito muestra "2"
- Estado: Automatizado
- Test: tests/cart.spec.ts::CP-04 Agregar 2 productos, el contador del carrito marca 2

### CP-05 — El carrito muestra los ítems
- Requisito: REQ-05
- Tipo / Prioridad: Positivo / P2
- Automatizable: Sí
- Precondiciones: Login exitoso con standard_user con standard_user, productos agregados al carrito
- Datos: Productos Sauce Labs Backpack y Sauce Labs Bike Light
- Pasos:
  1. Login exitoso con standard_user con standard_user
  2. Ir al catálogo
  3. Agregar Sauce Labs Backpack y Sauce Labs Bike Light al carrito
  4. Ir al carrito
  5. Verificar que se muestren los ítems agregados
- Resultado esperado: Los ítems agregados se muestran en el carrito
- Estado: Pendiente
- Test: 

### CP-06 — Permite quitar 1 producto del carrito
- Requisito: REQ-05
- Tipo / Prioridad: Límite / P2
- Automatizable: Sí
- Precondiciones: Login exitoso con standard_user con standard_user, productos agregados al carrito
- Datos: Productos Sauce Labs Backpack y Sauce Labs Bike Light
- Pasos:
  1. Login exitoso con standard_user con standard_user
  2. Ir al catálogo
  3. Agregar Sauce Labs Backpack al carrito
  4. Agregar Sauce Labs Bike Light al carrito
  5. Ir al carrito
  6. Quitar Sauce Labs Bike Light del carrito
  7. Verificar contador del carrito y contenido
- Resultado esperado: El carrito solo contiene Sauce Labs Backpack y el contador marca 1
- Estado: Automatizado
- Test: tests/cart.spec.ts::CP-06 Quitar un producto del carrito

### CP-07 — Checkout feliz hasta "Thank you for your order!"
- Requisito: REQ-06
- Tipo / Prioridad: Positivo / P1
- Automatizable: Sí
- Precondiciones: Login exitoso con standard_user con standard_user, productos en el carrito
- Datos: Productos Sauce Labs Backpack y Sauce Labs Bike Light; nombre John, apellido Doe, código postal 12345
- Pasos:
  1. Login exitoso con standard_user con standard_user
  2. Ir al catálogo
  3. Agregar Sauce Labs Backpack y Sauce Labs Bike Light al carrito
  4. Ir al carrito
  5. Iniciar checkout
  6. Completar datos de checkout
  7. Confirmar orden
- Resultado esperado: Mensaje "Thank you for your order!"
- Estado: Automatizado
- Test: tests/checkout.spec.ts::CP-07 Checkout feliz hasta "Thank you for your order!" 

### CP-08 — Checkout con campos obligatorios vacíos muestra error
- Requisito: REQ-07
- Tipo / Prioridad: Negativo / P1
- Automatizable: Sí
- Precondiciones: Login exitoso con standard_user con standard_user, productos en el carrito
- Datos: Productos Sauce Labs Backpack y Sauce Labs Bike Light; nombre, apellido y código postal vacíos
- Pasos:
  1. Login exitoso con standard_user con standard_user
  2. Ir al catálogo
  3. Agregar Sauce Labs Backpack y Sauce Labs Bike Light al carrito
  4. Ir al carrito
  5. Iniciar checkout
  6. Dejar los tres campos obligatorios vacíos
  7. Intentar completar el checkout
- Resultado esperado: Mensaje de error indicando campos obligatorios "Error: First Name is required"
- Estado: Automatizado
- Test: tests/checkout.spec.ts::CP-08 Checkout con campos obligatorios vacíos muestra error

### CP-09 — Ordenar por precio de menor a mayor
- Requisito: REQ-08
- Tipo / Prioridad: Positivo / P3
- Automatizable: Sí
- Precondiciones: Login exitoso con standard_user con standard_user, acceso al catálogo
- Datos: Usuario standard_user; catálogo completo, sin productos en el carrito
- Pasos:
  1. Login exitoso con standard_user
  2. Ir al catálogo
  3. Seleccionar opción "Price (low to high)" de ordenamiento
  4. Verificar que los precios estén en orden ascendente
- Resultado esperado: Los productos se muestran en orden ascendente por precio (cada precio es menor o igual al siguiente)
- Estado: Pendiente
- Test: 

### CP-10 — Viewport móvil 375x667 en el login
- Requisito: REQ-09
- Tipo / Prioridad: Límite / P2
- Automatizable: Sí
- Precondiciones: Acceso a la aplicación de demostración
- Datos: Tamaño de ventana 375x667
- Pasos:
  1. Abrir navegador con viewport 375x667
  2. Ir a la página de login
  3. Verificar que usuario, contraseña y botón Login sean visibles sin scroll horizontal
- Resultado esperado: Usuario, contraseña y botón Login visibles sin scroll horizontal
- Estado: Pendiente
- Test:

## Matriz de trazabilidad
| REQ    | CP                | Cobertura                    |
|--------|-------------------|------------------------------|
| REQ-01 | CP-01             | Completa                     |
| REQ-02 | CP-02             | Completa (verifica error de locked_out_user) |
| REQ-03 | CP-03             | Completa (verifica error de credenciales inválidas) |
| REQ-04 | CP-04             | Completa                     |
| REQ-05 | CP-05, CP-06      | Completa (CP-05 verifica muestra de ítems, CP-06 verifica quitar producto) |
| REQ-06 | CP-07             | Completa                     |
| REQ-07 | CP-08             | Completa (verifica error en campos vacíos) |
| REQ-08 | CP-09             | Completa (verifica ordenamiento por precio ascendente) |
| REQ-09 | CP-10             | Completa (verifica viewport 375x667 en login) |