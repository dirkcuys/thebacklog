---
title: A visual haXe example
author: dirk
layout: post
permalink: /2009/05/03/a-visual-haxe-example/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2009/04/visual-haxe-example.html
categories:
  - code
  - haxe
---
This example will show you how to create a simple maize-style background in haXe like the picture below:

[<img src="http://2.bp.blogspot.com/_HGpDbFeo-MU/Sez2syKk_EI/AAAAAAAAACI/5ZZ8Lq8VXoY/s400/maize.png" border="0" alt="" />][1]

First we need to create the maize graphic. We do this by extending the flash.display.Sprite class. Lets call the derived class MaizeBackground. 

<div>
  <pre>class MaizeBackground extends flash.display.Sprite<br />{<br />    public function new()<br />    {<br />        super();<br />    }<br />}</pre>
</div>

This will create an empty sprite that does not show anything. In order to add some graphics we must either add another flash.display.DisplayObject containing some graphics to the sprite (like a Bitmap, MovieClip or another Sprite) or we must draw something on this sprite using the graphics property of the sprite. 

We are going to use the graphics property of the Sprite. So lets add a method called redraw to our class and use this to draw the maize. We should call to this method in the constructor:

<div>
  <pre>class MaizeBackground extends flash.display.Sprite<br />{<br />    public function new()<br />    {<br />        super();<br />        redraw();<br />    }<br /><br />    public function redraw()<br />    {<br />        graphics.beginFill(0xFFFFFF, 1.0);<br />        graphics.drawRect(0, 0, 800, 600);<br /><br />        var color : Int = 0x000000;<br />        for (y in 0...60)<br />        {<br />            color = color ^ 0xFFFFFF;<br />            for (x in 0...80)<br />            {<br />                var prev = false;<br />                if ( Math.random()                 {<br />                    graphics.beginFill(color, 1.0);<br />                    prev = true;<br />                }<br />                else<br />                {<br />                    graphics.beginFill(color ^ 0xFFFFFF, 1.0);<br />                    prev = false;<br />                }<br />                graphics.drawRect(x*10, y*10, 10, 10);<br />            }<br />        }<br /><br />        var filterArray = new Array();<br />        filterArray.push(new flash.filters.BlurFilter(5, 5, 9));<br />        filters = filterArray;<br />    }<br />}</pre>
</div>

The logic for the redraw method is reasonably straight forward. We look at the maize as being divided into rows and columns. 
1.  Step through the image row by row.
*   Alternate between black and white rows
*   For every column in the row there is a small possibility of drawing the inverted color.
*   Finally we apply a blur filter to make the crude maize look a little better.
</ol> 
An important thing to note is that the filters only get applied when we assign something to the filters property of a flash.display.DisplayObject. If we simply pushed the new BlurFilter to the filters property, the filter would not have been applied.

Save this class in a text file called MaizeBackground.hx

Now we need to create a main class and add the sprite to the stage. Create a class called MaizeExample:

<div>
  <pre>class MaizeExample<br />{<br />    static function main()<br />    {<br />        flash.Lib.current.addChild(new MaizeBackground());<br />    }<br />}</pre>
</div>

Save this class in a text file called MaizeExample.hx

Finally we need to create a compile file for the haXe compiler and compile the swf. Create a file called compile.hxml with the following contents:

<div>
  <br />-swf maize.swf<br />-swf-version 9<br />-main MaizeExample
</div>

Save the file in the same directory as MaizeBackground.hx and MaizeExample.hx and run haxe in that directory.

This should produce a swf file that can be opened using Adobe&#8217;s flash player or browser plugin.

The MaizeBackground example could benefit from many improvements: 
*   Add size properties to determine the size of the maize.
*   Play around with the different filters available in the flash.filters package
*   Change the size of the cells to be determined by a property
*   etc
</ul> 
Any comments or suggestions are more than welcome!

 [1]: http://2.bp.blogspot.com/_HGpDbFeo-MU/Sez2syKk_EI/AAAAAAAAACI/5ZZ8Lq8VXoY/s1600-h/maize.png