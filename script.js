let root = document.documentElement;

function realVH() {
   root.style.setProperty('--real-vh', (window.innerHeight) + "px");
}

window.addEventListener('resize', () => {
   realVH();
});
realVH();
const buttonAudio = new Audio('assets/sounds/press.mp3');
const imgKillAudio = new Audio('assets/sounds/stomp.mp3');

window.addEventListener('DOMContentLoaded', (event) => {
   var imageArray = new Array(
      'assets/backgrounds/graph_paper.png',
      'assets/backgrounds/megaman.png',
      'assets/backgrounds/clouds.jpg',
      'assets/backgrounds/computer.gif',
      'assets/backgrounds/dystopia.gif'
   );

   for (var i = 0; i < imageArray.length; i++) {
      var tempImage = new Image();
      tempImage.src = imageArray[i];
   }
});

let colors = [
   // white text
   ['#ffc521', '#1d1d1d', 'dark'],
   [
      "linear-gradient(rgb(24 0 27 / 67%), rgb(0 0 0 / 19%)), center bottom 0 / cover no-repeat url('assets/backgrounds/computer.gif')",
      '#e9e9e9',
      // '#e9e9e9',
      'dark',
   ],
   [
      "linear-gradient(rgb(151 226 242 / 65%), rgb(51 139 134 / 25%)), center center / cover no-repeat url('assets/backgrounds/clouds.jpg')",
      '#1d1d1d',
      'light',
   ],
   [
      "linear-gradient(rgb(30 0 0 / 64%), rgb(0 0 0 / 29%)), center bottom 0 / cover no-repeat url('assets/backgrounds/dystopia.gif')",
      '#e9e9e9',
      // '#e9e9e9',
      'dark',
   ],
   [
      "right 0 bottom 0 / 36px url('assets/backgrounds/graph_paper.png'), linear-gradient(#ffffff, #ffffff)",
      '#1d1d1d',
      // '#e9e9e9',
      'dark',
   ],
   [
      "left 70% bottom 0 / cover no-repeat url('assets/backgrounds/megaman.png'), linear-gradient(#000000, #000000)",
      '#e9e9e9',
      // '#e9e9e9',
      'dark',
   ],
   ['#1a1a1a', '#e9e9e9', 'dark'],
   // ['#0b2c23', '#e9e9e9', 'dark'], // dark green
   ['#33172c', '#e9e9e9', 'dark'], // dark fucsia
   //['#540e0e', '#e9e9e9', 'dark'], // kinda red
   ['#09094d', '#e9e9e9', 'light'],
   //['#965601', '#e9e9e9', 'dark'], // dark yellow

   // black text
   ['#0e242a', '#e9e9e9', 'dark'],
   ['#e7f3f3', '#1d1d1d', 'light'],
   ['#f0ff82', '#1d1d1d', 'light'],
   ['#e2dbff', '#1d1d1d', 'dark'],
   ['#ffe5cc', '#1d1d1d', 'light'],
   //['#b2e5ff', '#1d1d1d', 'light'], // blue
   ['#ffb5b5', '#1d1d1d', 'light'],
];

let emojis = ["🐦", "🦜", "🐤", "🦗", "🐟", "🦩"]

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
   }
}

// random array order every load
// why calculate a random index every single time the button is pressed?
// shuffleArray(colors);
shuffleArray(emojis);

function update_background(oddEven, prevIndex, index) {
   if (oddEven & 1) {
      // ODD
      root.style.setProperty('--opacity-background-2', '0');
      setTimeout(() => {
         root.style.setProperty(
            '--color-background-2',
            colors[index][0]
         );
      }, 155);
   } else {
      // EVEN
      root.style.setProperty('--opacity-background-2', '1');
      setTimeout(() => {
         root.style.setProperty(
            '--color-background-1',
            colors[index][0]
         );
      }, 155);
   }

   root.style.setProperty('--color-text', colors[prevIndex][1]);

   //root.style.setProperty('--color-scheme', colors[index][2]);
   /*
   if (colors[index][1] === '#1d1d1d') {
      root.style.setProperty('--img-filter', 'invert(1)');
   } else {
      root.style.setProperty('--img-filter', 'invert(0)');
   }
   */
}

function local_save(item, value) {
   localStorage.setItem(item, JSON.stringify(value));
}

function local_get(item) {
   return JSON.parse(localStorage.getItem(item));
}

let currentIndex;
let prevIndex;
let oddEven = 1;
const amountColors = colors.length;

const version_script = 2;
const version_local = localStorage.getItem("version");

if (version_script > version_local || version_script < version_local) {
   prevIndex = 0;
   currentIndex = 1;
   local_save("prevIndex", prevIndex);
   local_save("currentIndex", currentIndex);

} else if (version_script == version_local) {
   prevIndex = local_get("prevIndex");
   currentIndex = local_get("currentIndex");
}


console.log(prevIndex);
console.log(currentIndex);
localStorage.setItem("version", version_script);

root.style.setProperty('--color-text', colors[prevIndex][1]);
root.style.setProperty('--color-background-1', colors[prevIndex][0]);
root.style.setProperty('--color-background-2', colors[currentIndex][0]);


function next_background() {
   oddEven = oddEven == 0 ? 1 : 0;
   prevIndex = currentIndex;
   currentIndex =
      currentIndex == amountColors - 1 ? 0 : currentIndex + 1;
   update_background(oddEven, prevIndex, currentIndex);
   console.log(prevIndex);
   console.log(currentIndex);
   local_save("prevIndex", prevIndex);
   local_save("currentIndex", currentIndex);
}

function button_pressed() {
   buttonAudio.currentTime = 0;
   buttonAudio.play();
   next_background();
}
function killImg() {
   imgKillAudio.play();
   document.querySelector("#img-text-hidden").innerHTML += emojis[0];
   document.querySelector("#img-wrapper").classList.add("hide-img-wrapper");
   setTimeout(() => { document.querySelector("#img-wrapper").style.display = 'none'; }, 500);
   setTimeout(() => { document.querySelector("#img-text-hidden").classList.add("show"); }, 800);
}