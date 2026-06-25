(function(){const e=document.getElementById("particles");if(!e)return;const n=30;for(let t=0;t<n;t++){const s=document.createElement("div"),o=Math.random()*3+1,i=Math.random()*100,a=Math.random()*100,r=Math.random()*20+10,c=Math.random()*5,l=Math.random()*.3+.05;s.style.cssText=`
            position: absolute;
            width: ${o}px;
            height: ${o}px;
            background: rgba(255,255,255,${l});
            border-radius: 50%;
            left: ${i}%;
            top: ${a}%;
            animation: float ${r}s ${c}s ease-in-out infinite;
        `,e.appendChild(s)}const t=document.createElement("style");t.textContent=`
        @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(${Math.random()*40-20}px, ${Math.random()*40-20}px) scale(1.5); }
            50% { transform: translate(${Math.random()*40-20}px, ${Math.random()*40-20}px) scale(1); }
            75% { transform: translate(${Math.random()*40-20}px, ${Math.random()*40-20}px) scale(0.8); }
        }
    `,document.head.appendChild(t)})(),function(){const e=document.querySelectorAll("section[id]"),t=document.querySelectorAll(".nav-link");function n(){let n="";e.forEach(e=>{const t=e.offsetTop-100;window.pageYOffset>=t&&(n=e.getAttribute("id"))}),t.forEach(e=>{e.style.color="",e.style.background="",e.getAttribute("href")==="/#"+n&&(e.style.color="var(--color-accent)",e.style.background="rgba(37,99,235,0.06)")})}window.addEventListener("scroll",n,{passive:!0})}()