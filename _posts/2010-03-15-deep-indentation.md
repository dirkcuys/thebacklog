---
title: Deep indentation
author: dirk
layout: post
permalink: /2010/03/15/deep-indentation/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2010/03/code-smell-for-week-deep-indentation.html
categories:
  - Uncategorized
---
Having many levels of indentation can seriously hamper readability (and thus the understandability) of code. These indentation levels are normally a result of nested conditional statements and try-catch blocks.

## How many levels are too many?

Many people feel that <span>4 levels</span> of indentation is the limit. This is not a hard rule, but serves as a good guideline.

Another guideline is that your source file should never contain a line of code that gets <span>wrapped around</span> or needs <span>side scrolling</span>. Unfortunately this is dependant on your screen resolution and font size. For some people the limit is at 80 characters (the Linux kernel uses this measure) other people feel that this measure is outdated and wastes screen real estate.

The basic idea is that whenever the amount of indentation levels make it <span>difficult to understand</span> the code, it&#8217;s too many.

## How do I fix it?

One way suggested in <span>“Refactoring: Improving the Design of Existing Code”</span> by Martin Fowler is replacing the conditional with Guard Clauses. Ex. <div>
  <pre>method body<br />if condition1 is true<br />  if condition2 is true<br />     …<br />  else<br />     …</pre>
</div>

can be replaced with <div>
  <pre>method body<br />if condition1 is false<br />  return<br />if condition2 is true<br />  …<br />else<br />  …</pre>
</div>

Sometimes it is possible to rework the logic of the method. You may find that some conditionals are excessive or that it can be simplified further.

Many times though, this is an indication that other problems exist in your code. Things like methods that are too big, constant testing for null, using lots of “Type Codes”, implementing different states in one object, etc. In a lot of these cases, addressing the other problems will also fix the problem of multiple indentation levels.