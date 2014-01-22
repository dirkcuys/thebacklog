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

<canvas id="canvas" width="500" height="500"></canvas>

<script type="text/javascript" src="//rawgithub.com/dirkcuys/octasphere/master/js/gl-matrix.js"></script>
<script type="text/javascript" src="//rawgithub.com/dirkcuys/octasphere/master/js/draw.js"></script>
<script id="shader-fs" type="x-shader/x-fragment">
    precision mediump float;
    varying vec3 vBC;

    void main(void) {
      if(any(lessThan(vBC, vec3(0.09)))){
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      }
      else{
        gl_FragColor = vec4(1.0, 1.0, 1.0, 0.8);
      }

    }
</script>

<script id="shader-vs" type="x-shader/x-vertex">
    varying vec3 vBC;
    attribute vec3 aVertexPosition, aBaryCentric;

    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;

    void main(void) {
        vBC = aBaryCentric;
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    }
</script>

<script type="text/javascript">
  startWebGl();
</script>

I have no idea why octospheres aren&#8217;t more popular? Until my experiment, I&#8217;ve never knowingly encountered one?

You can find the code on [github!][1]

 [1]: https://github.com/dirkcuys/octasphere

