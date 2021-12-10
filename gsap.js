gsap.registerPlugin(ScrollTrigger);



 
gsap.to('.header__title', {
    scrollTrigger: {
        trigger: 'header',
        start: 'top bottom-=200'
    },
    duration: .5,
    opacity: 1,  
    delay:.5,      
    x:0
}) 



 
gsap.to('.header__subtitle', {
    scrollTrigger: {
        trigger: 'header',
        start: 'top bottom-=200'
    },
    duration: .5,
    opacity: 1,  
    delay:.8,      
    x:0
}) 


gsap.to('.about__title', {
    scrollTrigger: {
        trigger: '.about__container',
        start: 'top bottom-=200'
    },
    duration: 1,
    opacity: 1,  
    delay:.5,    
}) 

gsap.to('.about__text', {
    scrollTrigger: {
        trigger: '.about__container',
        start: 'top bottom-=200'
    },
    duration: .5,
    opacity: 1,  
    delay:1,   
}) 



gsap.to('.services__card:first-child', {
    scrollTrigger: {
        trigger: '.services__container',
        start: 'top bottom-=200'
    },
    duration: 1,
    y:0,
    delay:1,
    opacity:1,
    ease:"elastic"
})
gsap.to('.services__card:nth-child(2)', {
    scrollTrigger: {
        trigger: '.services__container',
        start: 'top bottom-=200'
    },
    duration: 1,
    y:0,
    delay:1.5,
    opacity:1,
    ease:"elastic"
})

gsap.to('.services__card:nth-child(3)', {
    scrollTrigger: {
        trigger: '.services__container',
        start: 'top bottom-=200'
    },
    duration: 1,
    y:0,
    delay:2,
    opacity:1,
    ease:"elastic"
})


//customer card
gsap.to('.container__customer>h1', {
    scrollTrigger: '.container__testimonios',
    duration: 1,
    delay:.5,
    opacity:1
})


gsap.to('.customer__card:first-child', {
    scrollTrigger: {
        trigger: '.container__testimonios',
        start: 'top bottom-=200'
    },
    duration: .5,
    x:0,
    delay:.5,
    opacity:1
})
gsap.to('.customer__card:nth-child(2)', {
    scrollTrigger: {
        trigger: '.container__testimonios',
        start: 'top bottom-=200'
    },
    duration: .5,
    x:0,
    delay:1,
    opacity:1
})

gsap.to('.customer__card:nth-child(3)', {
    scrollTrigger: {
        trigger: '.container__testimonios',
        start: 'top bottom-=200'
    },
    duration: .5,
    x:0,
    delay:1.5,
    opacity:1
})