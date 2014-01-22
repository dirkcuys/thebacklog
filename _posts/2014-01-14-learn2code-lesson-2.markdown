---
title: "Learn to Code: lesson 2 - variables"
author: dirk
permalink: /2014/01/14/learn2code-lesson-2/
layout: post
categories:
 - tutorial
tags:
 - learn2code
 - javascript
 - svg
 - variables
---

Ok, so I got excited and couldn't wait a week until the next lesson. And I know all of you got extremely exited while building your own cities and you want to do more!

Did you notice that some stuff felt like a lot of effort to do? I did, that is why I cheated and used Inkscape to produce the images you saw on the previous post...

But before I bore you to death, [click here](http://jsfiddle.net/dirkcuys/TVdhb/) and enter the following where it tells you to:

{% highlight JavaScript %}
var base = 200;
var left = 10;
var height = 100; // something less than the value of base
var width = 20;
rect(left, base - height, width, height);
height = 50;
width = 60;
left = 40;
rect(left, base - height, width, height);
{% endhighlight %}

Lets play a little. Change the value of base - replace ```var base = 200;``` with ```var base = 300```. See what that did? Lining up the buildings at the bottom has just became a breeze!

Try adding the following below the code you've written:

{% highlight JavaScript %}
left = left + width + 10;
rect(left, base - height, width, height);
{% endhighlight %}

Now creating something a little more complex feels like a bit less work (at least to me, I don't like keeping running totals of positions in my head).

You have just learned how to use variables! They are basically a way for the computer to store a value. That value can be used later as in ```rect(left, base - height, width, height)``` or changed as in ```height = 40;```.

And you can do some maths with variables: ```var x = 2*4 + 1;``` or ```left = left + 10;```.

Not all variables need to be numbers. Add this:

{% highlight JavaScript %}
var myCityName = "Some city";
text( 10, 10, myCityName);
{% endhighlight %}

Now go and change that, you can't let people see a city named "Some city"!!

Recreate the city that you created in the previous lesson, but this time using variables. Try out new variables and see what happens. Here is mine (code this time, promise). And please remember to share yours with the tag [#learn2code](https://twitter.com/search?q=%23learn2code).

<svg id="canvas"></svg>

Until next, uhm, time.

<script src="https://rawgithub.com/wout/svg.js/master/dist/svg.min.js"></script>
<script type="text/javascript">
function rect(x, y, width, height){
        var draw = SVG('canvas').size(1000, 200);
            var rect = draw.rect(width, height);
                rect.transform({x: x, y: y});
}

function circle(x, y, radius){
        var draw = SVG('canvas').size(1000, 200);
            var circle = draw.circle(radius);
                circle.transform({x: x-radius/2.0, y: y-radius/2.0});
}

function text(x, y, text){
        var draw = SVG('canvas').size(1000, 200);
            var txt = draw.text(text);
                txt.transform(x, y);
}

var base = 200;
var left = 0;
var height = 100;
var width = 40;
rect(left, base - height, width, height);

left = left + width + 10;
height = 200;
width = 60;
rect(left, base - height, width, height);

left = left + width + 10;
height = 160;
width = 80;
rect(left, base - height, width, height);

left = left + width + 10;
height = 80;
width = 120;
rect(left, base - height, width, height);

left = left + width + 10;
height = 50;
width = 60;
rect(left, base - height, width, height);

left = left + width + 10;
height = 120;
width = 50;
rect(left, base - height, width, height);

left = left + width + 10;
height = 150;
width = 30;
rect(left, base - height, width, height);

left = left + width + 10;
height = 50;
width = 60;
rect(left, base - height, width, height);

left = left + width + 10;
height = 195;
width = 25;
rect(left, base - height, width, height);
rect(left - 5, base - height + 5, width + 10, width);
rect(left - 10, base - height + 10, width + 20, width - 15);

left = left + width + 10;
height = 40;
width = 80;
rect(left, base - height, width, height);

left = left + width + 10;
height = 180;
width = 40;
rect(left, base - height, width, height);


left = left + width + 10;
height = 95;
width = 47;
rect(left, base - height, width, height);

left = left + width;
height = 115;
width = 42;
rect(left, base - height, width, height);

left = left + width + 10;
height = 95;
width = 47;
rect(left, base - height, width, height);

left = left + width + 10;
height = 100;
width = 80;
rect(left, base - height, width, height);

left += 10;
width -= 20
height = 140;
rect(left, base - height, width, height);

left += 10;
width -= 20
height = 170;
rect(left, base - height, width, height);

</script>
