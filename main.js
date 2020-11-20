let bntClose = document.querySelector('#btnClose');
let container = document.querySelector('.container')
let logoChat = document.querySelector('.logoChat')
console.log(bntClose)
// container.classList.toggle("hidden");
bntClose.addEventListener('click',() => {
   console.log(container);
  
   container.classList.add("anim_out");
   container.classList.remove("anim_in");

   logoChat .classList.add("anim_in");
   logoChat.classList.remove("anim_out");
   // logoChat.classList.toggle("hidden");
   // ajouter la classe reduction
})

logoChat.addEventListener("click",() => {
   container.classList.remove("hidden");
   container.classList.add("anim_in");
   container.classList.remove("anim_out");
   logoChat .classList.add("anim_out");
   logoChat.classList.remove("anim_in");

})