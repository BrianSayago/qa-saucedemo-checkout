# Informe de Pruebas - Saucedemo Checkout

## Veredicto
GO (No hay defectos S1 ni S2 abiertos)

## Alcance probado
- Login: standard_user, locked_out_user, credenciales inválidas
- Agregar 2 productos al carrito
- Ver ítems y quitar 1
- Checkout feliz y checkout con campos obligatorios vacíos
- Ordenamiento por precio ascendente
- Caso de viewport móvil 375x667 en el login

## Fuera de alcance
- Performance
- Seguridad ofensiva
- Accesibilidad profunda
- Pagos reales
- Visual_user como suite completa
- Otros usuarios
- Otros navegadores

## Resultados
- 10 casos de prueba
- 10 automatizados
- 0 manuales
- 0 fallos conocidos
- 0 bloqueados
- npx playwright test --repeat-each=3 dio 30 passed

## Cobertura por requisito
REQ-01 a REQ-09 con cobertura completa

## Defectos abiertos
No se encontraron defectos

## Riesgos y huecos
- La demo es un sitio de terceros que puede cambiar sin aviso
- Solo se ejecutó en Chrome desktop
- Los selectores y textos de error dependen de la versión actual de la demo
- No se probaron otros usuarios ni otros navegadores

## Mejoras de testabilidad
La demo ya expone atributos data-test, no se sugieren cambios.

## Próximos pasos
Ampliar a otros usuarios y navegadores y agregar la ejecución en CI.