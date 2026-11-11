# NextBase

Base reutilizable para proyectos con Next.js, TypeScript, Tailwind CSS y HeroUI.
El nombre del paquete es `next-base`; adapta el nombre visible y los metadatos
al crear una aplicación nueva.

## Requisitos

- Node.js 22 LTS
- npm

## Inicio rápido

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La página inicial está en
`src/app/page.tsx`.

El starter no requiere variables de entorno. Cuando el proyecto las necesite,
agrégalas a `.env.example` y crea `.env.local` para los valores locales. No
incluyas secretos en variables `NEXT_PUBLIC_`: esas variables se exponen al
navegador.

## Estructura

```text
src/
  app/          Rutas, layouts, estilos globales y metadata
  components/   Componentes reutilizables
```

Coloca los recursos estáticos en `public/`; Next.js los sirve desde la raíz de
la aplicación.

## Comandos

```bash
npm run dev          # desarrollo
npm run lint         # ESLint
npm run typecheck    # TypeScript
npm run format:check # comprobar formato
npm run format       # aplicar formato
npm run build        # compilación de producción
npm run start        # servir la compilación
```

La integración continua ejecuta lint, TypeScript, formato y build en los pull
requests y en los pushes a `master`. Agrega pruebas automatizadas junto con las
funcionalidades que las necesiten.
