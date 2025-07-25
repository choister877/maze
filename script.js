const layout = [
  'W','W','W','W','W',
  'W',' ',' ',' ','W',
  'W',' ','W',' ','W',
  'W','P','W','G','W',
  'W','W','W','W','W',
];

let playerIndex = layout.indexOf("P");
const maze = document.getElementById("maze");

function makeMaze() {
  maze.innerHTML = ' ';
  layout.forEach((cell, index) => {
    const div = document.createElement('div');
    if (cell === 'W') {
      div.classList.add('wall');
    }
    if (cell === 'P'){
      div.classList.add('player');
      div.textContent = '🥰';
    }
    if (cell === 'G'){
      div.classList.add('goal')
      div.textContent = '🥅';
    }
    maze.appendChild(div);
});
}

makeMaze();


const width = 5;
function movePlayer(direction){
  let targetIndex = playerIndex;

 if (direction === 'ArrowUp'){
   targetIndex -= width;
 } 
 if(direction === 'ArrowDown'){
  targetIndex += width;
}

if (direction === 'ArrowLeft'){
  targetIndex-=1;
}
if (direction ==='ArrowRight'){
  targetIndex+= 1;
}
  if (layout[targetIndex] !=='W' && targetIndex >= 0 && targetIndex<layout.length) {
    if (layout[targetIndex] === 'G') {
      document.getElementById('message').textContent = "you won";
    }
  layout[playerIndex] = " ";
  layout[targetIndex] = 'P';
  playerIndex = targetIndex;
  makeMaze();
  }

}


document.addEventListener("keydown",(e)=>{
  movePlayer(e.key);
});

makeMaze();



