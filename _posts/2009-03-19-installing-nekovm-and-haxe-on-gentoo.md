---
title: Installing NekoVM and haXe on Gentoo
author: dirk
layout: post
permalink: /2009/03/19/installing-nekovm-and-haxe-on-gentoo/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2009/03/installing-nekovm-and-haxe-on-gentoo.html
categories:
  - gentoo
  - haxe
  - neko
---
Installing NekoVM and haXe on gentoo is done best by using the ebuilds provided by Daniel Turing.

To install the overlay, you need Layman and Subversion. Have a look at [Gentoo Overlays: Users&#8217; Guide][1] to set up layman if you haven&#8217;t done so already and make sure you have emerged subversion.

Manually download the text file [layman-haxe.txt][2] using your browser or wget:

<div>
  $ wget http://svn.xinf.org/haxe-gentoo-overlay/layman-haxe.txt
</div>

Open up the text file with your favourite editor and replace the line

src=&#8221;http://xinf.org/haxe-gentoo-overlay&#8221;

with

src=&#8221;http://svn.xinf.org/haxe-gentoo-overlay&#8221;

alternativeliy use

<div>
  $ mv layman-haxe.txt layman-haxe.backup<br />$ sed &#8216;s#src=&#8221;http://#src=&#8221;http://svn.#g&#8217; layman-haxe.backup > layman-haxe.txt
</div>

now check out the overlay using

<div>
  $ layman -o file:///path/to/file/layman-haxe.txt -f<br />$ layman -o file:///path/to/file/layman-haxe.txt -a haxe
</div>

You can now install the neko, haxe and swfmill that&#8217;s in the overlay using

<div>
  $emerge neko haxe swfmill
</div>

To install the latest version of NekoVM (1.8.0 at the time of this writing), you first have to create a local overlay. Follow the instructions on [gentoo-wiki.com][3] to do this.

Create the following directories in your local overlay: dev-lang dev-lang/neko dev-lang/neko/files

Copy 50\_mod\_neko.conf and 50neko from the layman haxe overlay into the dev-lang/neko/files directory. Copy [this text][4] into dev-lang/neko/files/neko-1.8.0-gentoo.patch. Copy neko-1.7.1-r1.ebuild from the layman haxe overlay to dev-lang/neko/neko-1.8.0-r1.ebuild.  
(update: [here][5] is a link for the patch for neko 1.8.1)

Download [neko-1.8.0.tar.gz][6] into your distfiles directory. All that&#8217;s left to do is to generate the manifest file. Use

<div>
  $ ebuild neko-1.8.0-r1.ebuild digest
</div>

to generate the digest file. You will need to execute this command as a user with privileges to write to the dev-lang/neko directory.

Now you can emerge the latest version of neko!

<span>Update:</span> the haxe and neko ebuild together with the patches can now be found at [github][7]

 [1]: http://www.gentoo.org/proj/en/overlays/userguide.xml
 [2]: http://svn.xinf.org/haxe-gentoo-overlay/layman-haxe.txt
 [3]: http://en.gentoo-wiki.com/wiki/Overlays
 [4]: http://pastebin.com/f1a3cb6b6
 [5]: http://pastebin.com/Gu14t1M0
 [6]: http://nekovm.org/download
 [7]: http://github.com/dirkcuys/gentoo_overlay