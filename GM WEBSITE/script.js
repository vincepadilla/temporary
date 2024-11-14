// Toggle Sidebar
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('show');
}

// If the window is larger the sidebar automatically disabled
window.addEventListener('resize', () => {
    if (window.innerWidth >= 780) {
        document.querySelector('.sidebar').classList.remove('show');
    }
});

// Camera follow animation
window.addEventListener('scroll', function() {
    const cameraImage = document.querySelector('.section1 .camera');
    const parallaxImage = document.getElementById('camera-img');
    let scrollPosition = window.scrollY;
    parallaxImage.style.transform = `translate(-50%, ${scrollPosition * 0.5}px)`;  

    cameraImage.classList.add('loaded');
});

window.addEventListener('load', function() {
  const cameraImage = document.querySelector('.section1 .camera');
  
  // Force the correct position on load
  cameraImage.style.top = '35%';
  cameraImage.style.left = '50%';
  cameraImage.style.transform = 'translate(-50%, -35%)';
});


new Swiper('.card-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30, 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
  });

