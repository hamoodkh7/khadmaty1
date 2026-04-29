// ================= scroll  =================
let btn = document.getElementById('scroll');
onscroll = function(){
    if(scrollY >= 50){
        btn.style.display='block';
    }else{
        btn.style.display=null;
    }
}
btn.onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
}
// ================= HAMBURGER MENU =================
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('header nav ul');
const none = document.querySelector('.logo');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navUl.classList.toggle('open');
        none.classList.toggle('none');
    });

    navUl.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navUl.classList.remove('open');
            none.classList.remove('none');
        });
    });
}

// ================= FAQ TOGGLE =================
function toggleFaq(el) {
    const item = el.parentElement;
    const isOpen = item.classList.contains('open');
    let faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(i => {
        i.classList.remove('open');
        i.querySelector('.icon').textContent = '+';
    });
    if (!isOpen) {
        item.classList.add('open');
        el.querySelector('.icon').textContent = '−';
    }
}
