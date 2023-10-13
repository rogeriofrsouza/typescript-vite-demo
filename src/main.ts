import './style.css';
import { setupCounter } from './counter.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p>A simple TypeScript project, using Vite, GitHub Actions and GitHub Pages.</p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
