---
title: Visualization using D3
author: dirk
tags:
- d3
- dataviz
permalink: /2014/01/26/visualization-using-d3/
layout: post
---

Two visualization I created for [P2PU](https://www.p2pu.org) from data for [Play with your music](http://www.playwithyourmusic.org). They are used [here](https://info.p2pu.org/2014/01/13/how-we-used-the-echonest-api-for-engagement-learning/).

A bubble diagram using a force layout:

<svg id="top100" class="large-12 columns"></svg>

A graph using a force layout:

<svg id="user_graph" class="large-12 columns"></svg>

Go ahead, click on one of the nodes on the second and drag it around a little :) And the curious reader is encouraged to 'view source'.

<script charset="utf-8" type="text/javascript" src="https://d3js.org/d3.v3.min.js"></script>
<script src="/js/top100.js"></script>
<script src="/js/create_user_graph.js"></script>

<script>
  window.addEventListener('load', () => {
    top100();
    create_user_graph();
  });
</script>
