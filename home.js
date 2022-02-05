const popUpMain = document.getElementById('popUpMain');
const cancelId = document.getElementById('cancelId');

const insta = document.getElementById('insta');
const facebook = document.getElementById('facebook');
const twitter = document.getElementById('twitter');
const linkedin = document.getElementById('linkedin');


setTimeout(()=>{
 popUpMain.style.display= 'block'
},5000)

cancelId.addEventListener('click',()=>{
    popUpMain.style.display= 'none';
})


insta.addEventListener('mouseover',()=>{
    insta.style.color = 'rgb(192, 0, 209)';
    insta.style.transform = 'scale(98%)';

})
insta.addEventListener('mouseout',()=>{
    insta.style.color = 'white';
    insta.style.transform = 'scale(100%)';

})

 facebook.addEventListener('mouseover',()=>{
     facebook.style.color = 'rgb(0, 110, 255)';
     facebook.style.transform = 'scale(98%)';
})
 facebook.addEventListener('mouseout',()=>{
     facebook.style.color = 'white';
     facebook.style.transform = 'scale(100%)';

})

twitter.addEventListener('mouseover',()=>{
    twitter.style.color = 'rgb(7, 147, 241)';
    twitter.style.transform = 'scale(98%)';
})
twitter.addEventListener('mouseout',()=>{
    twitter.style.color = 'white';
    twitter.style.transform = 'scale(100%)';
})

linkedin.addEventListener('mouseover',()=>{
    linkedin.style.color = 'rgb(41, 84, 168)';
    linkedin.style.transform = 'scale(98%)';
})
linkedin.addEventListener('mouseout',()=>{
    linkedin.style.color = 'white';
    linkedin.style.transform = 'scale(100%)';
})