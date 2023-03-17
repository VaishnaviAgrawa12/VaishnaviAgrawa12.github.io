let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("active");
    // document.getElementById('home').style.display = "none";
};

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
};

function resumeDownload(){
   
    window.open("https://drive.google.com/file/d/1POiExxXcuaRco7p07sR1OLrHwMzDxEOr/view?usp=sharing","_blank");
  }


//   window.onscroll = function() {myFunction()};


// // Get the navbar
// var navbar = document.getElementsByClassName("page-header");
// let bg = document.getElementsByClassName("page-header")

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {

// if (window.pageYOffset >= sticky) {
//   navbar.classList.add("sticky");
 
// } else {
//   navbar.classList.remove("sticky");

// } 



// }

// function onMenuClick() {
//   var navbar = document.getElementById('navigation-bar');
//   var responsive_class_name = 'responsive'
//   navbar.classList.toggle(responsive_class_name)
  
//   var x = document.querySelector('.nav-bar.responsive');
// if (x.style.display === "block") {
//   x.style.display = "none";
// } else {
//   x.style.display = "block";
// }
// $('.js-scroll-trigger').click(function() {
// $('.nav-bar.responsive').collapse('hide');
// });
 
// }

// function myFunction2() {
// var x = document.getElementById("navigation-bar");
// var responsive_class_name = 'responsive'
//   navbar.classList.toggle(responsive_class_name)
  
//   // var x = document.getElementsByClassName('responsive');
// if (x.style.display === "block") {
//   x.style.display = "none";
// } else {
//   x.style.display = "block";
// }

// function hide(){
//   responsive_class_name = '';
// }

// }
// window.addEventListener('scroll', function () {
// var scrollAmount = window.scrollY || document.documentElement.scrollTop;
// if (scrollAmount > 0)
//   document.querySelector('.homeLeft').style.display = 'none';
// else
//   document.querySelector('.homeLeft').style.display = 'block';
// });