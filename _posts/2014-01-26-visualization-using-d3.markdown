---
title: Visualization using D3
author: dirk
tags:
- d3
- dataviz
permalink: /2014/01/26/visualization-using-d3/
layout: post
---

Two visualization I created for [P2PU](https://p2pu.org) from data for [Play with your music](http://www.playwithyourmusic.org). They are used [here](http://info.p2pu.org/2014/01/13/how-we-used-the-echonest-api-for-engagement-learning/).

A bubble diagram using a force layout:

<svg id="top100" class="large-12 columns"></svg>

A graph using a force layout:

<svg id="user_graph" class="large-12 columns"></svg>

Go ahead, click on one of the nodes on the second and drag it around a little :) And the curious reader is encouraged to 'view source'.

<script charset="utf-8" type="text/javascript" src="http://d3js.org/d3.v3.min.js"></script><br/>
<script type="text/javascript" src="https://rawgithub.com/dirkcuys/8057499/raw/79045496b50b9d47e7de3eb3ae8d980fe6aa214b/top100.js"></script><br/>
<script type="text/javascript">top100();</script><br/>
<script type="text/javascript" src="https://rawgithub.com/dirkcuys/8057283/raw/dd55a208400aabd491c5ef1932b2d586226f4eef/create_user_graph.js"></script><br/>
<script type="text/javascript">create_user_graph();</script>
