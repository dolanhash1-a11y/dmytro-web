const menu=document.getElementById("menu");
const nav=document.getElementById("nav");

if(menu&&nav){
  menu.addEventListener("click",()=>{
    const open=nav.classList.toggle("open");
    menu.setAttribute("aria-expanded",String(open));
  });
  nav.querySelectorAll("a").forEach(link=>{
    link.addEventListener("click",()=>nav.classList.remove("open"));
  });
}

const observer=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("in");
  });
},{threshold:.12,rootMargin:"0px 0px -35px 0px"});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const sections=[...document.querySelectorAll("main section[id]")];
const navLinks=[...document.querySelectorAll(".nav a")];
const sectionObserver=new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px",threshold:0});

sections.forEach(section=>sectionObserver.observe(section));

const glow=document.querySelector(".cursor-glow");
if(glow&&window.matchMedia("(pointer:fine)").matches){
  window.addEventListener("pointermove",e=>{
    glow.style.transform=`translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%)`;
  },{passive:true});
}else if(glow){
  glow.remove();
}

document.querySelectorAll(".magnetic").forEach(el=>{
  if(!window.matchMedia("(pointer:fine)").matches) return;
  el.addEventListener("pointermove",e=>{
    const r=el.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)/r.width;
    const y=(e.clientY-r.top-r.height/2)/r.height;
    el.style.transform=`translate(${x*8}px,${y*6}px)`;
  });
  el.addEventListener("pointerleave",()=>{el.style.transform="";});
});

const heroCard=document.querySelector(".hero-card");
if(heroCard&&window.matchMedia("(pointer:fine)").matches){
  heroCard.addEventListener("pointermove",e=>{
    const r=heroCard.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    heroCard.style.transform=`perspective(1300px) rotateY(${-8+x*10}deg) rotateX(${2-y*7}deg) translateY(-2px)`;
  });
  heroCard.addEventListener("pointerleave",()=>{heroCard.style.transform="perspective(1300px) rotateY(-8deg) rotateX(2deg)";});
}

const year=new Date().getFullYear();
document.querySelectorAll(".site-footer").forEach(footer=>{
  footer.innerHTML=footer.innerHTML.replace("© 2026",`© ${year}`);
});
