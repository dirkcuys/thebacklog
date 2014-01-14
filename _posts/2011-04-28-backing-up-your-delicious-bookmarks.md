---
title: backing up your delicious bookmarks
author: dirk
layout: post
permalink: /2011/04/28/backing-up-your-delicious-bookmarks/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2011/04/backing-up-you-delicious-bookmarks.html
categories:
  - cloud-backup
  - delicious
---
As some may have heard, [delicious][1] is being acquired by [AVOS][2]. You can transfer your bookmarks, but I decided to make a backup of my bookmarks, just in case.

The quickest way I could think of, was using the RSS feed.

Log into your account on the web and get the URL for the &#8220;Private RSS Feed&#8221; at the bottom of the page. Change the last part of the URL to be larger than the number of bookmarks you have saved on delicious.

Ex. change 
<pre>"http://feeds.delicious.com/v2/rss/user_bob?count=<span>15</span>"</pre>

to 
<pre>"http://feeds.delicious.com/v2/rss/user_bob?count=<span>1000</span>"</pre>

in the URL.

You can safe the page your browser displays when you enter the URL, or you can use wget or another utility to download the feed. 

The data is now in your hands and it&#8217;s up to you to keep it safe.

 [1]: http://www.delicious.com/
 [2]: http://www.avos.com/