var container=document.body.querySelector(".container");
var slider= document.body.querySelector(".slider");
var slides=document.body.querySelectorAll(".slide");
var previous= document.querySelector(".previous");
var next = document.querySelector(".next");

let index=0;
// debugger
const prevSlide=()=>{
    slides[index].classList.remove('active');
    if(index===0){
       index=slides.length-1;
    }else{
        index=index-1;
    }
    slides[index].classList.add('active');
    slider.style.transform = `translateX(-${index * 1350}px)`;
}

const nextSlide=()=>{
    slides[index].classList.remove('active');
    if(index===(slides.length-1)){
       index=0;
    }else{
        index=index+1;
    }
    slides[index].classList.add('active');
    slider.style.transform = `translateX(-${index * 1350}px)`;
}

previous.addEventListener('click',prevSlide)
next.addEventListener('click',nextSlide)

