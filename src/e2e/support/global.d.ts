import type { DetoxGlobals } from 'detox';

declare global {
  const device: DetoxGlobals['device'];
  const element: DetoxGlobals['element'];
  const expect: DetoxGlobals['expect'];
  const by: DetoxGlobals['by'];
}