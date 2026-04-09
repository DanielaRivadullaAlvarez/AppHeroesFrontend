AppHeroesFrontend

SPA de superhéroes hecha con React + TypeScript + Vite, conectada a un backend en Node.js (hosteado en Render).
Permite buscar superhéroes, ver detalles, y administrar un panel de administración para añadir o modificar héroes.

Cómo usar
Clonar el repositorio.
Copiar .env.template a .env y ajustar la variable VITE_API_URL si quieres apuntar a tu backend local o de producción.
Ejecutar npm install.
Ejecutar npm run dev para levantar la app en desarrollo.

Ver demo en Netlify: https://app-heroes-spa.netlify.app

Funcionalidades
Visualizar lista de héroes y sus detalles.
Buscar héroes por nombre.
Panel de administración para añadir, editar o eliminar héroes.
Lazy loading con Suspense para optimizar la carga de páginas.
Navegación con HashRouter para facilitar despliegue en hosting estático.

Testing
Todas las rutas y componentes principales tienen pruebas unitarias con Vitest y Testing Library.
Antes de cada build, se ejecutan los tests para asegurar que todo funciona correctamente.
Cobertura de tests comprobada y funcionalidad validada con mocks de backend.

Tecnologías
Frontend: React, TypeScript, Vite
Backend: Node.js, Express (hosteado en Render)
UI: Shadcn/ui, Lucide-react
Validación de datos: Zod
Testing: Vitest, React Testing Library
