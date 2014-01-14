---
title: Open source flash workflow
author: dirk
layout: post
permalink: /2008/11/12/open-source-flash-workflow/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2008/11/open-source-flash-workflow.html
categories:
  - flash
  - haxe
---
I needed to do a project in flash and I needed to find a way to do so on my favourite OS &#8211; gentoo linux.

After browsing through a lot of google search results, and links on [osflash.org][1] I found what I was looking for. Unfortunately I could not find a single utility to do everything, but true to the linux spirit I found multiple separate utilities that could be used to accomplish what I wanted.

First and most important is [haXe][2]. haXe is a open source web programming language. It can compile to javascript, php and swf and the syntax and semantics felt familiar enough for me (I&#8217;m used to C++). Using haXe you can produce swf files that can be opened using Adobe&#8217;s flash player.

The second important utility that I found was [swfmill][3]. swfmill compiles xml and resources into swf. This is very usefull as it allows you to build resource libraries that you can use from your haXe code.

I decided to use make as the build system &#8211; didn&#8217;t want to learn too many new things at once.

I used vim as my code editor since I wanted to test what doing a whole project in vim would be like and syntax highlighting exists for haXe!

For graphics I used a combination of gimp and inkscape.

This combination of utilities enabled me to create a flash application without needing to buy the Flash SDK, windows, photoshop or anything for that matter. It could also be possible to target an older version of flash like flash 7, which could then be opened using the open source gnash!

 [1]: http://osflash.org/
 [2]: http://www.haxe.org/
 [3]: http://swfmill.org/