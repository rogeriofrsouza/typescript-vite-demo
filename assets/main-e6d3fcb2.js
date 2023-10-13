import"./modulepreload-polyfill-3cfb730f.js";const c="/typescript-vite-demo/assets/typescript-f6ead1af.svg",i="/typescript-vite-demo/vite.svg";function r(e){let t=0;const o=s=>{t=s,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>o(t+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${i}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${c}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;r(document.querySelector("#counter"));
