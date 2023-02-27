let CARDS = [
    {
        itemName: 'Парикмахерское кресло «Норм» гидравлическое',
        img: './assets/imgs/green-chair.png',
        price: '9 900 ₽ '
    },
    {
        itemName: 'Парикмахерское кресло «Норм» гидравлическое',
        img: './assets/imgs/green-chair.png',
        price: '9 900 ₽ '
    },
    {
        itemName: 'Парикмахерское кресло «Норм» гидравлическое',
        img: './assets/imgs/green-chair.png',
        price: '9 900 ₽ '
    },
    {
        itemName: 'Парикмахерское кресло «Норм» гидравлическое',
        img: './assets/imgs/green-chair.png',
        price: '9 900 ₽ '
    },
    {
        itemName: 'Парикмахерское кресло «Норм» гидравлическое',
        img: './assets/imgs/green-chair.png',
        price: '9 900 ₽ '
    },
]

let SOCIALS = [
    {
        icon: './assets/icons/youtube.png',
        link: "https://www.youtube.com",
        itemName: 'youtube'
    },
    {
        icon: './assets/icons/vk.png',
        link: "https://vk.com/",
        itemName: 'vk'
    },
    {
        icon: './assets/icons/facebook-logo.png',
        link: "https://ru-ru.facebook.com/",
        itemName: 'facebook',
    },
    {
        icon: './assets/icons/instagram.png',
        link: "https://www.instagram.com/",
        itemName: 'instagram',
    },
]
const socials = () => {
    let social = ''
    SOCIALS = SOCIALS.map(({ itemName, link, icon }) => {
        social += `
        <li class="social__listEl">
            <a href=${link}>
                <img src=${icon} alt=${itemName}/>
            </a>
        </li>
        `
        document.querySelector('.social__list').innerHTML = social
    })
}
const chairs = () => {
    let listItem = ''
    CARDS = CARDS.map(({ itemName, img, price }) => {
        listItem += `
        <li class="special-offer__listEl">
            <img src="${img}"/>
            <h5>${itemName}</h5>
            <span>${price}</span>
            <button>Купить</button>
        </li>
        `
        document.querySelector('.special-offer__list').innerHTML = listItem
    })
}
chairs()
socials()
const navContainer = document.querySelector('.nav-container')
const navBtn = document.querySelector('.nav-btn')
const CardList = document.querySelector('.special-offer__list')
const RightBtn = document.querySelector('.right')
const LeftBtn = document.querySelector('.left')
let width = document.querySelector('.special-offer__listEl').offsetWidth
let count = 0

const moveSlider = (w) => { CardList.style.transform = `translate(-${(+count * w) + (+count * 25)}px)` }

const showNav = () => {
    navContainer.style.transform = `translate(100px)`
    navContainer.style.transition = `all ease 0.5s`
}
navBtn.addEventListener('click', () => {
    if (navContainer.style.transform === `translate(100px)`) {
        navContainer.style.transform = `translate(0)`
        navContainer.style.transition = `all ease 0.5s`
    }
    else showNav()
})


RightBtn.addEventListener('click', () => {
    count++
    if (window.screen.width > 1025) {
        if (count > CARDS.length - 4) {
            count = 0
        }
    }
    else if (window.screen.width > 700) {
        if (count > CARDS.length - 3) {
            count = 0
        }
    }
    else {
        if (count > CARDS.length - 1) {
            count = 0
        }
    }

    moveSlider(width)
})

LeftBtn.addEventListener('click', () => {
    count--
    moveSlider(width)
})



