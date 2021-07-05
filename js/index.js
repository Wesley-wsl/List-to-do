'use strict';

const login = document.querySelector('#login')
const btn = document.querySelector('.btn')


btn.addEventListener('click', (event) => {
    const fields = [...document.querySelectorAll('input')]
    const formError = document.querySelector(".validate-error")

    fields.forEach(field => {
        if (field.value == '') {
            login.classList.add('validate-error')
        }
    })

    setTimeout(() => {
        login.classList.remove('validate-error')
    
    },420)

})