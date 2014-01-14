---
title: High resolution dependency graph
author: dirk
layout: post
permalink: /2011/04/06/high-resolution-dependency-graph/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2011/04/high-resolution-dependency-graph.html
categories:
  - "gentoo linux 'data visualization'"
---
I generated a high resolution Gentoo Linux package dependency graph.

Packages are ordered according to their complete Gentoo package name. The result is that the graph shows groupings of packages with lots of dependencies or reverse dependencies. These groupings typically fall under dev-\*, kde-\*, gnome-\*, x11-libs or media-\*.

Text labels are only generated for packages with more that 10 dependencies or reverse dependencies. The numbers in brackets after the package name, is the number of dependencies followed by the number of reverse dependencies.

<table align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      <a href="http://2.bp.blogspot.com/-lh_QaxVc3Ww/TZzPNGGoGMI/AAAAAAAAAE4/m5jySScncdA/s1600/graph.jpg" imageanchor="1"><img border="0" height="320" src="http://2.bp.blogspot.com/-lh_QaxVc3Ww/TZzPNGGoGMI/AAAAAAAAAE4/m5jySScncdA/s320/graph.jpg" width="320" /></a>
    </td>
  </tr>
  
  <tr>
    <td>
      Packages grouped by categories (1600&#215;1600)
    </td>
  </tr>
</table>

A package of particular interest is app-text/sword. It has a total of 165 reverse dependencies!! This is very large number of packages that depends on app-text/sword! All of the packages that depends on app-text/sword seems to be different modules specifically for sword.