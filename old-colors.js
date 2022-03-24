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