---
title: Brushing up on JavaScript
layout: post
---
I'm working on an application that is mostly client side and I need to brush up on my JavaScript skills a bit. Here are some notes on the experience.

One of the best resources I found was [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) from the Mozilla Developer Network.

The next thing I would like to point out is *promises*, definitely one of the more useful things you'll learn about JavaScript. I'm using the jquery Deferred object which according to my understanding implements the [promise interface](http://promises-aplus.github.io/promises-spec/).

Working in async world is not completely new to me, I've developed some stuff in HaXe targeting the Flash runtime and I've developed a kiosk application using QML for the interface. Promises are a big step forward:

{% highlight JavaScript %}
$.when(function(){
    return getData();
}).then(function(res){ 
    return getSomeOtherData(res);
}).fail(function(err){
    .. 
});
{% endhighlight %}

Some useful JavaScript functions that I met along the way was [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) and [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind). 

Amongst things `apply` is good for calling a function with list of arguments that you are computing. For instance, maybe you want to get a list of files to copy, then copy all the files and after all that is finished you want to do something else.

{% highlight JavaScript %}
var args = [];
// build your array of args
// args.push( function (res){ ... blah ... } );
$.when.apply(null, args);
{% endhighlight %}

And I used `bind` to make a functor that I can pass to be called.

{% highlight JavaScript %}
doSomethingWithCallback(copyBlahBlah.bind(null,arg1, arg2));
{% endhighlight %}

There's something more magic hiding with `bind` - you don't need to pass all the arguments. They call it currying, I think no amount of code can compare with a proper Durban curry.

{% highlight JavaScript %}
var f = function(a, b, c) {};
var f2 = f.bind(null, [1, 2]);
f2(3);
{% endhighlight %}

Obviously there are lots more that I need to catch up on and learn!
