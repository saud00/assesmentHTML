
const form = document.getElementById('form')
const name = document.getElementById('name')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

document.addEventListener('DOMContentLoaded', ()=>{
    name.focus()
})

let nameVal, passVal, pass2Val
const nameReg = /^\w+$/
// const passReg = /^[\w!@#$%^&*]+.{4,8}$/
const passReg = /^.{8,15}$/

name.addEventListener('input',(e)=>{
    nameVal = e.target.value
    const re = nameVal.match(nameReg)
    console.log(re)

    if(re === null){
        name.className = 'form-control is-invalid';
    }else{
        name.className = 'form-control is-valid';
    }
})

password.addEventListener('input',(e)=>{
    passVal = e.target.value
    const re = passVal.match(passReg)
    console.log(re)

    if(re === null){
        password.classList.add('is-invalid')
    }else{
        password.classList.remove('is-invalid')
        password.classList.add('is-valid')
    }
})

password2.addEventListener('input',(e)=>{
    pass2Val = e.target.value
    const re = pass2Val.match(passReg)
    console.log(re)
    
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    
    if(passVal === pass2Val){
        password2.classList.remove('is-invalid')
        password2.classList.add('is-valid')
    }else{
        password2.classList.add('is-invalid')
    }
    
})