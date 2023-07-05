import './style.css';
import './code-smells/02-low-coupling';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1 class="title">Solid Principles and Clean Code</h1>
    <h3 class="subtitle">check console</h3>
  </div>
`;
