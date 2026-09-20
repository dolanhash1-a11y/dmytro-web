const menuBtn=document.getElementById('menu-btn');
menuBtn?.addEventListener('click',()=>{const open=document.body.classList.toggle('mobile-nav-open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰';});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('mobile-nav-open');if(menuBtn){menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';}}));
