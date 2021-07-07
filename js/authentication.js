'use strict';

/* ============= initial confing firebase =============== */

var firebaseConfig = {
    apiKey: "AIzaSyBO1Dj2mYIVOxETXbcdhuAL4BUI6p_A1Us",
    authDomain: "list-to-do-e72b8.firebaseapp.com",
    projectId: "list-to-do-e72b8",
    storageBucket: "list-to-do-e72b8.appspot.com",
    messagingSenderId: "132757625550",
    appId: "1:132757625550:web:24f43b6c655325f9600e9f",
    measurementId: "G-CESBX1NRE8"
};

firebase.initializeApp(firebaseConfig);

/*============ Authentication ============= */

const $inputEmail = document.querySelector('input[type="email"]')
const $inputPassword = document.querySelector('input[type="password"]')
const $buttonSignIn = document.querySelector('.btn')
const $message = document.querySelector('#message')
let user = firebase.auth().currentUser


$buttonSignIn.addEventListener('click', () => {
    firebase.auth().signInWithEmailAndPassword($inputEmail.value, $inputPassword.value)
        .then(userCredential => {
            console.log(user)
            window.location.replace('list-to-do.html')
        })
        .catch(error => {
            let errorMessage = error.message;
            message.innerText = errorMessage
        });
})