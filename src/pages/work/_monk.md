mönk is an independent design practice based between Beirut and London, offering design solutions in visual identities, art direction, UI/UX, and web design. The studio is also involved in archiving; and the production of [museum-grade prints](https://www.google.com/search?q=what+are+museum+quality+prints).

### \(TEAM)

mönk was founded by **Ahmad Rajab** and **Madina El-Mostafa**. I was recently incorporated into the team. While it is true that we are multidisciplinary creatives and visual artists by nature, each of us is specialized in the following set of skills:

- **Ahmad Rajab** - Visual Identities and Graphic Design
- **Madina El-Mostafa** - UI/UX and Graphic Design
- **Alejandro Romano** - Web Engineering

### Web Tech

We needed something easy to manage, yet flexible enough to allow for a great degree of freedom when it comes to design and technical decisions. All this, while providing a good user experience for a large global audience. 

We went for Shopify as the backend and ecommerce platform. Having previous experience with it from [martyr⁠—](/work/martyr), we felt at home with the process. 

### Smooth as butter

Speed is important, but it's often overlooked by many modern websites across the web.

It's somewhat easy to create a speedy website when the requirements are as simple as a few images and some text – and even in this context, some people may go to extremes and add complexity to such a straightforward task!

But what happens when a project requires special features, like 3D objects, animations, and touch interactions?

Simplicity is key. The less the browser has to process, the faster it will behave. The thing is, achieving simplicity is not an intuitive task. I would argue it's far easier to make something complex and complicated rather than simple. Simplicity is hard.

It takes a significant amount of experience, knowledge, trial and error, and lateral thinking through other disciplines to develop a good sense of how to approach specific challenges.

From the developer's viewpoint, it's easy to be seduced by external solutions promising to give you a well-crafted paradise with minimal effort. But at what cost? Slow, clunky sites can make almost anyone run away frustrated by their experience.

Luckily, modern web browsers offer a good arsenal of possibilities in both performance and UI/UX features needed for some of the elements implemented in mönk. It's a matter of getting rid of the short-term, low-effort mentality. Separating the wheat from the chaff takes courage and patience.

### Libraries

We try to limit the usage of external libraries as much as possible unless they offer a substantial positive balance between development benefits, speed, and user features. This results in only the following libraries being used extensively to make mönk possible:

- [Keen Slider](https://keen-slider.io/) – carousels to showcase projects and prints
- [swup](https://swup.js.org/) – seamless page-transitions
- [\<model-viewer\>](https://modelviewer.dev/) –  photorealistic 3D model loader to showcase the prints available in shop. We made a [custom version](https://github.com/Arecsu/model-viewer/) to add some features we needed for mönk.
- [Alpine.js](https://alpinejs.dev/) – helper for UI interactions in the site

For the rest of the features we needed, mönk makes use of a lot of handcrafted, in-house custom code.

### The video autoplay challenge

The sliders on the homepage often feature high-resolution videos that should behave like traditional GIFs. That is, they should autoplay properly.

Unfortunately, there could be plenty of videos in a single page. We cannot simply enable autoplay. We tried it, and it tanked the performance to oblivion. Playing more than 8 videos at the same time made almost every device very mad.

Even if we managed to only play the video that is currently being viewed, there are times when browsers will simply refuse to do so. This is due to browsers trying their best to optimize the playback process within the constraints of processing power, albeit not perfectly. And it seems like we are pushing the limits here, particularly on smartphones.

Given this scenario, we had to develop custom code, workarounds, and hacks to decide when to download, load, and play a given video. Part of why we chose [Keen Slider](https://keen-slider.io/)  is because of its high level of customizability. It helps a lot in our duty to load media as smoothly as possible without compromising on details and visuals.

### Photorealistic 3D visuals

[Soufyan Boubker](https://www.instagram.com/soufyanboubker/) was in charge of the texturing, modeling, animation, and environment of the interactive 3D prints featured at mönk. A highly recommended artist to keep an eye on.

You can play with the models in any of the products listed on the store. For instance, here's the link to my favorite one: [Mc Lovin' 04](https://www.monkstudeyo.com/products/mc-lovin-04). Move the slider to the left or right to see it. It is such a joy to use!

When I was handed the 3D assets, they featured uncompressed, high-resolution textures. The materials and topology workflow were designed to be viewed and rendered under Blender. They needed to be converted and exported in a format that could be understood by  [\<model-viewer\>](https://modelviewer.dev/).

At first, the resulting files were around 100 MB for each print. While this size is understandable for the aforementioned usage under Blender, it's unbearable to be downloaded and processed on the web, where times and processing power are limited.

In my research, I came up with optimization techniques borrowed from the videogames industry. The crucial step was to compress the textures while keeping the quality as high as possible. This took weeks of research and testing.

We ended up with 2 MB files for each print. This is about a 98% reduction in file size, and the loss of quality has been minimal! This is also true for the environment map that lights up the prints: from 6.5 MB to just 0.25 MB, thanks to the use of Ultra HDR for this technique to work.

Effects like bloom and tone mapping are being used to create a cinematic-like visual as photorealistic as possible, even on mobile devices.

### NOT THE END

Even with all those features, the site loads quickly, feels fast, and looks awesome. All of this is possible due to a combination of new browser features and old-school, battle-tested programming patterns and hacks throughout the code.

mönk is an ongoing project, and we continue to find new ways to add features and cool stuff to the site.

Thanks to Ahmad and Madina for trusting me! ♥
