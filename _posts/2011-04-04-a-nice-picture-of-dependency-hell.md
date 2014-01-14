---
title: A nice picture of (dependency) hell
author: dirk
layout: post
permalink: /2011/04/04/a-nice-picture-of-dependency-hell/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2011/04/linux-software-dependencies.html
categories:
  - data visualization
  - gentoo
  - linux
---
[&#8220;Dependency hell&#8221;][1] refers the difficulty that arise when installing a software package that requires a lot of other software packages to be installed. The required software packages (or dependencies) may themselves require other software packages to be installed.

To give a better idea of why this can be difficult, I created the following graph.  
<table align="center" cellpadding="0" cellspacing="0">
  <tr>
    <td>
      <a href="http://3.bp.blogspot.com/-3JwaJkoNl5s/TZowcxUz8GI/AAAAAAAAAEo/wOeUwX23b08/s1600/graph_small.jpg"><img alt="circle graph of software dependencies" border="0" src="http://3.bp.blogspot.com/-3JwaJkoNl5s/TZowcxUz8GI/AAAAAAAAAEo/wOeUwX23b08/s400/graph_small.jpg" /></a>
    </td>
  </tr>
  
  <tr>
    <td>
      63988 Dependencies between 14319 software packages
    </td>
  </tr>
</table>

This graph shows the dependencies between software packages in the [Gentoo Linux][2] operating system. In total there are 14319 packages with 63988 dependencies between them! 

Packages are drawn on the circumference of the circle and a dependency is indicated by a line draw from one package to another. The color of a package is randomly generated, while the color of a line is determined by the package that is required by the other packages. 

Every package has a line starting on the rim of the circle drawn radially outwards. The length of the line is determined by the amount of other packages that depend on the package.

Here is a closeup of a small part of the graph:  
[<img alt="circle graph of software dependencies" border="0" src="http://4.bp.blogspot.com/-5jpm5W7vNFg/TZozShBhmFI/AAAAAAAAAEw/mhzcpLKlOgU/s400/graph_snip.jpg" />][3]The most common dependencies are development tools. This is a list of the 15 packages with the most reverse dependencies:

<table>
  <tr>
    <th>
      Package
    </th>
    
    <th>
      # of reverse dependencies
    </th>
  </tr>
  
  <tr>
    <td>
      dev-lang/perl
    </td>
    
    <td>
      1559
    </td>
  </tr>
  
  <tr>
    <td>
      dev-util/pkgconfig
    </td>
    
    <td>
      1195
    </td>
  </tr>
  
  <tr>
    <td>
      dev-lang/python
    </td>
    
    <td>
      1047
    </td>
  </tr>
  
  <tr>
    <td>
      x11-libs/gtk+
    </td>
    
    <td>
      1042
    </td>
  </tr>
  
  <tr>
    <td>
      sys-devel/libtool
    </td>
    
    <td>
      950
    </td>
  </tr>
  
  <tr>
    <td>
      app-arch/unzip
    </td>
    
    <td>
      878
    </td>
  </tr>
  
  <tr>
    <td>
      sys-devel/automake
    </td>
    
    <td>
      818
    </td>
  </tr>
  
  <tr>
    <td>
      sys-devel/autoconf
    </td>
    
    <td>
      766
    </td>
  </tr>
  
  <tr>
    <td>
      dev-libs/glib
    </td>
    
    <td>
      652
    </td>
  </tr>
  
  <tr>
    <td>
      x11-libs/qt-gui
    </td>
    
    <td>
      612
    </td>
  </tr>
  
  <tr>
    <td>
      virtual/jdk
    </td>
    
    <td>
      588
    </td>
  </tr>
  
  <tr>
    <td>
      sys-apps/sed
    </td>
    
    <td>
      575
    </td>
  </tr>
  
  <tr>
    <td>
      x11-libs/libX11
    </td>
    
    <td>
      545
    </td>
  </tr>
  
  <tr>
    <td>
      app-admin/eselect-python
    </td>
    
    <td>
      496
    </td>
  </tr>
  
  <tr>
    <td>
      dev-util/cmake
    </td>
    
    <td>
      455
    </td>
  </tr>
</table>

The graph was created with data obtained from the Gentoo Portage tree and drawn using the Python Image Libray (PIL).

 [1]: http://en.wikipedia.org/wiki/Dependency_hell
 [2]: http://www.gentoo.org/
 [3]: http://4.bp.blogspot.com/-5jpm5W7vNFg/TZozShBhmFI/AAAAAAAAAEw/mhzcpLKlOgU/s1600/graph_snip.jpg