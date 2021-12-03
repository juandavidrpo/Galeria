document.addEventListener('DOMContentLoaded', function() {
    let images = [
        {img: 'img/1.jpg'},
        {img: 'img/2.jpg'},
        {img: 'img/3.jpg'},
        {img: 'img/4.jpg'},
        {img: 'img/5.jpg'},
        {img: 'img/6.jpg'},
        {img: 'img/7.jpg'},
        {img: 'img/8.jpg'},
        {img: 'img/9.jpg'},
        {img: 'img/10.jpg'},
        {img: 'img/11.jpg'},
        {img: 'img/12.jpg'},
        {img: 'img/13.jpg'},
        {img: 'img/14.jpg'},
        {img: 'img/15.jpg'},
        {img: 'img/16.jpg'},
        {img: 'img/17.jpg'},
        {img: 'img/18.jpg'},
        {img: 'img/19.jpg'},
        {img: 'img/20.jpg'}
    ]

    let i = 0
    const container = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const gallery_images = document.querySelectorAll('.gallery img')
    const img_slideshow = document.querySelector('.slideshow img')

    container.addEventListener('click', e => {
        let back = container.querySelector('.back'),
            next = container.querySelector('.next'),
            img = container.querySelector('img'),
            tgt = e.target;

        if(tgt == back) {
            if (i > 0) {
                img.src = images[i -1].img
                i--;
            }else {
                img.src = images[images.length - 1].img
                i = images.length - 1;
            }
        }else if (tgt == next) {
            if (i < images.length - 1) {
                img.src = images[i + 1].img
                i ++;
            }else {
                img.src = images[0].img
                i = 0;
            }
        }
    })

    Array.from(gallery_images).forEach(img => {
        img.addEventListener('click', event => {
            const image_select = +event.target.dataset.imgView
            img_slideshow.src = images[image_select].img
            i = image_select
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_close').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

    /* overlay.addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    }) */
})
