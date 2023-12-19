const team = [
    {
        name: 'Ava Sinclair',
        role: 'Creative Director'
    },
    {
        name: 'Liam Archer',
        role: 'Brand Strategist'
    },
    {
        name: 'Zoe Johns',
        role: 'Lead Designer'
    },
]

const cursor = document.querySelector('.cursor');
const cursorIcon = document.querySelector('i');

const cursorWidth = cursor.offsetWidth / 2;
const cursorHeight = cursor.offsetHeight / 2;

let currentSlide = 1;
const totalSlides = 3;

const updateCursorClass = xPosition => {
    const halfPageWidth = window.innerWidth / 2;

    if(xPosition  > halfPageWidth) {
        if(currentSlide  < totalSlides) {
            cursorIcon.classList.remove('ph-arrow-left');
            cursorIcon.classList.add('ph-arrow-right');
            cursor.style.display = '';
        } else {
            cursor.style.display = 'none';
        }
    } else {
        if(currentSlide > 1 ) {
            cursorIcon.classList.remove('ph-arrow-right');
            cursorIcon.classList.add('ph-arrow-left');
            cursor.style.display = '';
        } else {
            cursor.style.display = 'none';
        }
    }
}

const updateInfo = slideNumber => {
    const member = team[slideNumber -1];
    document.querySelector('.info .name').textContent = member.name
    document.querySelector('.info .role').textContent = member.role
}

const animateSlide = (slideNumber, reveal) => {
    const marquee = document.querySelector(`.t-${slideNumber}.marque-wrapper`);
    const img = document.querySelector(`#t-${slideNumber}`);
    const clipPathValue = reveal ? 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' : 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)';

    gsap.to(marquee, {
        clipPath: clipPathValue,
        duration: 1,
        ease: 'power4.out',
        delay: 0.3,
    });

    gsap.to(img, {
        clipPath: clipPathValue,
        duration: 1,
        ease: 'power4.out',
    })
}

document.addEventListener('mousemove', e => {
    gsap.to(cursor, {
        x: e.clientX - cursorWidth,
        y: e.clientY - cursorHeight,
        duration: 1,
        ease: 'power3.out',
    })
    updateCursorClass(e.clientX)
})

updateInfo(currentSlide);


const handleRightClick = () => {
    if(currentSlide < totalSlides) {
        animateSlide(currentSlide + 1, true);
        currentSlide++;
        updateInfo(currentSlide);

    }
}

const handleLeftClick = () => {
    if(currentSlide > 1) {
        animateSlide(currentSlide, false);
        currentSlide--;
        updateInfo(currentSlide)
    }
}


document.addEventListener('click', e => {
    const halfPageWidth = window.innerWidth / 2;
    
    if(e.clientX > halfPageWidth) {
        handleRightClick()
    } else {
        handleLeftClick()
    }


})