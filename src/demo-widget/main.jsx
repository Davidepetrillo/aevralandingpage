import { createRoot } from 'react-dom/client';
import { HeroDemo } from './components/demo/HeroDemo';

const mountNode = document.getElementById('hero-demo-root');

if (mountNode) {
  createRoot(mountNode).render(<HeroDemo />);
}
