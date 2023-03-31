let text = document.getElementById('text');
let tlft = document.getElementById('t_lft');
let trgt = document.getElementById('t_rgt');
let glft = document.getElementById('g_lft');
let grgt = document.getElementById('g_rgt');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    tlft.style.left = value * -1.5 + 'px';
    trgt.style.left = value * 1.5 + 'px';
    glft.style.left = value * 0.5 + 'px';
    grgt.style.left = value * -0.5 + 'px';
})

