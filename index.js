var menuList = document.getElementById("menuList");

function togglemenu() {

    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "10000px";
        var row = document.getElementById("smth");
        row.style.top="100px";
    }
    else{
        menuList.style.maxHeight = "0px";
        var row = document.getElementById("smth");
        row.style.top="25px";
    }

}

var dropdown = document.getElementById("drp");

function toggledrop(){
    if(dropdown.style.display=="none"){
        var x = document.getElementById("ss");
        x.style.display="none";
        dropdown.style.display="block";
        
    }
    else{
        dropdown.style.display="none";
    }
}

var drpdown = document.getElementById("ss");

function toggledrp(){
    if(drpdown.style.display=="none"){
        var x = document.getElementById("drp");
        x.style.display="none";
        drpdown.style.display="block";
    }
    else{
        drpdown.style.display="none";
    }
}

let desprelikes = 0;

function desprelike(){
    localStorage.setItem("desprelikes", desprelikes.toString());
    desprelikes=localStorage.getItem("desprelikes")+1;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("ica");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
if(img!=null)
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

// Get the <span> element that closes the modal
var span = document.getElementById("close");

// When the user clicks on <span> (x), close the modal
if(span!=null)
span.onclick = function() {
  modal.style.display = "none";
    }

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function gotocv(){
    window.location.href = "cv.html";
}