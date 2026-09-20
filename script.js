const menuBtn=document.getElementById('menu-btn');
menuBtn?.addEventListener('click',()=>{const open=document.body.classList.toggle('mobile-nav-open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰';});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('mobile-nav-open');if(menuBtn){menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';}}));

const revealItems=document.querySelectorAll('.service-card,.business-grid article,.process-step,.project-story>div,.faq details,.case-shot,.numbers>div');
if('IntersectionObserver' in window){const io=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});revealItems.forEach(el=>{el.classList.add('reveal-item');io.observe(el)})}
