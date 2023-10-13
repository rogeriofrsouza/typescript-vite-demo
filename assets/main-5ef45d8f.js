import"./style-82cf32f5.js";function c(e){let t=0;const n=i=>{t=i,e.innerHTML=`count is ${t}`};e.addEventListener("click",()=>n(t+1)),n(0)}document.querySelector("#app").innerHTML=`
  <div>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p>A simple TypeScript project, using Vite, GitHub Actions and GitHub Pages.</p>
  </div>
`;c(document.querySelector("#counter"));
