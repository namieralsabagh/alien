var chest = 0;
var bomb = 0;
var playGame = true;




const treasure = (boxId) => {
  if (playGame === true) {
    if (chest === boxId) {
      alert("You found the Alien!");
      document.getElementById(boxId).innerHTML = "👽";
      playGame = false;
    } else if (bomb === boxId){
      alert("You got blasted!");
      document.getElementById(boxId).innerHTML = "🔫";
      playGame = false;
    } else {
      document.getElementById(boxId).innerHTML = "🔭";
    }


  }


}
while (chest == bomb) {
    chest = Math.floor(Math.random() * 25);
    bomb = Math.floor(Math.random() * 25);
  }



