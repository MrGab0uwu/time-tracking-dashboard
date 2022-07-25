const p=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerpolicy&&(e.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?e.credentials="include":r.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=l(r);fetch(r.href,e)}};p();const u="/assets/image-jeremy.97a6932a.png",y="/assets/icon-ellipsis.272833ec.svg",a=[{title:"Work",timeframes:{daily:{current:5,previous:7},weekly:{current:32,previous:36},monthly:{current:103,previous:128}}},{title:"Play",timeframes:{daily:{current:1,previous:2},weekly:{current:10,previous:8},monthly:{current:23,previous:29}}},{title:"Study",timeframes:{daily:{current:0,previous:1},weekly:{current:4,previous:7},monthly:{current:13,previous:19}}},{title:"Exercise",timeframes:{daily:{current:1,previous:1},weekly:{current:4,previous:5},monthly:{current:11,previous:18}}},{title:"Social",timeframes:{daily:{current:1,previous:3},weekly:{current:5,previous:10},monthly:{current:21,previous:23}}},{title:"Self Care",timeframes:{daily:{current:0,previous:1},weekly:{current:2,previous:2},monthly:{current:7,previous:11}}}],f=document.querySelector(".dashboard");function v(c="weekly"){let t="";const l={daily:"Day",weekly:"Week",monthly:"Month"};for(let e=0;e<6;e++){const{title:s}=a[e],{current:n,previous:i}=a[e].timeframes[c];t+=`<div class="card card--${s.split(" ").join("")}">
        <article class="card__info">
          <header class="card__header">
            <h2 class="card__title">${s}</h2>
            <img class="card__dots" src="${y}" alt="User picture">
          </header>
          <div class="card__time-wrapper">
            <p class="card__time-current">${n}hrs</p>
            <p class="card__time-previous">Last ${l[c]} - ${i}hrs</p>
          </div>
        </article>
      </div>`}f.innerHTML=`
  <section class="time-tracking">

    <div class="card card--user">
      <header class="card__user-info">
        <picture class="card__user-picture">
          <source srcset="${u}">
          <img src="${u}" alt="User picture">
        </picture>
        <div class="card__user-title-wrapper">
          <h1 class="card__user-title">Report for</h1>
          <span class="card__user-name">Jeremy Robson</span> 
        </div>
      </header>
      <nav class="time">
        <ul class="time__selection">
          <li id="daily">Daily</li>
          <li id="weekly" class="active">Weekly</li>
          <li id="monthly">Monthly</li>
        </ul>
      </nav>
    </div>

    ${t}

  </section>
  `;const o=document.querySelectorAll(".time__selection li"),r=e=>{const s=document.querySelectorAll(".card__time-current"),n=document.querySelectorAll(".card__time-previous");for(let i=0;i<6;i++){const{current:d,previous:m}=a[i].timeframes[e];s[i].textContent=`${d}hrs`,n[i].textContent=`Last ${l[e]} - ${m}hrs`}};o.forEach(e=>{e.addEventListener("click",()=>{h(o),e.classList.add("active"),r(e.id)})})}v();const h=c=>c.forEach(t=>t.classList.remove("active"));
