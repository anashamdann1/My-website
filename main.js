  // CURSOR
    const cd = document.getElementById('cd');
    const cc = document.getElementById('cc');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cd.style.left = mx+'px'; cd.style.top = my+'px'; });
    (function anim() { rx += (mx-rx)*.1; ry += (my-ry)*.1; cc.style.left = rx+'px'; cc.style.top = ry+'px'; requestAnimationFrame(anim); })();
    document.querySelectorAll('a,button,.project-item,.blog-item,.about-value,.skill-row').forEach(el => {
      el.addEventListener('mouseenter', () => { cd.querySelector('.cur-dot').style.width = '16px'; cd.querySelector('.cur-dot').style.height = '16px'; cc.querySelector('.cur-circle').style.width = '56px'; cc.querySelector('.cur-circle').style.height = '56px'; });
      el.addEventListener('mouseleave', () => { cd.querySelector('.cur-dot').style.width = '8px'; cd.querySelector('.cur-dot').style.height = '8px'; cc.querySelector('.cur-circle').style.width = '36px'; cc.querySelector('.cur-circle').style.height = '36px'; });
    });

    // NAV SCROLL
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

    // REVEAL
    const revEls = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => { if (e.isIntersecting) { setTimeout(() => e.target.classList.add('visible'), 60); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    revEls.forEach((r, i) => { r.style.transitionDelay = (i % 4 * 0.08) + 's'; obs.observe(r); });

    // SEND FORM
    function handleSend(btn) {
      btn.querySelector('span').textContent = 'Sent Successfully ✓';
      btn.style.background = 'var(--gold)';
      setTimeout(() => { btn.querySelector('span').textContent = 'Send Message →'; btn.style.background = ''; }, 3000);
    }