"use strict";

/* ============= Confing firebase initial ============== */
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
let db = firebase.firestore()

/* ==================  App  ======================== */

const $inputTask = document.querySelector('input[name="task"]')
const $button = document.querySelector('button[type="button"]')
const $list = document.querySelector('[data-js="list"]')
const $trash = document.querySelector('.trash')
const $desconect = document.querySelector('.desconect')
//let storage = 0
//let array = []


$desconect.addEventListener('click', desconect)
$button.addEventListener("click", addList)

function addList() {
    if ($inputTask.value == '') {
        return;
    }

    $list.innerHTML += `<li class="item">${$inputTask.value}<a class="trash" onclick="remove(this)"><i class="far fa-trash-alt"></i></a></li>`
    $inputTask.value = ''
    //array.push($inputTask.value)
    //setLocalStorage()
}

function remove(element) {
    element.parentElement.remove();
}

function desconect() {
    firebase.auth().signOut().then(() => {
        alert('Desconectado')
    }).catch((error) => {
        console.log(error)
    });

    window.location.replace('index.html')
}

function setLocalStorage() {
    //localStorage.setItem(`tasks`, JSON.stringify(array))
    //localStorage.setItem(`task${storage}`, JSON.stringify($inputTask.value))
    //storage += 1
}

function getLocalStorage() {
    //let task = JSON.parse(localStorage.getItem('tasks'))
    //for ( var i = 0; i < localStorage.length; ++i ) {
    //    $list.innerHTML += `<li class="item ${localStorage.key(i)}">${localStorage.getItem(localStorage.key(i))}<a class="trash" onclick="remove(this)"><i class="far fa-trash-alt"></i></a></li>`
    //}
}

getLocalStorage()
//localStorage.clear()