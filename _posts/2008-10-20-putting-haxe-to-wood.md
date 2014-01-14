---
title: Putting haXe to wood
author: dirk
layout: post
permalink: /2008/10/20/putting-haxe-to-wood/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2008/10/putting-haxe-to-wood.html
categories:
  - flash
  - haxe
---
After using [haXe][1] for a personal project and finding it quite useful I decided to do a little write-up on what I did.

Being related to a certain individual (my sister) with a dream to establish an &#8220;audio visual print and digital&#8221; magazine ([PostBox][2]), the duty of creating the digital part was naturally bestowed upon me. I needed to create a cross-platform DVD interface (the kind of interface you view on you pc, not your dvd player).

The DVD contains photos, music, video and articles from various artists. All of this content needed to be handled in an efficient way that works on any PC regardless of the software installed (read codecs). This led me to flash.

But this didn&#8217;t completely satisfy me, I also had another consideration: I am most at home in a linux environment (gentoo specifically) and I wished to do all the work in this environment. (okay, so I like the idea of free software as well)

This led me to haXe! After taking a look at the community and trying haXe out for a play project (which I may still finish someday), I decided that this was the tool to use.

I have had to solve many problems (some with plenty of time, other with way too little sleep and a tight deadline) and I wish to discuss some of those.

In this series of posts I wish to discuss the following topics: 
*   The flash linux workflow
*   Getting started with haXe
*   Creating a generic audio player
*   Creating a generic gallery
*   Shared libraries in haXe
*   Preparing video and audio for use with flash

And for those asking the obvious question &#8211; I will make the source code that I&#8217;m not too embarrassed about available under some open source license, BSD or GPL.

Please leave all your suggestions and any questions you may have!

 [1]: http://www.haxe.org/
 [2]: http://www.post-box.blogspot.com/