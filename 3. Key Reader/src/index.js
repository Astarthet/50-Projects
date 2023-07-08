var key = document.querySelectorAll(".key").length;
var title = document.getElementById("title");

title.addEventListener("click", ()=> {
  var newSound = new Audio("music/onload.mp3");
  newSound.play();
})

for (var i = 0; i < key; i++) {
  document
    .querySelectorAll(".key")
    [i].addEventListener("click", function () {
      var thisClick = this.innerHTML;
      toggleClass(thisClick);
    });
}

document.addEventListener("keypress", (event) => {
  var keyValue = event.key;
  toggleClass(keyValue.toUpperCase());
});


function toggleClass(keyPres) {
  switch (keyPres) {
    case "0":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "1":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "2":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "3":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "4":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "5":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "6":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "7":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "8":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "9":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "Q":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "W":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "E":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "R":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "T":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "Y":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "U":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "I":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "O":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "A":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "S":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "D":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "F":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "G":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "H":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "J":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "K":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "L":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "Ñ":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "Z":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "X":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "C":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "V":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "B":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "N":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
      case "M":
      var addId = document.querySelector(`.key${keyPres}`);
      addId.classList.add("prueba");
      setTimeout(function(){
      addId.classList.remove("prueba");
      }, 100)
      break;
  }
}
