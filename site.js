const header=document.querySelector('header.top');
addEventListener('scroll',()=>header&&header.classList.toggle('scrolled',scrollY>8),{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
function openFromHash(){const d=document.getElementById(location.hash.slice(1));if(d&&d.tagName==='DETAILS'){d.open=true;d.scrollIntoView({behavior:'smooth',block:'start'})}}
addEventListener('hashchange',openFromHash);openFromHash();
const slot=document.querySelector('.f4');
const concerts=[{"a":"Velvet Coast","p":"Palladium · Köln","d":"2. Mai 2026","r":"9.1","art":["#F472B6","#A78BFA"],"f":[["J","#A78BFA","#C4B5FD"],["S","#F472B6","#FB7185"],["A","#34D399","#10B981"]]},{"a":"Die Nachtfalter","p":"Docks · Hamburg","d":"21. Juni 2026","r":"9.8","art":["#FF8A3D","#F472B6"],"f":[["L","#FF8A3D","#FFB86B"],["J","#A78BFA","#C4B5FD"]]},{"a":"Luna Reyes","p":"Zenith · München","d":"8. Aug. 2026","r":"8.7","art":["#34D399","#3B82F6"],"f":[["M","#3B82F6","#60A5FA"],["S","#F472B6","#FB7185"],["L","#FF8A3D","#FFB86B"]]}];
const card=(c)=>'<div class="tcard"><div class="art" style="background:linear-gradient(135deg,'+c.art[0]+','+c.art[1]+')">♫</div><div class="info"><b>'+c.a+'</b><small>'+c.p+'</small><small>'+c.d+'</small></div><span class="rate">'+c.r+'</span><div class="friends">'+c.f.map((x,i)=>'<span class="av" style="background:linear-gradient(135deg,'+x[1]+','+x[2]+');animation-delay:'+(.42+i*.12)+'s">'+x[0]+'</span>').join('')+'</div></div>';
if(slot&&!matchMedia('(prefers-reduced-motion: reduce)').matches){let i=0;slot.innerHTML=card(concerts[0]);
setTimeout(function tick(){const old=slot.firstElementChild;old.classList.add('rot-out');i=(i+1)%concerts.length;
setTimeout(()=>{slot.innerHTML=card(concerts[i]);slot.firstElementChild.classList.add('rot-in')},240);setTimeout(tick,4200)},3200)}
else if(slot){slot.innerHTML=card(concerts[0])}
