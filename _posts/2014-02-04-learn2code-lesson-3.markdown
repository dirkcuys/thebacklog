---
title: "Learn to Code: lesson 3 - loops"
author: dirk
permalink: /2014/02/04/learn2code-lesson-3/
layout: post
categories:
 - tutorial
tags:
 - learn2code
 - javascript
 - svg
 - loops
---

<svg id="canvas"></svg>

Yeah, I know, it took a while... But then again, what did I get? Two tweets from good friends! Thanks guys, actually, thanks girls! 

So that was me complaining and making excuses, on to code - [click here](http://jsfiddle.net/dirkcuys/dFDs9/) and try this code:

{% highlight JavaScript %}
var base = 200;
var left = 0;
var height = 100;
var width = 20;
var gap = 20;
for ( counter = 0; counter < 10; counter++ ){
    rect(left + counter*(width + gap), base - height, width, height);
}
{% endhighlight %}

Wow, that's magic! Our lives just got simpler if we can live with a bit of monotomy. You might recognize the first part from [lesson 2]({{baseurl}}{% post_url 2014-01-14-learn2code-lesson-2 %}), but if you look carefully you will spot the magic:

{% highlight JavaScript %}
for ( var counter = 0; counter < 10; counter++ ){
    rect(left+counter*(width+gap), base - height, width, height);
}
{% endhighlight %}

Lets play a little! Go ahead and replace `10` in `counter < 10` with another number like `5`. Try changing `var counter = 0` to `var counter = 4`. And what about changing `counter++` to `counter = counter+2` or `counter += 2`. Try adjusting the other variables like we did last time and see what the effects are.

The `for` thingy is called a loop and it allows you to do something multiple times - like drawing lots of buildings! 

The first part, `var counter = 1`, is where we define the variable that we are going to use to keep count of where we are.

The second part, `counter < 10`, is the condition that we use to specify when to stop the loop. `counter < 10` will stop the loop when `counter` is bigger than or equal to 10.

The third part, `counter++`, is where you define how `counter` should be modified every time the loop executes. `counter++` is shorthand for writing `counter = counter + 1`.

The last part is between the `{` and `}` and this is the part you want to repeat multiple times - in this instance drawing a building!

Ok, ok, "but it is boring!!" you say. I agree, but lets mix in a little more magic - `Math.random()`. This will give you a random value between 0 and 1! Change the body of your loop as follows:

{% highlight JavaScript %}
for ( var counter = 0; counter < 10; counter++ ){
    width = 10 + 20*Math.random();
    height = 20 + 100*Math.random();
    rect(left, base - height, width, height);
    left = left + width + gap;
}
{% endhighlight %}

Tweak and enjoy your infinite number of unique cities! The skyline at the top of this page is generated using similar code, refresh the page to see a new city at the top! Go forth and share your creations on twitter with the tag [#learn2code](https://twitter.com/search?q=%23learn2code).

Until next time!!

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
var height = 40;
var width = 40;
var gap = 10;
for ( counter=1; counter<20; counter++ ){
    rect(left, base - height, width, height);
    left = left + width + gap;
    width = 20 + Math.random()*40;
    height = 20 + Math.random()*180;
}

</script>
