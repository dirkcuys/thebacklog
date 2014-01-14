---
title: Method stubs and Unused Code
author: dirk
layout: post
permalink: /2010/03/08/method-stubs-and-unused-code/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2010/03/method-stubs-and-unused-code.html
categories:
  - Uncategorized
---
A common thing we all do is creating stub methods on a class and implementing methods we do not immediately use. Both can lead to errors and incorrect results in parts of the code that use method stubs or (previously) unused code. 

## Method Stubs

**Method stubs** are functions that aren&#8217;t implemented. The method body is normally empty, or returns a hard coded value in order to compile. Luckily they are easy to spot. There&#8217;s nothing wrong in using method stubs when writing and testing the initial interface of a class, but no method stubs should be left hanging around in your code! If you do have method stubs, this can be corrected in one of two ways:

1.  Remove the method stub

2.  Implement the method stub

Most of the time you should remove it. You should only implement a method stub if it is actually used!

## Unused Code

Another problem that is more difficult to spot is **unused (and untested) code**. If you are writing a library that are used by other people you cannot easily determine what methods are used and which ones are not. In this case your test cases should test all methods (actually all code paths).

The best way of avoiding unused methods, is to only create a method when you need it. This is stating the obvious, but we all tend to implement methods we don&#8217;t use immediately (or ever). Lets look at an example:

A common class we all need and code at some stage is a Vector class. There are many well defined operations that can be performed on a vector, like calculating the length, converting it to a unit vector, addition, subtraction, dot product, cross product, etc. It is very easy to quickly go and define a vector and all the methods for working with it.

Chances are good that you do not immediately need all the methods that you thought up for you class and that that they will contain bugs. Once again, there are two ways of solving this:

1.  Use the method (in a test case)

2.  Remove the method

Option 1 should be executed if you still foresee that it is very likely that the method will be used in the near future or if the implementation entailed a large investment of effort. Most of the time you should strongly consider removing the method.

To sum it up: When writing code, be minimalistic, when using existing code, remove clutter.

Regards

Dirk

&#8220;>