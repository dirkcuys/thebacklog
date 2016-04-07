---
title: octasphere
author: dirk
layout: page
---
<div dir="ltr" style="text-align: left;">
  A while back I played a bit with webgl and decided that I want to draw a sphere.
</div>

<div dir="ltr" style="text-align: left;">
</div>

<div dir="ltr" style="text-align: left;">
  <p>
    UV spheres have their problems, so I considered doing an icosphere. But to draw an icosphere you have to start with and icosahedron and then subdivide. Generating the initial coordinates for the icosahedron felt like too much work for the lazy me.
  </p>
  
  <p>
    Instead I opted to start with an octahedron and subdivide from there. An octahedron has a modest 6 coordinates that you need to start with and they happen to lie on the primary axis!
  </p>
  
  <p>
    <br /> I have no idea why octospheres aren&#8217;t more popular? Until my experiment, I&#8217;ve never knowingly encountered one?
  </p>
  
  <p>
    You can find the code on <a href="https://github.com/dirkcuys/octasphere">github!</a>
  </p>
</div>