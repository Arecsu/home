let root = document.documentElement;

// dark theme backgrounds
// discarded via CSS, no me gustan. RIP.
const dark_colors = [
   '#1a1a1a',
   '#0e242a',
   '#0b2c23',
   '#33172c',
   '#540e0e',
   '#09094d',
   '#965601',
];

// light theme backgrounds
const light_colors = [
   '#e7f3f3',
   '#f0ff82',
   '#e2dbff',
   '#ffe5cc',
   '#b2e5ff',
   '#ffb5b5',
   '#ffc521',
];

function get_color(color_array) {
   const random = Math.floor(Math.random() * color_array.length);
   return color_array[random];
}
root.style.setProperty(
   '--light-theme-background',
   get_color(light_colors)
);
root.style.setProperty(
   '--dark-theme-background',
   get_color(dark_colors)
);


let current_color;
function random_color() {
   let random;
   while (true) {
      random = Math.floor(Math.random() * colors.length);

      if (current_color !== random) {
         current_color = random;
         break;
      }
   }
   change_color(random);
}

function change_color(color) {
   root.style.setProperty('--color-background', colors[color][0]);
   root.style.setProperty('--color-text', colors[color][1]);
   root.style.setProperty('--color-scheme', colors[color][2]);
}

function next_color() { }

function button_color() {
   buttonAudio.currentTime = 0;
   buttonAudio.play();
   change_color();
}

const button_switcher = document.getElementById('button-switcher');
function buttonDownPlay(e) {
   e.preventDefault();
   buttonDown.currentTime = 0;
   buttonDown.play();
}
function buttonUpPlay(e) {
   e.preventDefault();
   buttonUp.currentTime = 0;
   buttonUp.play();
   next_background();
}
button_switcher.addEventListener(
   'touchstart',
   buttonDownPlay,
   false
);
button_switcher.addEventListener(
   'mousedown',
   buttonDownPlay,
   false
);
button_switcher.addEventListener('touchend', buttonUpPlay, false);
button_switcher.addEventListener('mouseup', buttonUpPlay, false);

// const buttonAudio = new Audio('smw_stomp.wav');
// const buttonUp = new Audio('press-up.mp3');
// const buttonDown = new Audio('press-down.mp3');
// const buttonAudio = new Audio('switch-on.mp3');
