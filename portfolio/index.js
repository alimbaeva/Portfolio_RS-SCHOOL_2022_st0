const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'e-mail': 'E-mail',
        'phone': 'Phone',
        'message': 'Message',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'e-mail': 'Почта',
        'phone': 'Телефон',
        'message': 'Письмо',
        'send-message': 'Отправить'
    }
}

console.log(`
    1.Я знаю html на 80%;
    2.Я знаю css на 70%;
    3.Я хочу на этом курсе получить больше опыта и улучшить свои знания и преодолеть свой страх.
`)

const { ru, en } = i18Obj;
const gumburger = document.querySelector('.btn__gumburger');
const navMenu = document.querySelector('.navMenu');

const light = document.querySelector('.light');
const black = document.querySelector('.black');
const bodyColors = document.querySelector('.bodyColors');
const body = document.querySelector('body');
const portfolioButtons = document.querySelectorAll('.portfolio__button');
const navMenuA = document.querySelectorAll('.nav__menu a');

const spanMenu1 = document.querySelector('.spanMenu1');
const spanMenu2 = document.querySelector('.spanMenu2');
const spanMenu3 = document.querySelector('.spanMenu3');
const block = document.querySelector('.block');

const portfolioButton = document.querySelectorAll('.portfolio__button');
const portfolioImages = document.querySelectorAll('.portfolio__img img');

const lenguege = document.querySelectorAll('[data-lenguege]');
const lenguegeCh = document.querySelectorAll('.lenguage li');
const allDatai18 = document.querySelectorAll('[data-i18]');

const pathIMG = './assets/img/';

window.addEventListener('load', () => {
    changeLanguege(localStorage.getItem('len'));
    changeBodyColorLS(localStorage.getItem('chBcBooleng') === 'true' ? true : false)
    if (localStorage.getItem('chBcBooleng') === 'true') {
        if (!light.classList.contains('bodyColor')) {
            light.classList.toggle('bodyColor')
            black.classList.toggle('bodyColor')
        }


    }
})

lenguegeCh.forEach((el) => {
    el.classList.remove('activ')
    el.addEventListener('click', (e) => {
        el.classList.toggle('active')
    })
})


lenguege.forEach((item) => {
    item.addEventListener('click', (e) => {
        const len = e.target.getAttribute('data-lenguege');
        localStorage.setItem('len', len);
        changeLanguege(len)
    })
})

function changeLanguege(len) {
    if (len === 'ru') {
        allDatai18.forEach((element) => {
            const elementAtrValue = element.dataset.i18;
            if (element.hasAttribute("placeholder")) {
                element.placeholder = ru[elementAtrValue];
            }
            element.textContent = ru[elementAtrValue];
        })
    } else {
        allDatai18.forEach((element) => {
            const elementAtrValue = element.dataset.i18;
            if (element.hasAttribute("placeholder")) {
                element.placeholder = en[elementAtrValue];
            }
            element.textContent = en[elementAtrValue];
        })
    }
}

bodyColors.addEventListener('click', changeBodyColor);

function changeBodyColor() {
    light.classList.toggle('bodyColor');
    black.classList.toggle('bodyColor');
    let chBcBooleng = light.classList.contains('bodyColor')
    let bodyColorLS = chBcBooleng;
    localStorage.setItem('chBcBooleng', bodyColorLS);
    changeBodyColorLS(chBcBooleng);
}

function changeBodyColorLS(chBcBooleng) {
    if (chBcBooleng) {
        navMenuA.forEach((e) => {
            e.classList.add('lightColor')
        })
        navMenu.classList.add('navMenuLight');
        portfolioButtons.forEach((el) => {
            el.classList.add('portfolio__buttonLight');
            el.addEventListener("mouseenter", function () {
                el.style.cssText = `
                background-color: rgba(189, 174, 130, 1);
                color: #fff;
                `
            })
            el.addEventListener("mouseleave", function () {
                el.style.cssText = `
                `
            })
        })
        body.style.cssText = `
        background-color: #fff;
        color: #000;
        `
    };
    if (!chBcBooleng) {
        navMenu.classList.remove('navMenuLight');
        navMenuA.forEach((e) => {
            e.classList.remove('lightColor')
        })
        portfolioButtons.forEach((el) => {
            el.classList.remove('portfolio__buttonLight');
        })
        body.style.cssText = `
        background-color: #000;
        color: #fff;
        `
    };
}

gumburger.addEventListener('click', openMenu);

function openMenu() {
    navMenu.classList.toggle('navMenu-activ');
    spanMenu1.classList.toggle('spanMenu1Click');
    spanMenu2.classList.toggle('spanMenu2Click');
    spanMenu3.classList.toggle('spanMenu3Click');
    block.classList.toggle('blockNon');
    navMenu.addEventListener('click', closeMenu);

}

function closeMenu() {
    navMenu.classList.toggle('navMenu-activ');
    spanMenu1.classList.toggle('spanMenu1Click');
    spanMenu2.classList.toggle('spanMenu2Click');
    spanMenu3.classList.toggle('spanMenu3Click');
    block.classList.toggle('blockNon');
}


portfolioButton.forEach(el => {
    el.addEventListener('click', (e) => {
        portfolioButton.forEach((e) => {
            e.classList.remove('activ-btn');
        })
        const atribut = el.getAttribute("data-portBtn");
        if (atribut === 'winter') {
            el.classList.add('activ-btn');
            portfolioImages.forEach((el, ind) => {
                el.setAttribute('src', `${pathIMG}winter/winter_${ind + 1}.jpg`);
            })
        } else if (atribut === 'spring') {
            el.classList.add('activ-btn');
            portfolioImages.forEach((el, ind) => {
                el.setAttribute('src', `${pathIMG}spring/spring_${ind + 1}.jpg`);
            })
        } else if (atribut === 'summer') {
            el.classList.add('activ-btn');
            portfolioImages.forEach((el, ind) => {
                el.setAttribute('src', `${pathIMG}summer/summer_${ind + 1}.jpg`);
            })
        } else if (atribut === 'autumn') {
            el.classList.add('activ-btn');
            portfolioImages.forEach((el, ind) => {
                el.setAttribute('src', `${pathIMG}autumn/autumn_${ind + 1}.jpg`);
            })
        }
    })
})
