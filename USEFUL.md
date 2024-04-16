
https://www.joshwcomeau.com/css/full-bleed/
https://www.joshwcomeau.com/css/custom-css-reset/
marquee - https://codepen.io/Knovour/pen/boJNPN


https://web.dev/articles/font-best-practices
If ensuring text is displayed in a web font is a top priority: Use font-display: block but make sure to deliver the font early enough that it minimises the delay of the text. The downside of this is the initial text display will be delayed. Note despite this deplay, it can still cause a layout shift as the text is actually drawn invisible, and the fallback font space is therefore used to reserve the space. Once the web font loads, this may require difference space and hence a shift. This may, however, be a less jarring shift than font-display: swap as the text itself won't be seen to shift.
https://web.dev/articles/css-size-adjust