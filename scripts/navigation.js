function animateCardsIn (overlay, cards, container) {
    gsap.to(overlay, {
        right: '-500px',
        duration: 1,
        ease: 'power4.out'
    })

    gsap.to(cards, {
        right: '0%',
        stagger: 0.075,
        duration: 1,
        ease: 'power4.out'
    }, '<')

    gsap.to(container, {
        filter: 'blur(15px)',
        duration: 1,
        immediateRender: false
    }, '<')
}

function animateCardsOut (overlay, cards, container) {
    gsap.to(overlay, {
        right: '0px',
        duration: 1,
        ease: 'power4.out'
    })

    gsap.to(cards, {
        right: '-110%',
        stagger: 0.075,
        duration: 1,
        ease: 'power4.out'
    }, '<')

    gsap.to(container, {
        filter: 'blur(0px)',
        duration: 1,
        immediateRender: false
    }, '<')
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const sidebar = document.querySelector('.sidebar');
    const cards = gsap.utils.toArray('.card');
    const overlay = document.querySelector('.overlay-toggle');

    overlay.addEventListener('click', () => {
        sidebar.style.pointerEvents = 'all';
        animateCardsIn(overlay,cards,container);
    })

    cards.forEach(element => {
        element.addEventListener('click', () => {
            sidebar.style.pointerEvents = 'none';
            animateCardsOut(overlay,cards,container);
        })
    });
})