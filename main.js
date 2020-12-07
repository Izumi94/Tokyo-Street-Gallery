var slider = new Swiper(".swiper-container", {
    slidesPreview: 'auto',
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true
})

slider.on('slideChange', function () {
    TweenMax.to('slide-text span', .2, {
        y: '-100px',
    })
    TweenMax.to('slide-number span', .2, {
        x: '-100px',
    })
    TweenMax.to('swiper-slide-active', .5, {
        scale: .85,
    })
})
