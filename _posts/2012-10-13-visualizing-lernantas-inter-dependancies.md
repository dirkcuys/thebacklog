---
title: 'Visualizing Lernanta&#8217;s inter-dependancies'
author: dirk
layout: post
permalink: /2012/10/13/visualizing-lernantas-inter-dependancies/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2012/10/visualizing-lernantas-inter-dependancies.html
categories:
  - canvas
  - code
  - javascript
---
This project happened during a flight from Berlin to Durban on the 1st of October. The data comes from a small project that I&#8217;ve done earlier, but the visualization using HTML5 canvas happened in transit!

<canvas id="id-circle-graph" width="1000" height="900">Circle graph</canvas>
<script src="//raw.github.com/dirkcuys/b2d/master/js/jquery-1.7.1.min.js"></script>
<script src="//raw.github.com/dirkcuys/b2d/master/js/data.js"></script>
<script src="//raw.github.com/dirkcuys/b2d/master/js/circle-graph.js"></script>
<script type="application/javascript">
  $(document).ready(function(){
    draw();
  })
</script>

Update: Forgot to say that the code is available on [github][1]

 [1]: https://github.com/dirkcuys/b2d/
