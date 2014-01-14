---
title: Octasphere
author: dirk
layout: post
permalink: /2012/11/09/octasphere/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2012/11/octasphere.html
categories:
  - code
  - javascript
  - webgl
---
A while back I played a bit with webgl and decided that I want to draw a sphere.UV spheres have their problems, so I considered doing a icosphere. But to draw an icosphere you have to start with and icosahedron and then subdivide. Generating the initial coordinates for the icosahedron felt like too much work for the lazy me.

Instead I opted to start with an octahedron and subdivide from there. An octahedron has a modest 6 coordinates that you need to start with and they happen to lie on the primary axis!



I have no idea why octospheres aren&#8217;t more popular? Until my experiment, I&#8217;ve never knowingly encountered one?

You can find the code on [github!][1]

 [1]: https://github.com/dirkcuys/octasphere