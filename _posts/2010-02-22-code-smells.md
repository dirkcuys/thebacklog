---
title: Code Smells
author: dirk
layout: post
permalink: /2010/02/22/code-smells/
blogger_blog:
  - disfunksioneel.blogspot.com
blogger_author:
  - Dirk Uys
blogger_permalink:
  - /2010/02/codesmells.html
categories:
  - Uncategorized
---
<div>
  <p>
    <span>From <a href="http://en.wikipedia.org/wiki/Code_smell" title="Wikipedia">Wikipedia</a>: </span><i><span>“In computer programming, code smell is any symptom in the source code of a program that possibly indicates a deeper problem.”</span></i>
  </p></p> 
  
  <p>
    <span>We all need to get things done and most of the time we need to do them in a hurry. Unfortunately the result is that our code are not always a clean as it should be. Fortunately we are not alone in this world and other people experience the same problems that we do.</span>
  </p>
  
  <p>
    <span><br /></span>
  </p>
  
  <p>
    <b><span>Code Smells</span></b><span> are one of those things that can help us to identify when we are doing things that may hurt ourselves in the future. We may not always be able to fix them, but whenever you encounter a </span><span>Code Smell</span><span>, see if you can either justify it or fix it.</span>
  </p>
  
  <p>
    <span><br /></span>
  </p>
  
  <p>
    <span>Code Smells are not the problem themselves, but they indicate that other problems exist in the code. Solving them is important, but it is even more important to understand why they are bad.</span>
  </p>
  
  <h2>
    <span>Code Smell for the week: Huge methods/functions</span>
  </h2>
  
  <p>
    <span>Whenever a method becomes too big it gets </span><b><span>hard to follow the logic</span></b><span> of the method. Such a method should be broken down into smaller methods that groups together related functionality. If the refactored methods then contains unrelated functionality, consider moving them to separate classes.</span>
  </p>
  
  <p>
    <span>When doing the refactoring of big methods, it is common to encounter problems like the constant use of a shared variable throughout the method. This is in its own a Code Smell and may be mentioned at a later stage.</span>
  </p>
  
  <h3>
    <span>When is a method TOO big? </span>
  </h3>
  
  <p>
    <span>The size of a method is not the only determining factor. Whenever your method performs </span><b><span>more than one definable thing</span></b><span>, it&#8217;s probably too big.</span>
  </p>
  
  <p>
    <span>Another telling factor is the levels of </span><b><span>indentation</span></b><span> within the method. If you start having more than 4 levels of indentation in one method, you have good reason to believe that the method is too big. In methods that are too big, it can become very hard to follow the indentation levels.</span>
  </p>
  
  <h3>
    <span>Some things to consider:</span>
  </h3>
  
  <ol type="1">
    <li>
      <span>Don&#8217;t overdo it. Functions that are too small can hamper the readability of the code.</span>
    </li>
    <li>
      <span>Don&#8217;t expose functions to the global name space unless needed.</span>
    </li>
  </ol>
  
  <p>
    <span>Please discuss Code Smells amongst each other. It is often more important to know why code smells are bad rather than knowing how to fix them. Knowing why they are bad will most likely result in us producing less Code Smells.</span>
  </p>
</div>