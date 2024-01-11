/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader()
{
    const header = document.getElementById('header')
    if(this.scrollY >= 50) 
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick)
{
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkwork = document.querySelectorAll('.work__item')
function activeWork()
{
    linkwork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkwork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive()
{
    const scrollY = window.pageYOffset

    sections.forEach(current => 
        {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id')
              
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }
            else
            {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
}

window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if(selectedTheme)
{
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>
    {
        document.body.classList.toggle(lightTheme)
        themeButton.classList.toggle(iconTheme)

        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal
({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal('.home__social, .home__scroll', {delay: 900, origin: 'bottom'})

// Function to update content based on selected language
function changeLanguage(language) {
    // Fetch the corresponding JSON file
    fetch(`assets/js/${language}.json`)
      .then(response => response.json())
      .then(data => {
        // Update content
        Object.keys(data).forEach(key => {
          const element = document.getElementById(key);
          if (element) {
            element.textContent = data[key];
          }
        });
    
        // Update language button content
        const dropdownBtn = document.querySelector('.dropbtn');
        dropdownBtn.innerHTML = data.languageText;
      })
      .catch(error => {
        console.error('Error fetching translation file:', error);
      });
  }
  


// Helper function to get language name based on language code
function getLanguageName(language) {
  switch (language) {
    case 'en':
      return 'English';
    case 'pt':
      return 'Portuguese';
    case 'de':
      return 'Deutsch';
    case 'jp':
      return 'Japanese'
    case 'es':
      return 'Spanish'
    default:
      return '';
  }
}
