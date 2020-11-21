let membres = [
   {firstname : 'Tony', lastname : 'Gencyl', photo : 'photo1' },
   {firstname : 'Ella', lastname : 'Danloss', photo : 'photo2' },
   {firstname : 'Delphine', lastname : 'Talaron', photo : 'photo3' },
   {firstname : 'Codeur', lastname : 'Duruti', photo : 'photo1' }
]

//Smiley
let smileyGrid = document.querySelector('.smileyGrid')
for (l=0; l<4 ; l++){
   for (c=0; c<3 ; c++){
      const id = 128512 + l+c;
     // smileyGrid.insertAdjacentHTML('beforeend',`<p>&#${id}</p>`)
      let newsmiley = document.createElement("p");
      console.log(newsmiley)
      // newDate.classList.add("timeCard");
      newsmiley.innerHTML = `&#${id}`;
      smileyGrid.appendChild(newsmiley)
      newsmiley.addEventListener('click',function(){
         inputMessage.value += this.textContent;  
         smileyGrid.classList.toggle('hidden');   
      })
   }
}

let buttons = document.querySelectorAll('button')
for (i=0 ; i<buttons.length ; i++){
   let b = buttons[i];
   b.addEventListener("click", function(event){
      event.preventDefault()  // enleve les action par defaut des boutons
   });
}


let bntClose = document.querySelector('#btnClose');
let bntSend = document.querySelector('#btnSend');
let bntSmiley = document.querySelector('#btnSmiley');
bntSmiley.addEventListener('click',(e) => {
   smileyGrid.classList.toggle('hidden');   
});

let inputMessage = document.querySelector('#inputMessage');
let container = document.querySelector('.container');
let logoChat = document.querySelector('.logoChat');
let chat = document.querySelector('.chat');

bntSend.addEventListener('click',(e) => {
   sendMessage(membres[3],inputMessage.value)
   inputMessage.value = "";
});

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

function sendMessage(object,text){
   addMessage(object,text);
};
function addMessage(object,text){
  
   // Choix de direction


   let direction ="right";
   if (chat.children.length%2 === 0) direction = 'left'
   
   let e = `
   <div class="containerCard ${direction}">
   <div class="card ${direction}">
      <div class="photo ${object.photo}"></div>
      <div class="message">
         <div class="profilCard">
            <p class="nameCard">${object.lastname} ${object.firstname}</p>
            <p class = "timeCard"> 20/11 18:21</p>
         </div>
         <p class="text">${text}</p>
      </div>
   </div>
   </div>` 
   
   chat.insertAdjacentHTML('beforeend',e)

   // let newContainer = document.createElement("div");
   // newContainer .classList.add("containerCard");
   // newContainer .classList.add(direction);
   
   // let newCard = document.createElement("div");
   // newCard.classList.add("card");
   // newCard.classList.add(direction);
   // newContainer.appendChild(newCard);

   // let newPhoto = document.createElement("div");
   // newPhoto.classList.add("photo");
   // newPhoto.classList.add("photo1");
   // newCard.appendChild(newPhoto);

   // let newMessage = document.createElement("div");
   // newMessage.classList.add("message");
   // newCard.appendChild(newMessage);
   
   // let newProfilCard = document.createElement("div");
   // newProfilCard.classList.add("profilCard");
   // newMessage.appendChild(newProfilCard);
   
   // // Nom 
   // let newNameCard = document.createElement("p");
   // newNameCard.classList.add("nameCard");
   // newNameCard.innerText = "Toto le hero"
   // newProfilCard.appendChild(newNameCard);
   // // date & time
   // let newDate = document.createElement("p");
   // newDate.classList.add("timeCard");
   // newDate.innerText = "23/11 23:50"
   // newProfilCard.appendChild(newDate);

   // // Message

   // let newText = document.createElement("p");
   // newText.classList.add("text");
   // newText.innerText = text;
   // newMessage.appendChild(newText);


   // chat.appendChild(newContainer);

}

setInterval(botMessage,2000)
function botMessage(){
   let id = getRandomInt(membres.length)
 //  sendMessage(membres[id],'test')
}

function getRandomInt(max) {
   return Math.floor(Math.random() * Math.floor(max));
 }
 