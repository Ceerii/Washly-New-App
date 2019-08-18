// let modalBtn = document.getElementById("modal-btn");
// let modal = document.querySelector(".modal-one");
// let closeBtn = document.querySelector(".close-btn");
// let secondcloseBtn = document.getElementById("close-btn");
// let secondmodalbtn = document.getElementById("modal-second-button");
// let secondmodal = document.querySelector(".modal-two");

// modalBtn.onclick = function(){
//   modal.style.display = "block"
// }
// secondmodalbtn.onclick = function(){
//   secondmodal.style.display = "block"
// }
// closeBtn.onclick = function(){
//   modal.style.display = "none"
//   secondmodal.style.display ="none"
  
// }
// secondcloseBtn.onclick = function(){
//   secondmodal.style.display ="none"
// }
// window.onclick = function(e){
//   if(e.target == modal){
//     modal.style.display = "none"
//   }
// }
// window.onclick = function(e){
//   if(e.target == secondmodal){
//     secondmodal.style.display ="none"
//   }
// }
// function toggleToSignup(){
//   openSignin();
//   closeModal();
// }
// function toggleToSignin(){
//   closesignIn();
//   showModal();
// }

// function showModal(){
//   document.querySelector(".modal-two").style.display="block";
// }
// function openSignin(){
  
//   document.querySelector(".modal-one").style.display="block";
// }
// function closeModal() {
// document.querySelector(".modal-two").style.display="none";
// }
// function closesignIn(){
//   document.querySelector(".modal-one").style.display="none";
// }
// function showInfoModal(){
//   document.querySelector(".infoModal").style.display="block";
// }
// result-page modal 
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }


trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);

// result-sign-in-modal
var modalone = document.querySelector(".modal-one");
var start = document.querySelector(".start");
var closeBtn = document.querySelector(".close-btn");

function openMod() {
    modalone.classList.toggle("open-modal");
}

// function clickWindow(event) {
//     if (event.target === modalone) {
//         openMod();
//     }
// }


start.addEventListener("click", openMod);
closeBtn.addEventListener("click", openMod);
// window.addEventListener("click", clickWindow);

// result-sign-up-modal
var modaltwo = document.querySelector(".modal-two");
var open = document.querySelector(".open");
var closeBtns = document.querySelector(".closebtn");

function showMod() {

    modaltwo.classList.toggle("open-up-modal");
}

// function windowOpen(event) {
//     if (event.target === modaltwo) {
//         showMod();
//     }
// }


open.addEventListener("click", showMod);
closeBtns.addEventListener("click", showMod);
// window.addEventListener("click", windowOpen);
// custom-order

var modalthree = document.querySelector(".modal-three");
var order = document.querySelector(".custom-order");
var closecustom = document.querySelector(".custombutton");
var closedcustom = document.querySelector(".secondcustombutton")


function showCustom() {
  modalthree.classList.toggle("open-custom");
}
order.addEventListener("click", showCustom);
closecustom.addEventListener("click", showCustom);
closedcustom.addEventListener("click",showCustom);

// index.html                                              var modalone = document.querySelector(".modal-one");
