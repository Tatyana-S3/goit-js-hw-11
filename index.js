import{a as p,S as g,i as a}from"./assets/vendor-D8hBcPQM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="52781164-186021ddb033549fd762d563f";function b(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(h,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader-1"),L=new g(".gallery a",{captionsData:"alt",captionDelay:250,close:!0});function S(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:m,downloads:f})=>`
  <li class='gallery-item'>
  <a href='${s}'>
  <img src='${o}' alt='${e}' />
  </a>
  <div class='info'>
  <p class='info-item'><b>Likes:</b> ${t}</p>
  <p class='info-item'><b>Views:</b> ${n}</p>
  <p class='info-item'><b>Comments:</b> ${m}</p>
  <p class='info-item'><b>Downloads:</b> ${f}</p>
  </div>
  </li>
  `).join("");c.innerHTML=r,L.refresh()}function w(){c.innerHTML=""}function q(){l.classList.remove("loader-hidden")}function v(){l.classList.add("loader-hidden")}const u=document.querySelector(".form"),d=document.querySelector("input[name = 'search-text']");d.removeAttribute("required");u.addEventListener("submit",P);function P(i){i.preventDefault();const r=d.value.trim().toLowerCase();if(!r){a.warning({message:"Please enter a search term!",position:"topRight",theme:"dark",backgroundColor:"red"});return}w(),q(),setTimeout(()=>{b(r).then(o=>{if(!o.hits.length){a.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark",backgroundColor:"red",messageSize:"16"});return}S(o.hits)}).catch(o=>{a.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight",theme:"dark",backgroundColor:"red"})}).finally(()=>{v(),u.reset()})},0)}
//# sourceMappingURL=index.js.map
