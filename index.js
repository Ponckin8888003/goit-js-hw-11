import{a as p,S as y,i as l}from"./assets/vendor-DQvd0HNi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function g(o){return p.get("https://pixabay.com/api/",{params:{key:"55203225-7d950e3fb9c5360803d6af454",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}let u=document.querySelector(".gallery");function h(o){let t=[];for(let{webformatURL:i,largeImageURL:a,tags:e,likes:r,views:s,comments:m,downloads:d}of o)t.push(`<li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${i}"
      alt="${e}"
    />
  </a>
  <div class="info">
    <p class="info-item"><b>Likes</b> ${r}</p>
    <p class="info-item"><b>Views</b> ${s}</p>
    <p class="info-item"><b>Comments</b> ${m}</p>
    <p class="info-item"><b>Downloads</b> ${d}</p>
  </div>
</li>`);u.insertAdjacentHTML("beforeend",t.join("")),q.refresh()}function b(){u.innerHTML=""}let f=document.querySelector(".loader");function L(){f.style.display="block"}function v(){f.style.display="none"}let q=new y(".gallery a",{captionsData:"alt",captionDelay:250}),n=document.querySelector(".form"),c=document.querySelector("input[name='search-text']");n.addEventListener("submit",o=>{if(o.preventDefault(),c.value.trim()===""){l.error({title:"",message:"Please enter a search query "});return}b(),L(),g(c.value.trim()).then(t=>{t.hits.length===0?l.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!"}):h(t.hits)}).catch(t=>{l.error({title:"Error",message:t.message})}).finally(()=>{v(),n.reset()})});
//# sourceMappingURL=index.js.map
