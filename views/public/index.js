
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function gotomain(){
    window.location.href = "main.html";
}

function gotocv(){
    window.location.href = "cv.html";
}


var form={};
document.addEventListener("DOMContentLoaded", function() {
    form.nume=document.getElementById("nume");
    form.prenume=document.getElementById("prenume");
    form.email=document.getElementById("email");
    form.mesaj=document.getElementById("mesaj");
})


function notEmpty(x){
    if(x==null||typeof x=="undefined"){
        return false;
    }
    console.log(x.length);
    return x.length>0;
}

function isAnEmail(x){
    if(x==null||typeof x=="undefined"){
        return false;
    }
    let regex=/^\S+@\S+\.\S+$/;
    if(regex.test(String(x).toLowerCase())){
        return true;
    }
    else{
        alert("Invalid email");
        
        return false;
    }
}

function validation(field, validateFunc){
    if(field==null)return false;

    let isValid = validateFunc(field.value);
    if(!isValid){
        field.style.borderColor="red !important";
    }

    return isValid;

}

function isValidFunc(){
    var valid=true;

    valid &= validation(form.nume, notEmpty);
    valid &= validation(form.prenume, notEmpty);
    valid &= validation(form.email, isAnEmail);
    valid &= validation(form.mesaj, notEmpty);

    return valid;
}

class Mesaj{
    constructor(nume, prenume, email, mesaj){
        this.nume=nume;
        this.prenume=prenume;
        this.email=email;
        this.mesaj=mesaj;
    }
}

function send(){
    if(isValidFunc()){
        let m = new Mesaj(form.nume.value, form.prenume.value, form.email.value, form.mesaj.value);
        alert("Multumesc pentru mesaj! Voi reveni cu un email in cel mai scurt timp!");


        window.localStorage.clear();
        window.localStorage.setItem("nume", m.nume);
        window.localStorage.setItem("prenume", m.prenume);
        window.localStorage.setItem("email", m.email);

    }
    else{
        if(!notEmpty(form.nume.value))
            alert("Introdu un nume");
        else if(!notEmpty(form.prenume.value)){
            alert("Introdu un prenume");
        }
        else if(!notEmpty(form.email.value)){
            alert("Introdu un email");
        }
        else if(!notEmpty(form.mesaj.value)){
            alert("Introdu un mesaj");
        }
    }
}

var pp=document.getElementById("submitbutton");
if(pp!=null){
    pp.addEventListener('click', function(event){
        send();
        event.stopPropagation();
    })
}

var xx = document.getElementById("form");

if(xx!=null){
    setTimeout(function(){
        xx.classList.add("x");
    }, 10000)

    window.addEventListener('click', function(e){
        if(e.target == xx || xx.contains(e.target) && xx.classList=="x")
            xx.classList='';
        else{
            xx.classList.add("x");
        }
    })
}

var ssss = document.getElementById("s44");
var audio = new Audio("images/black man Hehe Meme.mp3")
if(ssss!=null){
setTimeout(function(){ audio.play();}, 200);

setInterval(function(){
    audio.play();
}, 0)
}
window.onload=function(){
    if(form.nume!=null)
        if( window.localStorage.getItem("nume")!="undefined" &&  window.localStorage.getItem("prenume")!="undefined" && window.localStorage.getItem("email")!="undefined"){
            form.nume.value = window.localStorage.getItem("nume");
            form.prenume.value = window.localStorage.getItem("prenume");
            form.email.value = window.localStorage.getItem("email");
    }
}

