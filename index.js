document.addEventListener('DOMContentLoaded', () => {
    for(let btn of document.querySelectorAll('[data-target]')) {
        btn.addEventListener('click', (e) => {
            if(document.querySelector(btn.dataset.target).dataset.state == 'false') {
                document.querySelector(btn.dataset.target).dataset.state = 'true';
                if( btn.querySelector('.fa-caret-down')) {
                    btn.querySelector('.fa-caret-down').classList.add('fa-caret-up');
                    btn.querySelector('.fa-caret-down').classList.remove('fa-caret-down');
                }
            } else {
                document.querySelector(btn.dataset.target).dataset.state = 'false';
                if( btn.querySelector('.fa-caret-up')) {
                    btn.querySelector('.fa-caret-up').classList.add('fa-caret-down');
                    btn.querySelector('.fa-caret-up').classList.remove('fa-caret-up');
                }
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    var servicesSwiper = new Swiper('.services-swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    
         slidesPerView: 1,
         spaceBetween: 10,
        breakpoints: {
            426: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    var produtosSwiper = new Swiper('.produtos-swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 2,
        spaceBetween: 10,
        breakpoints: {
            426: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            1440: {
                slidesPerView: 6,
                spaceBetween: 30
            }
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
      });

      var servicesSelectionSwiper = new Swiper('.services-selection-swiper', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        }
      });
});