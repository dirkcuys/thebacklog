---
title: Isla falta
author: dirk
layout: page
---
Every man (and woman) should have an island. Or at least that is what I think!

The idea came from a few places, first &#8211; at a modelling and simulation conference someone gave a talk about an island created by NATO to use with training simulations.

Second, I read about a game, [The Wittness][1], that is set entirely on a single Island. Maybe games like Myst and Riven, [My Min City][2] and a bunch of others also had an influence.

And thirdly, the concept of procedurally generating terrain, islands and even complete planets and environments greatly intrigues me.

I started by playing around in blender and after some unsatisfying results I took a step back. Direct manipulation is nice, but I also want to create something generative.

[<img class="alignnone size-medium wp-image-187" alt="isla-falta" src="http://thebacklog.net/wp-content/uploads/2013/10/isla-falta-300x170.png" width="300" height="170" />][3]

I started by drawing a more map like island using Inkscape, below is the result:

[<img class="alignnone size-medium wp-image-185" alt="isla-falta-map" src="http://thebacklog.net/wp-content/uploads/2013/10/isla-falta-map-300x251.png" width="300" height="251" />][4]

After this I exported the map to gimp and played with the raster image a little:

[<img class="alignnone size-medium wp-image-186" alt="isla-falta-hm-1024-918" src="http://thebacklog.net/wp-content/uploads/2013/10/isla-falta-hm-1024-918-300x268.png" width="300" height="268" />][5]

This feels like it is getting somewhere. I can imagine seeing the map displayed somewhere and the height map looks nice, but the actual terrain is rather bland and when yo look at it closely it is very artificial.

[<img class="alignnone size-medium wp-image-192" alt="falta-render" src="http://thebacklog.net/wp-content/uploads/2013/10/falta-render-300x168.png" width="300" height="168" />][6]

Next step, start writing code!

I decided to experiment with the diamond square algorithm. It can be used to generate terrains that are semi realistic and it is also possible to seed to algorithm to give some shape to the result! I implemented two flawed versions of the algorithm, one vanilla version and one seeded version. The image below shows the output from the different implementations. The code is written in python and lives in [github][7].

[<img class="alignnone size-medium wp-image-190" alt="combined-small" src="http://thebacklog.net/wp-content/uploads/2013/10/combined-small-300x75.png" width="300" height="75" />][8]

And this is where I&#8217;m at at the moment. The height map can be used to generate a 2.5D terrain that looks somewhat realistic. It still feels artificial, the peaks doesn&#8217;t look that great and the resolution of the height map is static, but it&#8217;s getting better!

[<img class="alignnone size-medium wp-image-197" alt="falta-render-2" src="http://thebacklog.net/wp-content/uploads/2013/10/falta-render-2-300x168.png" width="300" height="168" />][9]

So what is next? I&#8217;m working on a WebGL version, just so that it can all happen in your browser. Creation of the seed image will still be up to you. Next I would like to consider implementing a dynamic level of detail (LOD) algorithm that can keep on generating realistic terrain when you get closer. Then there are texturing, foliage, etc.

And that&#8217;s all for now.

 [1]: http://the-witness.net
 [2]: http://myminicity.com/
 [3]: http://thebacklog.net/wp-content/uploads/2013/10/isla-falta.png
 [4]: http://thebacklog.net/wp-content/uploads/2013/10/isla-falta-map.png
 [5]: http://thebacklog.net/wp-content/uploads/2013/10/isla-falta-hm-1024-918.png
 [6]: http://thebacklog.net/wp-content/uploads/2013/10/falta-render.png
 [7]: https://github.com/dirkcuys/diamondpy
 [8]: http://thebacklog.net/wp-content/uploads/2013/10/combined-small.png
 [9]: http://thebacklog.net/wp-content/uploads/2013/10/falta-render-2.png