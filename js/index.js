'use strict';

const login = document.querySelector('#login')
const btn = document.querySelector('.btn')


btn.addEventListener('click', (event) => {
    const fields = [...document.querySelectorAll('input')]

    fields.forEach(field => {
        if (field.value == '') {
            login.classList.add('validate-error')
        }
    })

    setTimeout(() => {
        login.classList.remove('validate-error')
    }, 420)
})

/*  background lines */

const lines = document.querySelector('ul.lines')

for (let i = 0; i < 11; i++) {
    const li = document.createElement('li')
    const random = (min, max) => Math.random() * (max - min) + min
    const size = random(10, 120)
    const position = random(1, 99)
    const delay = random(5, 0.1)

    li.style.height = `${size}px`
    li.style.left = `${position}%`
    li.style.animationDelay = `${delay}s`

    lines.appendChild(li)
}