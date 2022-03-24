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