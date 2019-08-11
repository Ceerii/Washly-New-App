let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal-one");
let closeBtn = document.querySelector(".close-btn");
let secondcloseBtn = document.getElementById("close-btn");
let secondmodalbtn = document.getElementById("modal-second-button");
let secondmodal = document.querySelector(".modal-two");

modalBtn.onclick = function(){
  modal.style.display = "block"
}
secondmodalbtn.onclick = function(){
  secondmodal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
  secondmodal.style.display ="none"
  
}
secondcloseBtn.onclick = function(){
  secondmodal.style.display ="none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
window.onclick = function(e){
  if(e.target == secondmodal){
    secondmodal.style.display ="none"
  }
}
function toggleToSignup(){
  openSignin();
  closeModal();
}
function toggleToSignin(){
  closesignIn();
  showModal();
}

function showModal(){
  document.querySelector(".modal-two").style.display="block";
}
function openSignin(){
  
  document.querySelector(".modal-one").style.display="block";
}
function closeModal() {
document.querySelector(".modal-two").style.display="none";
}
function closesignIn(){
  document.querySelector(".modal-one").style.display="none";
}
function showInfoModal(){
  document.querySelector(".infoModal").style.display="block";
}
