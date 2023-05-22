'use strict'

const male = document.querySelector('.male-img');
const female = document.querySelector('.female-img');
const age = document.querySelector('#age');
const height = document.querySelector('#height')
const weight = document.querySelector('#weight');                        
const back = document.querySelector('.back')     
const genderImg = document.querySelector('.gender-img')                   
const calcBtn = document.querySelector('.bmi-btn')
const resText = document.querySelector('.result');
const correctBox = document.querySelector('.correct-box')
//console.log(resText.textContent)
const success = document.querySelector('.success')
const sucText = document.querySelector('.suc-text')

let genderClicked;

male.addEventListener('click',function(e){
    male.classList.toggle('blue-green')
    female.classList.remove('blue-green')
})

female.addEventListener('click',function(e){
    female.classList.toggle('blue-green')
    male.classList.remove('blue-green')
})

genderImg.addEventListener('click',function(e){
    genderClicked = true;
})

back.addEventListener('click',function(e){
    e.preventDefault();
    success.classList.add('none');
    weight.value = ''
    height.value = ''
    age.value = ''
    weight.textContent = weight.value;
    height.textContent = height.value;
    age.textContent = age.value;
    genderImg.classList.remove('blue-green')
})

calcBtn.addEventListener('click',function(e){
    if(age.value < 1){
        setTimeout(function(){
            correctBox.classList.add('anime')
        })
        correctBox.textContent = 'Please input an appropraite age'
    }
    else{
        //correctBox.classList.remove('anime')
        correctBox.textContent = 'Please fill out the required field'
    }

    if(!genderClicked){
        correctBox.textContent = 'Please input your gender'
        setTimeout(function(){
            correctBox.classList.add('anime')
        })
    }
    else{
        correctBox.classList.remove('anime')
        correctBox.textContent = 'Please fill out the required field'
    }

    if(age.value === '' || height.value === '' || weight.value === '' || !genderClicked){
        setTimeout(function(){
            correctBox.classList.add('anime')
        })
    }
    else{
        let result = eval(Number(weight.value) / (Number(height.value)**2/10000))
        resText.textContent = Number(result).toFixed(2);
        success.classList.remove('none')
        if(result < 18.5){
            sucText.textContent = 'You are underweight 😥'
        }
    
        if(result >= 18.5 && result <= 24.9){
            sucText.textContent = 'You have a normal body weight 🤩'
        }
    
        if(result > 25 && result <= 29.9){
            sucText.textContent = 'You are overweight'
        }
    
        if(result > 30){
            sucText.textContent = 'You are obese 😥'
        }
    }
})
  

